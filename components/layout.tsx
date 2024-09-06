import Header from "@/components/header/header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({children}: LayoutProps) {
  return (
    <>
      <Header/>
      <main className="flex justify-center">{children}</main>
    </>
  )
};
