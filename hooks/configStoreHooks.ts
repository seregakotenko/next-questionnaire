import { useConfigStore } from '@/providers/quiz-config-store-provider';
import { Screen } from '@/types/api/config';
import { AnswerValueType } from '@/types/store';
import { useShallow } from 'zustand/react/shallow';

export const useScreenDataById = (screenId: string): Screen | undefined => {
  return useConfigStore(
    useShallow((state) => {
      return state.config?.flow.screens.find((item) => item.id === screenId);
    }),
  );
};

export const useAnswerValueByScreenId = (screenId: string): AnswerValueType => {
  return useConfigStore((state) => {
    return state.customer[screenId];
  });
};
