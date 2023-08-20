import PluginCard from '../../components/PluginCard';
import { tab } from '../../shared/types';
import { useContext } from 'react';
import AppContext from '../../shared/context/appContext';

interface PluginsPageProps extends tab {}
const PluginsPage: React.FC<PluginsPageProps> = ({
  title,
  active,
  disabled,
  inactive,
}) => {
  const pluginsToShow = active.concat(disabled).concat(inactive);
  const { plugins } = useContext(AppContext);

  return (
    <div>
      <h1 className='mb-12 text-2xl text-slate-600'> {title} Plugins </h1>
      <div className='grid grid-cols-3 gap-6'>
        {Object.entries(plugins).map((plugin, index) => {
          if (pluginsToShow.includes(plugin[0])) {
            return (
              <PluginCard
                key={index}
                content={plugin[1]}
                active={active.includes(plugin[0]) ? true : false}
                disabled={disabled.includes(plugin[0]) ? true : false}
              />
            );
          }
        })}
      </div>
    </div>
  );
};
export default PluginsPage;
