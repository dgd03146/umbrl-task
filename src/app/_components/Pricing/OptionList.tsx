import Image from 'next/image';
import Typography from '@/components/Typography/Typography';

type Props = {
  options: {
    isSupported: boolean;
    option: string;
  }[];
};

const getTextStyle = (isSupported: boolean) => {
  return isSupported ? '' : 'text-black/70';
};

const OptionList = ({ options }: Props) => (
  <ul className="mb-12">
    {options.map(({ option, isSupported }) => (
      <li key={option} className="flex items-center gap-x-2 mb-4">
        <Image
          src={`/icons/${isSupported ? 'check' : 'remove'}.svg`}
          width={16}
          height={16}
          alt="icon"
        />
        <Typography className={getTextStyle(isSupported)}>{option}</Typography>
      </li>
    ))}
  </ul>
);

export default OptionList;
