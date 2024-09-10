import { ConfigType } from '@/types/api/config';

export type AnswerValueType = string | null | undefined;
export type AnswerRecordsType = Record<string, string>;
export type AnswerActionDataType = {
  questionId: string;
  value: string;
};

export type ConfigState = {
  config: ConfigType | null;
  customer: AnswerRecordsType;
  nextQuestionId: string;
};

export type UpdateCustomerActionType = (answer: AnswerActionDataType) => void;
export type UpdateNextQuestionIDType = (nextQuestionId: string) => void;

export type ConfigActions = {
  updateCustomer: UpdateCustomerActionType;
  updateNextQuestionId: UpdateNextQuestionIDType;
};

export type ConfigStore = ConfigState & ConfigActions;
