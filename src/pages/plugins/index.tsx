import PluginCard from '../../components/PluginCard';
import { tab } from '../../shared/types';
import { useContext, useEffect } from 'react';
import AppContext from '../../shared/context/appContext';

interface PluginsPageProps extends tab {
  tabName: string;
}
const PluginsPage: React.FC<PluginsPageProps> = ({
  title,
  active,
  disabled,
  inactive,
  tabName,
}) => {
  const pluginsToShow = active.concat(disabled).concat(inactive);
  const { plugins, setCurrentTab } = useContext(AppContext);
  useEffect(() => {
    setCurrentTab(tabName);
  }, [tabName, setCurrentTab]);

  return (
    <div>
      <h1 className='mb-12 text-2xl text-slate-600'> {title} Plugins </h1>
      <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
        {Object.entries(plugins).map((plugin, index) => {
          if (pluginsToShow.includes(plugin[0])) {
            return (
              <PluginCard
                pluginName={plugin[0]}
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
