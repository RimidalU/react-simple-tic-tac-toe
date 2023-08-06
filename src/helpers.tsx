import { GAME_SYMBOLS } from "./constants";
import { StepSymbol, GameBoardField, GameState } from "./types";

export const getSymbolColor = (symbol: StepSymbol) => {
	if (symbol === GAME_SYMBOLS.SYMBOL_0) {
		return "text-yellow-500";
	}
	if (symbol === GAME_SYMBOLS.SYMBOL_X) {
		return "text-blue-800";
	}
	return "";
};

export const renderHeader = (
	isWin: StepSymbol | null,
	currentStep: StepSymbol,
	stepNumber: number
) => {
	if (isWin) {
		return (
			<>
				<p className="text-xl font-bold mb-4">
					Step:{""}
					<span className="text-3xl ml-3">{stepNumber}</span>
				</p>
				<h2 className="text-xl font-bold mb-4">
					Win <span className={`text-3xl ml-3 ${getSymbolColor(isWin)}`}>{isWin}</span>
				</h2>
			</>
		);
	}

	if (stepNumber === 10) {
		return (
			<>
				<p className="text-3xl font-bold mb-4">Dead Heat!</p>
				<h2 className="text-3xl font-bold mb-4">X - 0</h2>
			</>
		);
	}

	return (
		<>
			<p className="text-xl font-bold mb-4">
				Step:{""}
				<span className="text-3xl ml-3">{stepNumber}</span>
			</p>
			<p className="text-xl font-bold mb-4">
				Next step:{""}
				<span className={`text-3xl ml-3 ${getSymbolColor(currentStep)}`}>{currentStep}</span>
			</p>
		</>
	);
};

export const checkWinner = (gameBoard: GameBoardField[]) => {
	if (gameBoard[0] !== null && gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) {
		return { isWin: gameBoard[0], highlightedFields: [0, 1, 2] };
	}
	if (gameBoard[3] !== null && gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) {
		return { isWin: gameBoard[3], highlightedFields: [3, 4, 5] };
	}
	if (gameBoard[6] !== null && gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) {
		return { isWin: gameBoard[6], highlightedFields: [6, 7, 8] };
	}

	if (gameBoard[0] !== null && gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) {
		return { isWin: gameBoard[0], highlightedFields: [0, 3, 6] };
	}
	if (gameBoard[1] !== null && gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) {
		return { isWin: gameBoard[1], highlightedFields: [1, 4, 7] };
	}
	if (gameBoard[2] !== null && gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]) {
		return { isWin: gameBoard[2], highlightedFields: [2, 5, 8] };
	}

	if (gameBoard[0] !== null && gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
		return { isWin: gameBoard[0], highlightedFields: [0, 4, 8] };
	}
	if (gameBoard[2] !== null && gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
		return { isWin: gameBoard[2], highlightedFields: [2, 4, 6] };
	}
	return { isWin: null, highlightedFields: [] };
};

export const getNewState = (state: GameState, index: number) => {
	const newState = { ...state };

	newState.gameBoard[index] = state.currentStep;

	newState.currentStep === GAME_SYMBOLS.SYMBOL_X
		? (newState.currentStep = GAME_SYMBOLS.SYMBOL_0)
		: (newState.currentStep = GAME_SYMBOLS.SYMBOL_X);

	const { isWin, highlightedFields } = checkWinner(newState.gameBoard);
	const nextStep = state.stepNumber + 1;

	newState.isWin = isWin;
	newState.highlightedFields = highlightedFields;
	newState.stepNumber = nextStep;
	newState.stopGame = isWin ? true : false;
	newState.stopGame = nextStep !== 10 ? newState.stopGame : true;

	return newState;
};
