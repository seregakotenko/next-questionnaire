import Image from "next/image";

export default function HeaderLogo() {
  return <Image
    src="/nebula-logo.svg"
    alt="Nebula"
    className="dark:invert"
    width={16}
    height={18}
    priority
  />
}
