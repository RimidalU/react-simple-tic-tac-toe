import { StepSymbol } from "./types";

export const GAME_SYMBOLS: {
	SYMBOL_X: StepSymbol;
	SYMBOL_0: StepSymbol;
} = {
	SYMBOL_X: "X",
	SYMBOL_0: "0",
};

export const gameBoard = [null, null, null, null, null, null, null, null, null];

export const initialGameState = {
	isWin: null,
	stopGame: false,
	currentStep: GAME_SYMBOLS.SYMBOL_X,
	gameBoard: [...gameBoard],
	highlightedFields: [],
};
