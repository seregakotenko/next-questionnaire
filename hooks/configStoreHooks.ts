import { useConfigStore } from '@/providers/quiz-config-store-provider';
import { Screen } from '@/types/api/config';

export const useScreenData = (screenId: string): Screen | undefined => {
  return useConfigStore((state) => {
    return state.config?.flow.screens.find((item) => item.id === screenId);
  });
};
