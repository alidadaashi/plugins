// import { Router } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Router from './Routes';
import Sidebar from './components/Sidebar';
import { AppProvider } from './shared/context/appContext';

function App() {
  return (
    <AppProvider>
      <div className=''>
        <BrowserRouter>
          <div className='flex '>
            <Sidebar />
            <Router />
          </div>
        </BrowserRouter>
      </div>
    </AppProvider>
  );
}

export default App;
