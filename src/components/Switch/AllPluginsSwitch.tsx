import { useState } from 'react';
import power from '../../shared/assets/icons/power2.svg';
import classNames from 'classnames';

const AllPluginsSwitch: React.FC<{ active: boolean }> = ({ active }) => {
  const [isChecked, setIsChecked] = useState(active);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label
        className={classNames(
          ' absolute bottom-0 flex w-full cursor-pointer select-none items-center justify-between px-8 py-6',
          isChecked ? 'switch--all__active' : 'switch--all__inactive'
        )}
      >
        <h4 className='text-md text-slate-600'>
          {isChecked ? 'All Plugins enabled' : 'All plugins disabled'}
        </h4>
        <div className='relative'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
          <div
            className={`box block h-10 w-16 rounded-full ${
              isChecked ? 'bg-green-800' : 'bg-red-700'
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-white transition ${
              isChecked ? 'translate-x-6' : ''
            }`}
          >
            <svg
              width='21'
              height='26'
              viewBox='0 0 21 26'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <circle
                cx='10.5'
                cy='15.5'
                r='9'
                stroke={isChecked ? '#5BC88D' : '#F87171'}
                stroke-width='3'
              />
              <rect
                x='4.05078'
                y='6.94971'
                width='9.82837'
                height='9.68623'
                transform='rotate(-45 4.05078 6.94971)'
                fill='white'
              />
              <rect
                x='9'
                y='3'
                width='3'
                height='11'
                fill={isChecked ? '#5BC88D' : '#F87171'}
              />
            </svg>
          </div>
        </div>
      </label>
    </>
  );
};

export default AllPluginsSwitch;
