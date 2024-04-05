import type { Feature } from '@/types/feature';
import Image from 'next/image';
import Typography from '@/components/Typography/Typography';

const FeatureCard = ({ title, description, src }: Feature) => {
  return (
    <li className="flex items-start gap-x-8">
      <Image
        className="py-2"
        src={src}
        width={37}
        height={37}
        alt="Feature icon"
      />
      <div>
        <Typography size="lg" weight="bold" className="mb-4">
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </div>
    </li>
  );
};

export default FeatureCard;
