import * as React from 'react';
import { useRoutes } from 'react-router-dom';
import AppContext from './shared/context/appContext';
import PluginsPage from './pages/plugins';

const Router: React.FC = () => {
  const { tabs, tabdata } = React.useContext(AppContext);
  const routes = useRoutes(
    Object.values(tabdata).map((tab, index) => {
      return {
        path: tab.title.toLowerCase(),
        element: (
          <PluginsPage
            active={tab.active}
            disabled={tab.disabled}
            inactive={tab.inactive}
            title={tab.title}
            tabName={Object.keys(tabdata)[index]}
          />
        ),
      };
    })
  );
  return <div className='w-9/12 bg-white p-8'>{routes}</div>;
};

export default Router;
