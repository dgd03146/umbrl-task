import Button from '@/components/Button/Button';
import Image from 'next/image';
import Typography from '@/components/Typography/Typography';

const SubscribtionOption = () => {
  return (
    <div className="flex justify-center gap-x-4 mb-12">
      <Typography>Monthly</Typography>
      <Button className="w-[72px] h-[33px] bg-black opacity-15 rounded-2xl flex items-center justify-start px-2">
        <Image src="/icons/oval.svg" width={21} height={21} alt="Oval icon" />
      </Button>
      <Typography>Yearly</Typography>
      <Typography
        size="xs"
        variant="primary"
        className="bg-secondary rounded-2xl w-[95px] h-[29px] font-bold flex items-center justify-center"
      >
        SAVE 25%
      </Typography>
    </div>
  );
};

export default SubscribtionOption;
