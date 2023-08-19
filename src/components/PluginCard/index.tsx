import Switcher from '../Switch';

const PluginCard: React.FC = () => {
  return (
    <div className='pluginCard flex flex-col rounded-xl border border-slate-400 p-6'>
      <div className='flex items-start justify-between'>
        <div>
          <h4 className='pluginCard--title'>Plugin 1</h4>
          <p className='pluginCard--description text-slate-700'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, voluptate, quibusdam, quia voluptas quod quos dolorum
          </p>
        </div>
        <Switcher />
      </div>
    </div>
  );
};
export default PluginCard;
