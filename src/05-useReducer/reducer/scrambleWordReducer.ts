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
    totalWords: number;
}

export type ScrambleWordsAction =
    | { type: 'SET_WORDS'; payload: string[] }
    | { type: 'SET_CURRENT_WORD'; payload: string }
    | { type: 'SET_SCRAMBLED_WORD'; payload: string }
    | { type: 'SET_GUESS'; payload: string }
    | { type: 'SET_POINTS'; payload: number }
    | { type: 'SET_ERROR_COUNTER'; payload: number }
    | { type: 'SET_MAX_ALLOW_ERRORS'; payload: number }
    | { type: 'SET_SKIP_COUNTER'; payload: number }
    | { type: 'SET_MAX_SKIPS'; payload: number } | { type: 'SET_IS_GAME_OVER'; payload: boolean };


const GAME_WORDS = [
    'REACT',
    'JAVASCRIPT',
    'TYPESCRIPT',
    'HTML',
    'ANGULAR',
    'SOLID',
    'NODE',
    'VUEJS',
    'SVELTE',
    'EXPRESS',
    'MONGODB',
    'POSTGRES',
    'DOCKER',
    'KUBERNETES',
    'WEBPACK',
    'VITE',
    'TAILWIND',
];

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
    return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
    return word
        .split('')
        .sort(() => Math.random() - 0.5)
        .join('');
};

export const getInitialState = (): ScrambleWordState => {

    const shuffledWords = shuffleArray(GAME_WORDS);

    return {
        currentWord: shuffledWords[0],
        scrambledWord: scrambleWord(shuffledWords[0]),
        words: shuffledWords,
        guess: '',
        points: 0,
        errorCounter: 0,
        maxAllowErrors: 3,
        skipCounter: 0,
        maxSkips: 3,
        isGameOver: false,
        totalWords: shuffledWords.length,
    }
}

export const scrambleWordsReducer = (state: ScrambleWordState, action: ScrambleWordsAction) => {
    switch (action.type) {


        default:
            return state;

    }
};