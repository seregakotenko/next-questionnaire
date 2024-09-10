import Header from '@/components/header/header';

type QuizLayoutProps = {
  showBackButton?: boolean;
  containerClassNames?: string;
  children: React.ReactNode;
};

export default function QuizLayout({
  children,
  showBackButton = true,
  containerClassNames = '',
}: QuizLayoutProps) {
  return (
    <div className={`h-full ${containerClassNames}`}>
      <Header showBackButton={showBackButton} />
      <main className="px-2 flex justify-center">
        <section className="py-4 w-full max-w-96">{children}</section>
      </main>
    </div>
  );
}
