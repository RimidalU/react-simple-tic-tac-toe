export type SYMBOL = "X" | "0";

export type gameBoardField = SYMBOL | null;

export type gameState = {
	isWin: SYMBOL | null;
	stopGame: boolean;
	currentStep: SYMBOL;
	gameBoard: gameBoardField[];
};
