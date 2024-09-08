import {createStore} from 'zustand/vanilla';
import {ConfigType} from "@/types/api/config";
import {quizConfig} from "@/mock/quizConfig";
import {AnswerType, ConfigState, ConfigStore} from "@/types/store";

export const initConfigStore = (): ConfigState => {
  return {
    config: quizConfig, // todo try to fetch it from an API
    answers: [],
  }
}

export const defaultInitState: ConfigState = {
  config: null,
  answers: [],
}

export const createConfigStore = (
  initState: ConfigState = defaultInitState,
) => {
  return createStore<ConfigStore>()((set) => ({
    ...initState,
    initializeState: (config: ConfigType) => set(() => ({config})),
    setAnswer: (questionId: string, answer: string) =>
      set((state) =>
        ({answers: updateAnswers(state.answers, questionId, answer)})),
  }))
}

function updateAnswers(answers: AnswerType[], questionId: string, answer: string) {
  let indexExistingAnswer = null;

  answers.find((item, index) => {
    if (item.questionId === questionId) {
      indexExistingAnswer = index;
    }
    return item.questionId === questionId;
  });

  if (indexExistingAnswer) {
    answers[indexExistingAnswer] = {questionId, answer};
    return [...answers];
  }

  return [...answers, {questionId, answer}]
}
