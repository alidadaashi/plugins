import { act } from 'react-dom/test-utils';
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
        {Object.keys(plugins).map((plugin, index) => {
          if (pluginsToShow.includes(plugin)) {
            return <PluginCard key={index} content={plugins[plugin]} />;
          }
        })}
      </div>
    </div>
  );
};
export default PluginsPage;
