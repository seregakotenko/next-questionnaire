import Header from "@/components/header/header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({children}: LayoutProps) {
  return (
    <>
      <Header/>
      <main className="mx-auto flex justify-center w-full sm:w-96">{children}</main>
    </>
  )
};
