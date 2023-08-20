import { plugin } from '../../shared/types';
import Switcher from '../Switch';
interface PluginCardProps {
  content: plugin;
  active: boolean;
  disabled: boolean;
}
const PluginCard: React.FC<PluginCardProps> = ({
  content,
  active,
  disabled,
}) => {
  return (
    <div className='pluginCard relative flex flex-col rounded-xl border border-slate-400 p-6'>
      {disabled && (
        <div className='absolute left-0 top-0 z-10 h-full w-full cursor-not-allowed rounded-xl border border-white bg-white opacity-70'></div>
      )}
      <div className='flex items-start justify-between'>
        <div>
          <h4 className='pluginCard--title'>{content.title}</h4>
          <p className='pluginCard--description text-slate-700'>
            {content.description}
          </p>
        </div>
        <Switcher active={active} />
      </div>
    </div>
  );
};
export default PluginCard;
