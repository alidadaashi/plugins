// import { Router } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Router from './Routes';
import Sidebar from './components/Sidebar';
import { useEffect, useState } from 'react';
import { plugin, tab } from './shared/types';
interface appState {
  tabs: string[];
  tabdata: Record<string, tab>;
  plugins: Record<string, plugin>;
}
const initialState: appState = {
  tabs: [],
  tabdata: {},
  plugins: {},
};
function App() {
  console.log('App');
  // Get data from mock API
  const [data, setData] = useState<appState>(initialState);
  useEffect(() => {
    fetch('http://localhost:8000/data')
      .then((response) => response.json())
      .then((data) => {
        setData({ ...data });
        console.log(data);
      })
      .catch((error) => {
        throw error;
      });
  }, []);

  return (
    <div className=''>
      <BrowserRouter>
        <div className='flex '>
          <Sidebar tabs={data.tabs} tabsData={data.tabdata} />
          <Router />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
