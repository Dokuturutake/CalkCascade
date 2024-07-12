import type { IQuestion } from "./Question";

export interface IResult {
  question: IQuestion;
  userAnswer: string;
  isCorrect: boolean;
  timeTaken: number; // 解答時間 (ミリ秒)
}