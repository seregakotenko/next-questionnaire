import { MouseEventHandler } from 'react';
import { useRouter } from 'next/router';
import { Answer } from '@/types/api/config';
import { useAnswerValueByScreenId, useScreenDataById } from '@/hooks/configStoreHooks';
import { useConfigStore } from '@/providers/quiz-config-store-provider';
import { useShallow } from 'zustand/react/shallow';

type AnswersListItemProps = {
  answer: Answer;
  questionId: string;
};

export default function AnswersListItem({ answer, questionId }: AnswersListItemProps) {
  const router = useRouter();
  const { title, nextQuestionId = '', value, nextUrl } = answer;
  const selectedValue = useAnswerValueByScreenId(questionId);
  const { updateNextQuestionId, updateCustomer } = useConfigStore(useShallow((state) => state));
  const nextScreen = useScreenDataById(nextQuestionId);
  const isSelected = selectedValue === value;
  const selectedClassName = isSelected ? `button-primary` : 'button-default';

  const handleAnswerButtonClick: MouseEventHandler<HTMLButtonElement> = (): void => {
    if (!isSelected) {
      updateCustomer({ questionId, value });
    }

    let nextQuestionUrl = nextScreen?.url;

    // Used to move to the info banner
    if (nextUrl) {
      nextQuestionUrl = nextUrl;
    }

    if (!nextQuestionUrl) {
      console.log('No next question url');
      return;
    }

    updateNextQuestionId(nextQuestionId);

    router.push(`/quiz/${nextQuestionUrl}`);
  };

  return (
    <li>
      <button className={`w-full my-2 ${selectedClassName}`} onClick={handleAnswerButtonClick}>
        {title}
      </button>
    </li>
  );
}
