import {ConfigType} from "@/types/api/config";

export type AnswerType = {
  questionId: string,
  answer: string,
}

export type ConfigState = {
  config: ConfigType | null;
  answers: AnswerType[];
}

export type SetAnswerActionType = (questionId: string, answer: string) => void

export type ConfigActions = {
  initializeState: (initState: ConfigType) => void
  setAnswer: SetAnswerActionType
}

export type ConfigStore = ConfigState & ConfigActions
