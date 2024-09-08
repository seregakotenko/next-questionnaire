import Header from '@/components/header/header';

type ScreenLayoutProps = {
  showBackButton?: boolean;
  children: React.ReactNode;
};

export default function ScreenLayout({ children, showBackButton = true }: ScreenLayoutProps) {
  return (
    <>
      <Header showBackButton={showBackButton} />
      <main className="flex justify-center">
        <section className="py-4 w-full max-w-96">{children}</section>
      </main>
    </>
  );
}
