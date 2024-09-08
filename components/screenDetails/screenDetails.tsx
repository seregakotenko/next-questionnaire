import AnswersList from '@/components/answersList/answersList';
import { useScreenDataById } from '@/hooks/configStoreHooks';

type HeaderLogoType = {
  id: string;
};

export default function ScreenDetails({ id }: HeaderLogoType) {
  const screen = useScreenDataById(id);

  if (!screen) return null;

  const { description = '', additionalDescription = '', answers = [] } = screen;

  return (
    <>
      <h2 className="mb-4 text-2xl font-bold">{description}</h2>
      {!!additionalDescription && (
        <p className="my-4 text-lg font-semibold">{additionalDescription}</p>
      )}

      <AnswersList answers={answers} questionId={id} />
    </>
  );
}
