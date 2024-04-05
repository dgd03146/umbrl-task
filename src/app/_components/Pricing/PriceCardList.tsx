import PriceCard from './PriceCard';
import { priceData } from '@/data/priceData';

const PriceCardList = () => (
  <ul className="flex gap-x-4">
    {priceData.map(({ priceName, price, options }, index) => (
      <PriceCard
        key={priceName}
        index={index}
        priceName={priceName}
        price={price}
        options={options}
      />
    ))}
  </ul>
);

export default PriceCardList;
