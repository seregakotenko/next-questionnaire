import {MouseEventHandler} from "react";
import {useRouter} from 'next/router'
import {Answer} from "@/types/api/config";

type AnswersListItemProps = {
  answer: Answer;
}

export default function AnswersListItem({answer}: AnswersListItemProps) {
  const router = useRouter();
  const {title, nextQuestionUrl} = answer;
  const handleAnswerButtonClick: MouseEventHandler<HTMLButtonElement> = (event): void => {
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
