// import { Router } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';
import Router from './Routes';
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Sidebar />
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
