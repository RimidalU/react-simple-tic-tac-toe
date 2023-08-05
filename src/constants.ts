import { SYMBOL } from "./types";

export const GAME_SYMBOLS: {
	SYMBOL_X: SYMBOL;
	SYMBOL_0: SYMBOL;
} = {
	SYMBOL_X: "X",
	SYMBOL_0: "0",
};

export const initialGameState = {
	currentStep: GAME_SYMBOLS.SYMBOL_X,
	gameBoard: [null, null, null, null, null, null, null, null, null],
};
