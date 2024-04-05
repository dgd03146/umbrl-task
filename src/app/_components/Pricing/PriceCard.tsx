import Button from '@/components/Button/Button';
import Image from 'next/image';
import OptionList from './OptionList';
import PriceDisplay from './PriceDisplay';
import Typography from '@/components/Typography/Typography';
import { isEvenIndex } from '@/utils/isEvenIndex';
import { priceData } from '@/data/priceData';

type Props = {
  index: number;
} & (typeof priceData)[0];

const getButtonVariant = (index: number) => {
  return isEvenIndex(index) ? 'secondary' : 'primary';
};

const PriceCard = ({ priceName, price, options, index }: Props) => (
  <li className="px-12 py-9 rounded-xl border-[1px] border-[#ececec]">
    <PriceDisplay priceName={priceName} price={price} />
    <OptionList options={options} />
    <Button
      variant={getButtonVariant(index)}
      size="lg"
      className="flex gap-x-8 mb-4"
      right={
        <Image
          src={`/icons/${
            isEvenIndex(index) ? 'rightArrowFill' : 'rightArrow'
          }.svg`}
          width={15}
          height={15}
          alt="icon"
        />
      }
    >
      <Typography weight="bold">Start Free Trial</Typography>
    </Button>
    <Typography className="text-black/70">No credit card required</Typography>
  </li>
);

export default PriceCard;
