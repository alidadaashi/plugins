import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../shared/assets/images/Logo.svg';
import { tab } from '../../shared/types';
import { ICONS } from '../../shared/Constants/icons';
import { useContext } from 'react';
import AppContext from '../../shared/context/appContext';

const Sidebar: React.FC = () => {
  const { tabs, tabdata } = useContext(AppContext);
  const navigat = useNavigate();
  // console.log('SIDEBAR: ', tabdata);
  // Object.keys(tabdata).length && console.log('>>>', Object.values(tabdata));
  return (
    <div className='h-100 sidebar w-3/12 py-8'>
      <h1 className='mb-12 w-9/12 px-8' onClick={() => navigat('/')}>
        <img src={Logo} alt='logo' />
      </h1>
      <ul className='sidebar--menu'>
        {tabdata && tabs && (
          <>
            {tabs.length && (
              <>
                {Object.values(tabdata).map((tab, index) => {
                  return (
                    <li key={index} className='sidebar--menu--item'>
                      <NavLink
                        className={({ isActive }) =>
                          `${
                            isActive ? 'sidebar--menu--item__active' : ''
                          }  mb-8 flex items-center px-8  py-5 text-xl`
                        }
                        to={tab.title.toLowerCase()}
                      >
                        <img
                          src={ICONS[tab.icon]}
                          className='mr-3 w-7'
                          alt={tab.icon}
                        />
                        {tab.title}{' '}
                      </NavLink>{' '}
                    </li>
                  );
                })}
              </>
            )}
          </>
        )}
      </ul>
    </div>
  );
};
export default Sidebar;
