export type SYMBOL = "X" | "0";

export type gameBoardField = SYMBOL | null;

export type gameState = {
	currentStep: SYMBOL;
	gameBoard: gameBoardField[];
};
