import PluginCard from '../../components/PluginCard';

const MarketingPage: React.FC = () => {
  return (
    <div>
      <h1>Marketing PLugins</h1>
      <div className='grid grid-cols-3 gap-6'>
        <PluginCard />

        <PluginCard />

        <PluginCard />
      </div>
    </div>
  );
};
export default MarketingPage;
