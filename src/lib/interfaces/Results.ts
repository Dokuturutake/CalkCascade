import type { IResult } from "$lib/interfaces/Result";

export interface IResults{
  results: IResult[];
  difficultyLevel: number; // 難易度レベル
  timeLimit: number; // 制限時間 (ミリ秒)
}