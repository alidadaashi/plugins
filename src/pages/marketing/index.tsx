import PluginCard from '../../components/PluginCard';

const MarketingPage: React.FC = () => {
  return (
    <div>
      <h1 className='mb-12 text-2xl text-slate-600'>Marketing Plugins</h1>
      <div className='grid grid-cols-3 gap-6'>
        <PluginCard />

        <PluginCard />

        <PluginCard />
      </div>
    </div>
  );
};
export default MarketingPage;
