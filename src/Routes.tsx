import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import FinancialPage from './pages/financial';
import MarketingPage from './pages/marketing';
import PersonnelPage from './pages/personnel';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path='/financial' element={<FinancialPage />} />
      <Route path='/' element={<MarketingPage />} />
      <Route path='/personnel' element={<PersonnelPage />} />
    </Routes>
  );
};

export default Router;
