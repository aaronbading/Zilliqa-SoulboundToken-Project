import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  ReactNode,
  useCallback,
} from "react";

interface ColorModeContextValue {
  toggleTheme: () => void;
}

const ColorModeContext = createContext<ColorModeContextValue>(null as any);

const ColorModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState("light");

  const toggleTheme = useCallback(() => {
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  useEffect(() => {
    if (mode === "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const value = useMemo(() => {
    return {
      toggleTheme,
    };
  }, [toggleTheme]);

  return (
    <ColorModeContext.Provider value={value}>
      {children}
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;

export const useColorMode = (): ColorModeContextValue =>
  useContext(ColorModeContext);
