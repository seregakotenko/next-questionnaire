import { createStore } from 'zustand/vanilla';
import { quizConfig } from '@/mock/quizConfig';
import { ConfigState, ConfigStore } from '@/types/store';
import { devtools, persist } from 'zustand/middleware';
import { prepareCustomerState } from '@/state/utils';

export const initConfigStore = (): ConfigState => {
  return {
    config: quizConfig, // todo try to fetch it from an API ${process.env.API_URL}/quiz-config
    customer: prepareCustomerState(quizConfig?.flow?.screens),
    nextQuestionId: '',
  };
};

export const defaultInitState: ConfigState = {
  config: null,
  customer: {},
  nextQuestionId: '',
};

export const createConfigStore = (initState: ConfigState = defaultInitState) => {
  return createStore<ConfigStore>()(
    devtools(
      persist(
        (set) => ({
          ...initState,
          updateCustomer: ({ questionId, value }) =>
            set((state) => ({
              customer: {
                ...state.customer,
                [questionId]: value,
              },
            })),
          updateNextQuestionId: (nextQuestionId: string) => set(() => ({ nextQuestionId })),
        }),
        {
          version:
            Number(process.env.NEXT_PUBLIC_PERSIST_VERSION) || Math.floor(Math.random() * 1000) + 1,
          migrate: (persistedState: any, version) => {
            // cleaning the persisted state after the version is changed
            if (version !== Number(process.env.NEXT_PUBLIC_PERSIST_VERSION)) {
              delete persistedState.config;
              delete persistedState.customer;
              delete persistedState.nextQuestionId;
            }

            return persistedState;
          },
          name: 'store', // name of the item in the storage (must be unique)
          skipHydration: false, // do not rehydrate this store after a full page load, we will rehydrate it manually
        },
      ),
    ),
  );
};
