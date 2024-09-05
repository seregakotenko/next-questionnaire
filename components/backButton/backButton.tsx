import {useRouter} from 'next/router';
import Image from "next/image";

type BackButtonType = {
  classNames?: string;
}

export default function BackButton({classNames = ''}: BackButtonType) {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.back()} className={`${classNames}`}>
      <Image
        src="/arrow-left.svg"
        alt="Go back"
        title="Go back"
        className="dark:invert"
        width={33}
        height={32}
        priority
      />
    </button>
  );
};
