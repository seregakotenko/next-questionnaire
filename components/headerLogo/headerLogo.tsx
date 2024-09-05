import Image from "next/image";

type HeaderLogoType = {
  className?: string;
}

export default function HeaderLogo({className = ''}: HeaderLogoType) {
  return <Image
    src="/nebula-logo.svg"
    alt="Nebula"
    className={`dark:invert${className}`}
    width={16}
    height={18}
    priority
  />
}
