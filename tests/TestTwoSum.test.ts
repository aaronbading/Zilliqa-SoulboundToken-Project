import { Zilliqa } from "@zilliqa-js/zilliqa";
import { expect } from "@jest/globals";
import { getAddressFromPrivateKey, schnorr } from "@zilliqa-js/crypto";
import { scillaJSONParams } from "@zilliqa-js/scilla-json-utils";

import {
  expectEvents,
  expectTransitions,
} from "./testutils";

import {
  API,
  TX_PARAMS,
  getContractCode,
  FAUCET_PARAMS,
} from "./config";

const JEST_WORKER_ID = Number(process.env["JEST_WORKER_ID"]);
const GENESIS_PRIVATE_KEY = global.GENESIS_PRIVATE_KEYS[JEST_WORKER_ID - 1];

const zilliqa = new Zilliqa(API);
zilliqa.wallet.addByPrivateKey(GENESIS_PRIVATE_KEY);

let testerContractAddress;
let testeeContractAddress;

let globalTestAccounts: Array<{
  privateKey: string;
  address: string;
}> = [];
const CONTRACT_OWNER = 0;
const TOKEN_OWNER = 0;
const MINTER = 1;
const STRANGER = 2;
const getTestAddr = (index) => globalTestAccounts[index]?.address as string;

beforeAll(async () => {
  const accounts = Array.from({ length: 3 }, schnorr.generatePrivateKey).map(
    (privateKey) => ({
      privateKey,
      address: getAddressFromPrivateKey(privateKey),
    })
  );

  for (const { privateKey, address } of accounts) {
    zilliqa.wallet.addByPrivateKey(privateKey);
    const tx = await zilliqa.blockchain.createTransaction(
      zilliqa.transactions.new(
        {
          ...FAUCET_PARAMS,
          toAddr: address,
        },
        false
      )
    );
    if (!tx.getReceipt()?.success) {
      throw new Error();
    }
  }
  globalTestAccounts = accounts;

  console.table({
    JEST_WORKER_ID,
    GENESIS_PRIVATE_KEY,
    CONTRACT_OWNER: getTestAddr(CONTRACT_OWNER),
    TOKEN_OWNER: getTestAddr(TOKEN_OWNER),
    MINTER: getTestAddr(MINTER),
    STRANGER: getTestAddr(STRANGER),
  });
});

async function deployContract(contractCode: string) {
  const init = scillaJSONParams({
    _scilla_version: ["Uint32", 0],
  });
  const [, contract] = await zilliqa.contracts
    .new(contractCode, init)
    .deploy(TX_PARAMS, 33, 1000, true);
  if (contract.address === undefined) {
    throw new Error();
  }
  return contract.address
}

beforeEach(async () => {
  zilliqa.wallet.setDefault(getTestAddr(CONTRACT_OWNER));
  testerContractAddress = await deployContract(getContractCode("contracts/TestTwoSum.scilla"));
  testeeContractAddress = await deployContract(getContractCode("tests/contracts/TwoSum.scilla"));
});

describe("TwoSum", () => {
  it("should be able to add two numbers", async () => {
    zilliqa.wallet.setDefault(getTestAddr(CONTRACT_OWNER));
    const tx: any = await zilliqa.contracts
      .at(testeeContractAddress)
      .call(
        "TwoSum",
        scillaJSONParams({
          a: ["Uint32", 1],
          b: ["Uint32", 1]
        }),
        TX_PARAMS
      );

    expect(tx.receipt.success).toBe(true);

    expectTransitions(tx.receipt.transitions, [
      {
        tag: "ListenResult",
        getParams: () => ({
          res: ["Uint32", 2],
        }),
      },
    ]);
  })
})

describe("TestTwoSum", () => {
  it("should be call TwoSum and emit pass event", async () => {
    zilliqa.wallet.setDefault(getTestAddr(CONTRACT_OWNER));
    const tx: any = await zilliqa.contracts
      .at(testerContractAddress)
      .call(
        "Test",
        scillaJSONParams({
          contractAddress: ["ByStr20", testeeContractAddress]
        }),
        TX_PARAMS
      );

    expect(tx.receipt.success).toBe(true);
    
    expectTransitions(tx.receipt.transitions, [
      {
        tag: "TwoSum",
        getParams: () => ({
          a: ["Uint32", 1],
          b: ["Uint32", 1],
        }),
        addr: testeeContractAddress,
      },
      {
        tag: "ListenResult",
        getParams: () => ({
          ans: ["Uint32", 2],
        }),
        addr: testerContractAddress,
      },
    ]);

    expectEvents(tx.receipt.event_logs, [
      {
        name: "TestResult",
        params: {
          result: ["String", "Pass"],
        },
      }
    ])
    
  });
})
