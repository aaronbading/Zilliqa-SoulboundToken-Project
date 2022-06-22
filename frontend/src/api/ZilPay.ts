import { BN, bytes, units, Zilliqa } from "@zilliqa-js/zilliqa";
import ZilliqaUtil from "@zilliqa-js/util";
import { Value } from "../types/zilliqa";
import Long from "long";

interface ZilPay extends Zilliqa {
  utils: typeof ZilliqaUtil;
}

type Params = {
  contractAddress: string;
  transition: string;
  params: Value[];
  amount: string;
};

const window = global.window as any;

const CHAIN_ID = 333; // testnet, see https://dev.zilliqa.com/docs/apis/api-blockchain-get-network-id/
const MSG_VERSION = 1;
const VERSION = bytes.pack(CHAIN_ID, MSG_VERSION);

const GAS_LIMIT = Long.fromNumber(100000);
const GAS_PRICE = units.toQa("2000", units.Units.Li);

const TX_PARAMS = {
  version: VERSION,
  amount: new BN(0),
  gasPrice: GAS_PRICE,
  gasLimit: GAS_LIMIT,
};

export default class ZilPayClient {
  public zilpay: () => Promise<any>;

  constructor() {
    this.zilpay = () =>
      new Promise((resolve, reject) => {
        let k = 0;
        const i = setInterval(() => {
          if (k >= 10) {
            clearInterval(i);
            return reject(new Error(`ZIlPay is not installed.`));
          }

          if (typeof window.zilPay !== `undefined`) {
            clearInterval(i);
            return resolve(window.zilPay);
          }

          k++;
        }, 100);
      });
  }

  async getSubState(contract: string, field: string, params: string[] = []) {
    const zilPay = await this.zilpay();
    const res = await zilPay.blockchain.getSmartContractSubState(
      contract,
      field,
      params
    );

    if (!res) {
      throw new Error("ZIlPay is not loaded yet");
    }

    if (res.error) {
      throw new Error(res.error.message);
    }

    if (res.result && res.result[field] && params.length === 0) {
      return res.result[field];
    }

    if (res.result && res.result[field] && params.length === 1) {
      const [arg] = params;
      return res.result[field][arg];
    }

    if (res.result && res.result[field] && params.length > 1) {
      return res.result[field];
    }

    return null;
  }

  async getState(contract: string) {
    const zilPay = await this.zilpay();
    const res = await zilPay.blockchain.getSmartContractState(contract);

    if (!res) {
      throw new Error("ZIlPay is not loaded yet");
    }

    if (res.error) {
      throw new Error(res.error.message);
    }

    return res.result;
  }

  async getBlockchainInfo() {
    const zilPay = await this.zilpay();
    const { error, result } = await zilPay.blockchain.getBlockChainInfo();

    if (error) {
      throw new Error(error.message);
    }

    return result;
  }

  async call(data: Params) {
    const zilPay = await this.zilpay();
    const { contracts } = zilPay;
    const contract = contracts.at(data.contractAddress);

    return await contract.call(data.transition, data.params, TX_PARAMS);
  }
}
