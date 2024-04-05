import FeatureCard from './FeatureCard';
import { featureData } from '@/data/featureData';

const FeatureList = () => {
  return (
    <ul className="grid grid-cols-3 gap-x-8 gap-y-16">
      {featureData.map(({ src, title, description }) => (
        <FeatureCard
          key={title}
          src={src}
          title={title}
          description={description}
        />
      ))}
    </ul>
  );
};

export default FeatureList;
