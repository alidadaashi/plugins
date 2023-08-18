import { Link, useNavigate } from 'react-router-dom';

const Sidebar: React.FC<{}> = () => {
  const navigat = useNavigate();
  return (
    <div>
      <h1 className='text-2xl' onClick={() => navigat('/')}>
        DataGuard
      </h1>
      <ul>
        <li className='font-semibold'>
          <Link to='/financial'>Financial </Link>{' '}
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
