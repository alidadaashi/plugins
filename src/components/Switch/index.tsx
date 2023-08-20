import { useState } from 'react';

const Switcher: React.FC<{ active: boolean }> = ({ active }) => {
  const [isChecked, setIsChecked] = useState(active);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <label className='cursor-pointer select-none flex-col items-center'>
        <div className='relative mb-2'>
          <input
            type='checkbox'
            checked={isChecked}
            onChange={handleCheckboxChange}
            className='sr-only'
          />
          <div
            className={`box block h-8 w-14 rounded-full ${
              isChecked ? 'bg-green-500' : 'bg-red-700'
            }`}
          ></div>
          <div
            className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-white transition ${
              isChecked ? 'translate-x-full' : ''
            }`}
          ></div>
        </div>
        {isChecked ? (
          <div className='text-sm text-green-500 '> Allowed </div>
        ) : (
          <div className='text-sm text-red-600 '> Blocked </div>
        )}
      </label>
    </>
  );
};

export default Switcher;
