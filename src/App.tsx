// import { Router } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Router from './Routes';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className='container mx-auto'>
      <BrowserRouter>
        <div className='flex '>
          <Sidebar />
          <Router />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
