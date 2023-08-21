import { useContext } from 'react';
import AppContext from '../../shared/context/appContext';
import { plugin } from '../../shared/types';
import Switcher from '../Switch';
interface PluginCardProps {
  content: plugin;
  active: boolean;
  disabled: boolean;
  pluginName: string;
}
const PluginCard: React.FC<PluginCardProps> = ({
  content,
  active,
  disabled,
  pluginName,
}) => {
  const { updateData } = useContext(AppContext);
  const handleSwitch = (status: boolean) => {
    updateData('active', status, pluginName);
  };
  return (
    <div className='pluginCard relative flex flex-col rounded-xl border border-slate-400 p-6'>
      {disabled && (
        <div className='pluginCard--disabled  absolute z-10 cursor-not-allowed rounded-xl border border-white bg-white opacity-70'></div>
      )}
      <div className='flex items-start justify-between'>
        <div className='mr-2'>
          <h4 className='pluginCard__title'>{content.title}</h4>
          <p className='pluginCard__description text-slate-700'>
            {content.description}
          </p>
        </div>
        <Switcher active={active} changeSwitch={handleSwitch} />
      </div>
    </div>
  );
};
export default PluginCard;
