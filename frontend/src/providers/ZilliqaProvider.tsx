import { Zilliqa } from "@zilliqa-js/zilliqa";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from "react";

interface ZilliqaContextValue {
  zilliqa: Zilliqa;
}

const ZilliqaContext = createContext<ZilliqaContextValue>(null as any);

const ZilliqaProvider = ({ children }: { children: ReactNode }) => {
  const [zilliqaClient, setZilliqaClient] = useState<Zilliqa | null>(null);

  const value = useMemo(() => {
    return {
      zilliqa: zilliqaClient!,
    };
  }, [zilliqaClient]);

  useEffect(() => {
    // TODO: Allow switching between different networks
    const zilliqa = new Zilliqa("https://dev-api.zilliqa.com");
    setZilliqaClient(zilliqa);
  }, []);

  return (
    <ZilliqaContext.Provider value={value}>
      {zilliqaClient != null && children}
    </ZilliqaContext.Provider>
  );
};

export default ZilliqaProvider;

export const useZilliqa = (): ZilliqaContextValue => useContext(ZilliqaContext);
