import { Zilliqa } from "@zilliqa-js/zilliqa";
import { expect } from "@jest/globals";
import { getAddressFromPrivateKey, schnorr } from "@zilliqa-js/crypto";
import { scillaJSONParams } from "@zilliqa-js/scilla-json-utils";

import {
  expectEvents,
} from "./testutils";

import {
  API,
  TX_PARAMS,
  CODE,
  FAUCET_PARAMS,
} from "./config";

enum RespondCode {
  NotOwner = 1,
  SetHello = 2,
}

const JEST_WORKER_ID = Number(process.env["JEST_WORKER_ID"]);
const GENESIS_PRIVATE_KEY = global.GENESIS_PRIVATE_KEYS[JEST_WORKER_ID - 1];

const zilliqa = new Zilliqa(API);
zilliqa.wallet.addByPrivateKey(GENESIS_PRIVATE_KEY);

let globalContractAddress;

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

beforeEach(async () => {
  zilliqa.wallet.setDefault(getTestAddr(CONTRACT_OWNER));
  const init = scillaJSONParams({
    _scilla_version: ["Uint32", 0],
    owner: ["ByStr20", getTestAddr(CONTRACT_OWNER)],
  });
  const [, contract] = await zilliqa.contracts
    .new(CODE, init)
    .deploy(TX_PARAMS, 33, 1000, true);
  globalContractAddress = contract.address;

  if (globalContractAddress === undefined) {
    throw new Error();
  }
});

describe("HelloWorld", () => {
  test("should set hello", async () => {
    zilliqa.wallet.setDefault(getTestAddr(CONTRACT_OWNER));
    const tx: any = await zilliqa.contracts
      .at(globalContractAddress)
      .call(
        "setHello",
        scillaJSONParams({
          msg: ["String", "This is a test msg"]
        }),
        TX_PARAMS
      );

    expect(tx.receipt.success).toBe(true);
    expectEvents(tx.receipt.event_logs, [{
      name: "setHello",
      params: {
        code: ["Uint32", RespondCode.SetHello],
      },
    }]);

    const state = await zilliqa.contracts
      .at(globalContractAddress)
      .getState();
    
    expect(state).toEqual({ _balance: '0', welcome_msg: 'This is a test msg' })
  });

  test("should get hello", async () => {
    zilliqa.wallet.setDefault(getTestAddr(CONTRACT_OWNER));
    const tx: any = await zilliqa.contracts
      .at(globalContractAddress)
      .call(
        "getHello",
        scillaJSONParams({}),
        TX_PARAMS
      );

    expect(tx.receipt.success).toBe(true);
    expectEvents(tx.receipt.event_logs, [{
      name: "getHello",
      params: {
        msg: ["String", ""],
      },
    }]);

    const state = await zilliqa.contracts
      .at(globalContractAddress)
      .getState();
    
    expect(state).toEqual({ _balance: '0', welcome_msg: '' })
  });
})
