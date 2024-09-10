import HeaderLogo from '@/components/headerLogo/headerLogo';
import BackButton from '@/components/backButton/backButton';

type HeaderProps = {
  showBackButton?: boolean;
};

export default function Header({ showBackButton }: HeaderProps) {
  return (
    <header className="py-4 px-2 flex mx-auto justify-center container w-full sm:w-10/12 relative">
      {showBackButton && (
        <BackButton className="absolute left-1.5 top-2.5">
          <svg
            width="16"
            height="32"
            viewBox="9 0 16 32"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10.7152 16.2998L20.7152 6.2998L22.1152 7.6998L13.5152 16.2998L22.1152 24.8998L20.7152 26.2998L10.7152 16.2998Z" />
          </svg>
        </BackButton>
      )}
      <HeaderLogo />
    </header>
  );
}
