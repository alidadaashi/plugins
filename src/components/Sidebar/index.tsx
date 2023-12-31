import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../shared/assets/images/Logo.svg';
import { ICONS } from '../../shared/Constants/icons';
import { useContext } from 'react';
import AppContext from '../../shared/context/appContext';
import AllPluginsSwitch from '../Switch/AllPluginsSwitch';

const Sidebar: React.FC = () => {
  const { tabs, tabdata } = useContext(AppContext);
  const navigat = useNavigate();
  // console.log('SIDEBAR: ', tabdata);
  // Object.keys(tabdata).length && console.log('>>>', Object.values(tabdata));
  return (
    <div className='h-100 sidebar sticky top-0 max-w-min py-8 lg:max-w-sm'>
      <h1
        className='mb-12 w-9/12 pl-2 md:px-2 lg:px-8'
        onClick={() => navigat('/')}
      >
        <img src={Logo} alt='logo' />
      </h1>
      <ul className='sidebar__menu'>
        {tabdata && tabs && (
          <>
            {tabs.length && (
              <>
                {Object.values(tabdata).map((tab, index) => {
                  return (
                    <li key={index} className='sidebar__menu__item'>
                      <NavLink
                        className={({ isActive }) =>
                          `${
                            isActive ? 'sidebar__menu__item--active' : ''
                          }  mb-0 flex items-center px-8  py-6 text-xl`
                        }
                        to={tab.title.toLowerCase()}
                      >
                        <img
                          src={ICONS[tab.icon]}
                          className='mr-3 w-7'
                          alt={tab.icon}
                        />
                        <div className='hidden lg:block'>{tab.title} </div>
                      </NavLink>{' '}
                    </li>
                  );
                })}
              </>
            )}
          </>
        )}
      </ul>
      <AllPluginsSwitch />
    </div>
  );
};
export default Sidebar;
