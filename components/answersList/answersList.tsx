import AnswersListItem from '@/components/answersListItem/answersListItem';
import { Answer } from '@/types/api/config';
import { v4 as uuidv4 } from 'uuid';

type AnswersListProps = {
  answers: Answer[] | undefined;
  questionId: string;
};

export default function AnswersList({ answers = [], questionId }: AnswersListProps) {
  return (
    <ul>
      {answers.map((answer) => {
        return <AnswersListItem key={uuidv4()} answer={answer} questionId={questionId} />;
      })}
    </ul>
  );
}
