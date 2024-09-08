import {createStore} from 'zustand/vanilla';
import {Screen} from "@/types/api/config";
import {screens} from "@/mock/quizConfig";

export type ConfigState = {
  screens: Screen[] | null
}

export type ConfigActions = {
  initialState: (initState:Screen[]) => void
}

export type ConfigStore = ConfigState & ConfigActions

export const initConfigStore = (): ConfigState => {
  return {
    screens, // todo try to fetch it from an API
  }
}

export const defaultInitState: ConfigState = {
  screens: null,
}

export const createConfigStore = (
  initState: ConfigState = defaultInitState,
) => {
  return createStore<ConfigStore>()((set) => ({
    ...initState,
    initialState: (screens: Screen[]) => set(() => ({screens})),
  }))
}

