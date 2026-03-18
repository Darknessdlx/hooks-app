export interface ScrambleWordState {
    words: string[];
    currentWord: string;
    scrambledWord: string;
    guess: string;
    points: number;
    errorCounter: number;
    maxAllowErrors: number;
    skipCounter: number;
    maxSkips: number;
    isGameOver: boolean;
}

export type ScrambleWordAction =
    | { type: 'SET_WORDS'; payload: string[] }
    | { type: 'SET_CURRENT_WORD'; payload: string }
    | { type: 'SET_SCRAMBLED_WORD'; payload: string }
    | { type: 'SET_GUESS'; payload: string }
    | { type: 'SET_POINTS'; payload: number }
    | { type: 'SET_ERROR_COUNTER'; payload: number }
    | { type: 'SET_MAX_ALLOW_ERRORS'; payload: number }
    | { type: 'SET_SKIP_COUNTER'; payload: number }
    | { type: 'SET_MAX_SKIPS'; payload: number } | { type: 'SET_IS_GAME_OVER'; payload: boolean };