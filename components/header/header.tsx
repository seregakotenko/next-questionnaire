import HeaderLogo from '@/components/headerLogo/headerLogo';
import BackButton from '@/components/backButton/backButton';
import Image from 'next/image';

export default function Header() {
  // todo Check if browser history is not empty
  const isHistoryEmpty = false;

  return (
    <header className="py-4 flex mx-auto justify-center container w-full sm:w-10/12 relative">
      {!isHistoryEmpty && (
        <BackButton className="absolute left-0 top-2.5">
          <Image
            src="/arrow-left.svg"
            alt="Go back"
            title="Go back"
            className="dark:invert"
            width={16}
            height={32}
            priority
          />
        </BackButton>
      )}
      <HeaderLogo className="" />
    </header>
  );
}
