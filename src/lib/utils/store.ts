import { writable } from 'svelte/store';

// ストアの作成
const createDifficultyStore = () => {
  const { subscribe, set, update } = writable(1);

  // バリデーション関数
  const validateDifficulty = (difficulty : number) => {
    const numbers = Array.from({length: 10}, (_, index) => index + 1);
    const validDifficulties = numbers;
    return validDifficulties.includes(difficulty);
  };

  return {
    subscribe,
    setDifficulty: (difficulty : number) => {
      if (validateDifficulty(difficulty)) {
        set(difficulty);
      } else {
        console.error('Invalid difficulty value:', difficulty);
      }
    }
  };
};
export const difficulty = createDifficultyStore();

// ストアの作成
const createOperationsStore = () => {
  const { subscribe, set, update } = writable(['+', '-', '*', '/']);

  // バリデーション関数
  const validateOperations = (operation:string[]) => {
    const operators = new Set(['+', '-', '*', '/']);
    // すべての要素が演算子に含まれるか確認
    return operation.every(item => operators.has(item));
  };

  return {
    subscribe,
    setOperations: (operation:string[]) => {
      if (validateOperations(operation)) {
        set(operation);
      } else {
        console.error('Invalid Operation value:', operation);
      }
    }
  };
};

export const operations = createOperationsStore();

// ストアの作成
const CreateScreensStore = () => {
  const { subscribe, set, update } = writable("TitleScreen");

  // バリデーション関数
  const ValidateScreens = (screen:string) => {
    const validDifficulties = ExistScreens;
    return validDifficulties.includes(screen);
  };

  return {
    subscribe,
    setScreen: (screen:string) => {
      if (ValidateScreens(screen)) {
        set(screen);
      } else {
        console.error('Invalid screen value:', screen);
      }
    }
  };
};

const ExistScreens = ["TitleScreen", "Calculator"];
export const Screen = CreateScreensStore();