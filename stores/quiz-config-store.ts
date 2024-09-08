import { createStore } from 'zustand/vanilla';
import { Screen } from '@/types/api/config';
import { quizConfig } from '@/mock/quizConfig';
import { AnswerType, ConfigState, ConfigStore } from '@/types/store';
import { persist } from 'zustand/middleware';

export const initConfigStore = (): ConfigState => {
  return {
    config: quizConfig, // todo try to fetch it from an API ${process.env.API_URL}/quiz-config
    answers: prepareAnswerState(quizConfig?.flow?.screens),
  };
};

export const defaultInitState: ConfigState = {
  config: null,
  answers: [],
};

export const createConfigStore = (initState: ConfigState = defaultInitState) => {
  return createStore<ConfigStore>()(
    persist(
      (set) => ({
        ...initState,
        setAnswer: (questionId: string, answer: string) =>
          set((state) => ({ answers: updateAnswers(state.answers, questionId, answer) })),
      }),
      {
        version:
          Number(process.env.NEXT_PUBLIC_PERSIST_VERSION) || Math.floor(Math.random() * 1000) + 1,
        migrate: (persistedState: any, version) => {
          if (version !== Number(process.env.NEXT_PUBLIC_PERSIST_VERSION)) {
            delete persistedState.config;
            delete persistedState.answers;
          }

          return persistedState;
        },
        name: 'config-store', // name of the item in the storage (must be unique)
        skipHydration: false, // do not rehydrate this store after a full page load, we will rehydrate it manually
      },
    ),
  );
};

function updateAnswers(answers: AnswerType[], questionId: string, value: string) {
  return answers.map((item) => {
    if (item.questionId === questionId) {
      return { ...item, value };
    }
    return { ...item };
  });
}

function prepareAnswerState(screens: Screen[]): AnswerType[] | [] {
  if (!screens) return [];

  return screens.map(({ id }: { id: string }) => {
    return { questionId: id, value: null };
  });
}
