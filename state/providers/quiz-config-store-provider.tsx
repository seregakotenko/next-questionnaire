'use client';

import { createContext, type ReactNode, useContext, useRef } from 'react';
import { useStore } from 'zustand';
import { createConfigStore, initConfigStore } from '@/state/quiz-config-store';
import { ConfigStore } from '@/types/store';
import { ConfigType } from '@/types/api/config';

export type ConfigStoreApi = ReturnType<typeof createConfigStore>;

export const ConfigStoreContext = createContext<ConfigStoreApi | undefined>(undefined);

export interface ConfigStoreProviderProps {
  children: ReactNode;
  quizConfig: ConfigType;
}

export const ConfigStoreProvider = ({ children, quizConfig }: ConfigStoreProviderProps) => {
  const storeRef = useRef<ConfigStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createConfigStore(initConfigStore(quizConfig));
  }

  return (
    <ConfigStoreContext.Provider value={storeRef.current}>{children}</ConfigStoreContext.Provider>
  );
};

export const useConfigStore = <T,>(selector: (store: ConfigStore) => T): T => {
  const configStoreContext = useContext(ConfigStoreContext);

  if (!configStoreContext) {
    throw new Error(`useConfigStore must be used within ConfigStoreContext`);
  }

  return useStore(configStoreContext, selector);
};
