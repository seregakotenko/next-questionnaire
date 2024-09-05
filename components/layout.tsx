import Header from "@/components/header/header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({children}: LayoutProps) {
  return (
    <>
      <Header/>
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>{children}</main>
    </>
  )
};
