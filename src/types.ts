export type StepSymbol = "X" | "0";

export type GameBoardField = StepSymbol | null;

export type GameState = {
	isWin: StepSymbol | null;
	stopGame: boolean;
	currentStep: StepSymbol;
	gameBoard: GameBoardField[];
	highlightedFields: number[];
};
