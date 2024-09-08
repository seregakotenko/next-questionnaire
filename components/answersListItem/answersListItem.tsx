import {MouseEventHandler} from "react";
import {useRouter} from 'next/router'
import {Answer} from "@/types/api/config";
import {SetAnswerActionType} from "@/types/store";

type AnswersListItemProps = {
  answer: Answer;
  questionId: string;
  onAnswer: SetAnswerActionType;
}

export default function AnswersListItem({answer, questionId, onAnswer}: AnswersListItemProps) {
  const router = useRouter();
  const {title, nextQuestionUrl} = answer;

  const handleAnswerButtonClick: MouseEventHandler<HTMLButtonElement> = (event): void => {
    onAnswer(questionId, title);

    if (!nextQuestionUrl) {
      console.log('No next question url');
      return;
    }

    router.push(`/quiz/${nextQuestionUrl}`);
  }

  return <li>
    <button className="button button-gradient w-full my-2" onClick={handleAnswerButtonClick}>{title}</button>
  </li>;
}
