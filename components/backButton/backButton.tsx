import { useRouter } from 'next/router';

type BackButtonType = {
  className?: string;
  children?: React.ReactNode;
};

export default function BackButton({ className = '', children }: BackButtonType) {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()} className={`p-0 m-0 border-0 ${className}`}>
      {children}
    </button>
  );
}
