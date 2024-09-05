import HeaderLogo from "@/components/headerLogo/headerLogo";
import BackButton from "@/components/backButton/backButton";

export default function Header() {

  // todo Check if browser history is not empty
  const isHistoryEmpty = false;

  return <header className="">
    {!isHistoryEmpty && <BackButton classNames=""/>}
    <HeaderLogo/>
  </header>
}
