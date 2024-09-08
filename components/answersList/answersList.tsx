import AnswersListItem from '@/components/answersListItem/answersListItem';
import { Answer } from '@/types/api/config';
import { v4 as uuidv4 } from 'uuid';
import { useConfigStore } from '@/providers/quiz-config-store-provider';

type AnswersListProps = {
  answers: Answer[];
  questionId: string;
};

export default function AnswersList({ answers = [], questionId }: AnswersListProps) {
  const { setAnswer } = useConfigStore((state) => state);

  return (
    <ul>
      {answers.map((answer) => {
        return (
          <AnswersListItem
            key={uuidv4()}
            answer={answer}
            questionId={questionId}
            onAnswer={setAnswer}
          />
        );
      })}
    </ul>
  );
}
