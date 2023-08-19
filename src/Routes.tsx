import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import FinancialPage from './pages/financial';
import MarketingPage from './pages/marketing';
import PersonnelPage from './pages/personnel';

const Router: React.FC = () => {
  return (
    <div className='w-9/12 bg-white p-8'>
      <Routes>
        <Route path='/financial' element={<FinancialPage />} />
        <Route path='/' element={<MarketingPage />} />
        <Route path='/personnel' element={<PersonnelPage />} />
      </Routes>
    </div>
  );
};

export default Router;
