import Button from '@/components/Button/Button';
import Image from 'next/image';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';
import Typography from '@/components/Typography/Typography';

const Header = () => {
  return (
    <header className="mt-4">
      <div className="mx-auto max-w-[1110px] flex justify-between items-center h-[50px] ">
        <Typography
          as="h1"
          size="lg"
          className="font-rubik font-bold cursor-pointer"
        >
          Brainwave.io
        </Typography>
        <ul className="flex items-center gap-x-8 font-bold">
          {ROUTES.map(({ href, name }) => (
            <li key={href}>
              <Link href={href}>
                <Typography size="sm">{name}</Typography>
              </Link>
            </li>
          ))}
          <Image src="/icons/line.svg" width="1" height="22" alt="Line icon" />
          <Link href="/signin">
            <Typography size="sm">Sign In</Typography>
          </Link>
          <Link href="/signup">
            <Button>Sign Up</Button>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Header;
