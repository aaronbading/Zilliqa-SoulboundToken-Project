import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { Contracts } from "@zilliqa-js/contract";
import { CallParams, Value } from "../types/zilliqa";
import { TX_PARAMS } from "./ZilliqaProvider";

declare global {
  interface Window {
    // TODO: Complete type declaration
    zilPay?: {
      contracts: Contracts;
      wallet: any;
    };
  }
}

interface Props {
  children?: React.ReactNode;
}

const walletProvider = createContext({});

function WalletProvider({ children }: Props) {
  const [wallet, setWallet] = useState<any>();

  const zilPay = window.zilPay;

  const callContract = useCallback(
    async (transition: string, args: Value[], params?: CallParams) => {
      if (!zilPay) {
        throw new Error("ZilPay client is not initialized");
      }
      // TODO: Move contract address to .env
      const contract = await zilPay.contracts.at(
        "0xf6fc98103b75c7e6b2b690e3419f66360ba32e8b"
      );

      const callTx = await contract.call(transition, args, {
        ...TX_PARAMS,
        ...params,
      });

      console.log("transaction recept : %o", callTx.getReceipt);
      console.log("transaction recept : %o", callTx.isConfirmed());
      console.log("transaction recept : %o", callTx.isPending());

      const txReceipt = JSON.stringify(callTx, null, 4);
      console.log(txReceipt);

      return txReceipt;
    },
    [zilPay]
  );

  const connect = useCallback(async () => {
    if (zilPay) {
      await zilPay.wallet.connect();
      setWallet(zilPay.wallet);
    } else {
      alert("Install ZillPay Wallet");
    }
  }, [zilPay]);

  const disconnect = useCallback(async () => {
    if (zilPay) {
      await zilPay.wallet.disconnect();
      setWallet(null);
    }
  }, [zilPay]);

  const value = useMemo(() => {
    return { wallet, connect, disconnect, callContract };
  }, [wallet, connect, disconnect, callContract]);

  return (
    <walletProvider.Provider value={value}>{children}</walletProvider.Provider>
  );
}

export default WalletProvider;

export const useWallet = (): any => useContext(walletProvider);
