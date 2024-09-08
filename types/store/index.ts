import { ConfigType } from '@/types/api/config';

export type AnswerValueType = string | null | undefined;

export type AnswerType = {
  questionId: string;
  value: AnswerValueType;
};

export type ConfigState = {
  config: ConfigType | null;
  answers: AnswerType[];
};

export type SetAnswerActionType = (questionId: string, answer: string) => void;

export type ConfigActions = {
  setAnswer: SetAnswerActionType;
};

export type ConfigStore = ConfigState & ConfigActions;
