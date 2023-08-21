import { ReactNode, createContext, useEffect, useState } from 'react';
import { AppState } from '../types';

const AppContext = createContext<AppState>({
  tabs: [],
  tabdata: {},
  plugins: {},
  updateData: () => {},
  setCurrentTab: () => {},
});

export default AppContext;

const initialState: AppState = {
  tabs: [],
  tabdata: {},
  plugins: {},
  updateData: () => {},
  setCurrentTab: () => {},
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

  const updateData = (
    category: 'active' | 'disable',
    status: boolean,
    pluginName?: string
  ) => {
    let temp = data;
    if (category === 'disable') {
      if (status) {
        // DISABLE ALL PLUGINS IN ALL TABS
        temp.tabs.forEach((tab) => {
          temp.tabdata[tab].disabled = [
            ...temp.tabdata[tab].disabled,
            ...temp.tabdata[tab].active,
            ...temp.tabdata[tab].inactive,
          ];
        });
        setData({ ...temp });

        // DISABLE ALL PLUGINS IN CURRENT TAB
        // setData({
        //   ...data,
        //   tabdata: {
        //     ...data.tabdata,
        //     [currentTab]: {
        //       ...data.tabdata[currentTab],
        //       disabled: [
        //         ...data.tabdata[currentTab].disabled,
        //         ...data.tabdata[currentTab].active,
        //         ...data.tabdata[currentTab].inactive,
        //       ],
        //     },
        //   },
        // });
      } else {
        // ENABLE ALL PLUGINS IN ALL TABS
        temp.tabs.forEach((tab) => {
          temp.tabdata[tab].disabled = temp.tabdata[tab].disabled.filter(
            (element) =>
              !temp.tabdata[tab].active.includes(element) &&
              !temp.tabdata[tab].inactive.includes(element)
          );
        });
        setData({ ...temp });
        // ENABLE ALL PLUGINS IN CURRENT TAB
        // setData({
        //   ...data,
        //   tabdata: {
        //     ...data.tabdata,
        //     [currentTab]: {
        //       ...data.tabdata[currentTab],
        //       disabled: [],
        //     },
        //   },
        // });
      }
    } else {
      if (status && pluginName) {
        temp.tabdata[currentTab].active.push(pluginName);
        temp.tabdata[currentTab].inactive = temp.tabdata[
          currentTab
        ].inactive.filter((element) => element !== pluginName);
        setData({ ...temp });
      } else if (!status && pluginName) {
        temp.tabdata[currentTab].inactive.push(pluginName);
        temp.tabdata[currentTab].active = temp.tabdata[
          currentTab
        ].active.filter((element) => element !== pluginName);
        setData({ ...temp });
      }
    }
    // console.log(data);
    fetch(`http://localhost:8000/data/`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        tabdata: data.tabdata,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
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
