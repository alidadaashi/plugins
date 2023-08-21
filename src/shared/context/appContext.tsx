import { ReactNode, createContext, useEffect, useState } from 'react';
import { AppState } from '../types';

const AppContext = createContext<AppState>({
  tabs: [],
  tabdata: {},
  plugins: {},
  updateData: () => {},
});

export default AppContext;

const initialState: AppState = {
  tabs: [],
  tabdata: {},
  plugins: {},
  updateData: () => {},
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [currentTab, setCurrentTab] = useState<string>('');
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

  const updateData = () =>
    // tabName: string,
    // category: 'active' | 'inactive' | 'disabled',
    // pluginName: string
    {
      fetch(`http://localhost:8000/data/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          active: ['pluginId1', 'pluginId2', 'pluginId3'],
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response (data) as needed
          console.log(data);
          setData(data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };

  return (
    <AppContext.Provider
      value={{
        plugins: data.plugins,
        tabs: data.tabs,
        tabdata: data.tabdata,
        updateData,
        setCurrentTab,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
