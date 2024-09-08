import AnswersListItem from "@/components/answersListItem/answersListItem";
import {Answer} from "@/types/api/config";
import {v4 as uuidv4} from 'uuid';

type AnswersListProps = {
  answers: Answer[];
}

export default function AnswersList({answers = []}: AnswersListProps) {
  return <ul>
    {
      answers.map(answer => {
        return <AnswersListItem key={uuidv4()} answer={answer}></AnswersListItem>
      })
    }
  </ul>
}
