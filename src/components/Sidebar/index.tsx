import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../shared/assets/images/Logo.svg';
import { tab } from '../../shared/types';
import { ICONS } from '../../shared/Constants/icons';
interface SidebarProps {
  tabsData: Record<string, tab>;
  tabs?: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ tabsData, tabs }) => {
  const navigat = useNavigate();
  console.log('SIDEBAR: ', tabsData);
  // Object.keys(tabsData).length && console.log('>>>', Object.values(tabsData));
  return (
    <div className='h-100 sidebar w-3/12 py-8'>
      <h1 className='mb-12 w-9/12 px-8' onClick={() => navigat('/')}>
        <img src={Logo} alt='logo' />
      </h1>
      <ul className='sidebar--menu'>
        {tabsData && tabs && (
          <>
            {tabs.length && (
              <>
                {Object.values(tabsData).map((tab, index) => {
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
