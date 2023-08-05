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

export const renderHeader = (isWin: StepSymbol | null, currentStep: StepSymbol) => {
	if (isWin) {
		return (
			<h2 className="text-xl font-bold mb-4">
				Win <span className={`text-3xl ml-3 ${getSymbolColor(isWin)}`}>{isWin}</span>
			</h2>
		);
	}

	return (
		<h2 className="text-xl font-bold mb-4">
			Next step:{""}
			<span className={`text-3xl ml-3 ${getSymbolColor(currentStep)}`}>{currentStep}</span>
		</h2>
	);
};

export const checkWinner = (gameBoard: GameBoardField[]) => {
	if (gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2]) {
		return gameBoard[0];
	}
	if (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5]) {
		return gameBoard[3];
	}
	if (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8]) {
		return gameBoard[6];
	}

	if (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6]) {
		return gameBoard[0];
	}
	if (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7]) {
		return gameBoard[1];
	}
	if (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8]) {
		return gameBoard[2];
	}

	if (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8]) {
		return gameBoard[0];
	}
	if (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6]) {
		return gameBoard[2];
	}
	return null;
};

export const getNewState = (state: GameState, index: number) => {
	const newState = { ...state };

	newState.gameBoard[index] = state.currentStep;

	newState.currentStep === GAME_SYMBOLS.SYMBOL_X
		? (newState.currentStep = GAME_SYMBOLS.SYMBOL_0)
		: (newState.currentStep = GAME_SYMBOLS.SYMBOL_X);

	const isWin = checkWinner(newState.gameBoard);
	newState.isWin = isWin;
	newState.stopGame = isWin ? true : false;

	return newState;
};
