import { useScreenDataById } from '@/hooks/configStoreHooks';
import { useRouter } from 'next/router';
import { useConfigStore } from '@/state/providers/quiz-config-store-provider';

type HeaderLogoType = {
  id: string;
};

export default function InformDetails({ id }: HeaderLogoType) {
  const screen = useScreenDataById(id);
  const router = useRouter();

  const { nextQuestionId } = useConfigStore((state) => state);

  const nextScreen = useScreenDataById(nextQuestionId);
  const nextQuestionUrl = nextScreen?.url;

  if (!screen) return null;

  const { description = '', additionalDescription = '', attributes } = screen;

  const { next } = attributes.content;

  const onNextButtonClick = () => {
    if (!nextQuestionUrl) {
      console.log('No next question url');
      return;
    }

    router.push(`/quiz/${nextQuestionUrl}`);
  };

  return (
    <>
      <h2 className="mb-6 text-2xl font-bold  text-center">{description}</h2>
      {!!additionalDescription && (
        <p className="mt-6 mb-10 text-md  text-center">{additionalDescription}</p>
      )}
      {next && (
        <button className="button-default w-full bg-white text-violet" onClick={onNextButtonClick}>
          {next}
        </button>
      )}
    </>
  );
}
