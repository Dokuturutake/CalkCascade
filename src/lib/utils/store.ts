import { writable } from 'svelte/store';
import type { Results as IRresults } from '$lib/interfaces/Results'

// ストアの作成
const createStore = (initialValue, validator) => {
  const { subscribe, set } = writable(initialValue);

  return {
    subscribe,
    set: (value) => {
      if (validator(value)) {
        set(value);
      } else {
        console.error('Invalid value:', value);
      }
    }
  };
};

// バリデーション関数
const validateDifficulty = (difficulty) => difficulty >= 1 && difficulty <= 10;
export const difficulty = createStore(1, validateDifficulty);

const OPERATIONS = ['+', '-', '*', '/'];
const validateOperations = (operation) => operation.every(item => OPERATIONS.includes(item));
export const operations = createStore(OPERATIONS, validateOperations);

const SCREENS = ["Title", "Calculator", "Score"];
const validateScreens = (screen) => SCREENS.includes(screen);
export const Screen = createStore("Title", validateScreens);

export const ResultsList = writable<IRresults[]>([]);