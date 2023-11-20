import { writable } from "svelte/store";

export const useGlobalState = <T>(initialState: T) => {

  const store = writable(initialState);
  
  return [store, store.update] as const;
};

