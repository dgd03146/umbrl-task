import Typography from '@/components/Typography/Typography';

type Props = {
  priceName: string;
  price: string;
};

const PriceDisplay = ({ priceName, price }: Props) => {
  return (
    <>
      <Typography variant="primary" size="sm" weight="bold" className="mb-8">
        {priceName}
      </Typography>
      <Typography as="h1" size="3xl" className="mb-4">
        <Typography as="span" size="xl" weight="bold">
          $
        </Typography>
        {price}
        <Typography as="span" className="font-rubik">
          / month
        </Typography>
      </Typography>
      <Typography className="mb-10 text-black/70">billed monthly</Typography>
    </>
  );
};

export default PriceDisplay;
