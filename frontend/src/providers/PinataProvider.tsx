import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
} from 'react';
import pinataSDK, { PinataClient } from '@pinata/sdk';

interface PinataContextValue {
  pinata: PinataClient;
}
// REACT_APP_PINATA_API_KEY=9b90184f65804f9e8476
// REACT_APP_PINATA_SECRET_API_KEY=1940a9049e28bd46334db0fdaf3b25b125d5306cc407cfa5001eb2df5db4b91e
const PINATA_API_KEY = '9b90184f65804f9e8476';
const PINATA_SECRET_API_KEY = '1940a9049e28bd46334db0fdaf3b25b125d5306cc407cfa5001eb2df5db4b91es'

const PinataContext = createContext<PinataContextValue>(null as any);

const PinataProvider = ({ children }: { children: ReactNode }) => {
  const [pinataClient, setPinataClient] = useState<PinataClient | null>(null);

  const value = useMemo(() => {
    return {
      pinata: pinataClient!,
    };
  }, [pinataClient]);

  useEffect(() => {
    if (!PINATA_API_KEY || !PINATA_SECRET_API_KEY) {
      throw new Error('Pinata API keys not provided!');
    }
    const pinata = pinataSDK(PINATA_API_KEY, PINATA_SECRET_API_KEY);
    setPinataClient(pinata);
  }, []);

  return (
    <PinataContext.Provider value={value}>
      {pinataClient != null && children}
    </PinataContext.Provider>
  );
};

export default PinataProvider;

export const usePinata = (): PinataContextValue => useContext(PinataContext);
