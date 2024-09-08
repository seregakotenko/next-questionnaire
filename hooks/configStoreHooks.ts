import { useConfigStore } from '@/providers/quiz-config-store-provider';
import { Screen } from '@/types/api/config';
import { AnswerValueType } from '@/types/store';

export const useScreenDataById = (screenId: string): Screen | undefined => {
  return useConfigStore((state) => {
    return state.config?.flow.screens.find((item) => item.id === screenId);
  });
};

export const useAnswerValueByScreenId = (screenId: string): AnswerValueType => {
  const answerData = useConfigStore((state) => {
    return state.answers.find((item) => item.questionId == screenId);
  });

  return answerData?.value;
};
