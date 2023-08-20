import { ReactNode, createContext, useEffect, useState } from 'react';
import { AppState } from '../types';

const AppContext = createContext<AppState>({
  tabs: [],
  tabdata: {},
  plugins: {},
});

export default AppContext;

const initialState: AppState = {
  tabs: [],
  tabdata: {},
  plugins: {},
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [data, setData] = useState<AppState>(initialState);
  useEffect(() => {
    fetch('http://localhost:8000/data')
      .then((response) => response.json())
      .then((data) => {
        setData({ ...data });
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  return (
    <AppContext.Provider
      value={{
        plugins: data.plugins,
        tabs: data.tabs,
        tabdata: data.tabdata,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
