import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../shared/assets/images/Logo.svg';
import finance from '../../shared/assets/icons/finance.svg';
import marketing from '../../shared/assets/icons/marketing.svg';
import personnel from '../../shared/assets/icons/personnel.svg';
const Sidebar: React.FC<{}> = () => {
  const navigat = useNavigate();
  return (
    <div className='h-100 sidebar w-3/12 py-8'>
      <h1 className='mb-12 w-9/12 px-8' onClick={() => navigat('/')}>
        <img src={Logo} alt='logo' />
      </h1>
      <ul className='sidebar--menu'>
        <li className='sidebar--menu--item sidebar--menu--item__active mb-8 px-8 py-5 text-xl'>
          <Link className='flex items-center' to='/'>
            <img src={marketing} className='mr-3 w-7' alt='marketing' />
            Marketing{' '}
          </Link>{' '}
        </li>
        <li className='sidebar--menu--item mb-8 px-8 text-xl'>
          <Link className='flex items-center' to='/financial'>
            <img src={finance} className='mr-3 w-7' alt='finance' />
            Financial{' '}
          </Link>{' '}
        </li>
        <li className='sidebar--menu--item mb-8 px-8 text-xl'>
          <Link className='flex items-center' to='/personnel'>
            <img src={personnel} className='mr-3 w-7' alt='personnel' />
            Personnel{' '}
          </Link>{' '}
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
