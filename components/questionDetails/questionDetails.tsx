import AnswersList from '@/components/answersList/answersList';
import { useScreenDataById } from '@/state/hooks/configStoreHooks';
import { Answer } from '@/types/api/config';
import { capitalize } from '@/utils';
import { useReplacePlaceholdersByCustomerData } from '@/hooks';

type HeaderLogoType = {
  id: string;
};

export default function QuestionDetails({ id }: HeaderLogoType) {
  const screen = useScreenDataById(id);
  const { description = '', additionalDescription = '', attributes } = screen || {};
  const { content } = attributes || {};
  const answers: Answer[] | undefined = content?.answers;
  const descriptionReplaced = useReplacePlaceholdersByCustomerData(description);

  return (
    <>
      <h2 className="mb-6 text-2xl font-bold">{capitalize(descriptionReplaced)}</h2>
      {!!additionalDescription && (
        <p className="mt-6 mb-10 text-lg font-semibold">{additionalDescription}</p>
      )}

      <AnswersList answers={answers} questionId={id} />
    </>
  );
}
