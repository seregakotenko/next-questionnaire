import { MouseEventHandler } from 'react';
import { useRouter } from 'next/router';
import { Answer } from '@/types/api/config';
import { SetAnswerActionType } from '@/types/store';
import { useAnswerValueByScreenId } from '@/hooks/configStoreHooks';

type AnswersListItemProps = {
  answer: Answer;
  questionId: string;
  onAnswer: SetAnswerActionType;
};

export default function AnswersListItem({ answer, questionId, onAnswer }: AnswersListItemProps) {
  const router = useRouter();
  const { title, nextQuestionUrl, value } = answer;
  const selectedValue = useAnswerValueByScreenId(questionId);
  const isSelected = selectedValue === value;
  const selectedClassName = isSelected ? `button__active` : '';

  const handleAnswerButtonClick: MouseEventHandler<HTMLButtonElement> = (): void => {
    if (!isSelected) {
      onAnswer(questionId, value);
    }

    if (!nextQuestionUrl) {
      console.log('No next question url');
      return;
    }

    router.push(`/quiz/${nextQuestionUrl}`);
  };

  return (
    <li>
      <button
        className={`button w-full my-2 ${selectedClassName}`}
        onClick={handleAnswerButtonClick}
      >
        {title}
      </button>
    </li>
  );
}
