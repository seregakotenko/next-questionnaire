import { createStore } from 'zustand/vanilla';
import { Screen } from '@/types/api/config';
import { quizConfig } from '@/mock/quizConfig';
import { AnswerType, ConfigState, ConfigStore } from '@/types/store';

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
  return createStore<ConfigStore>()((set) => ({
    ...initState,
    setAnswer: (questionId: string, answer: string) =>
      set((state) => ({ answers: updateAnswers(state.answers, questionId, answer) })),
  }));
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
