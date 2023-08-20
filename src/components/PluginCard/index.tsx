import { plugin } from '../../shared/types';
import Switcher from '../Switch';
interface PluginCardProps {
  content: plugin;
}
const PluginCard: React.FC<PluginCardProps> = ({ content }) => {
  return (
    <div className='pluginCard flex flex-col rounded-xl border border-slate-400 p-6'>
      <div className='flex items-start justify-between'>
        <div>
          <h4 className='pluginCard--title'>{content.title}</h4>
          <p className='pluginCard--description text-slate-700'>
            {content.description}
          </p>
        </div>
        <Switcher />
      </div>
    </div>
  );
};
export default PluginCard;
