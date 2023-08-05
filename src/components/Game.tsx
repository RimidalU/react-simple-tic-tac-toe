import { useState } from "react";

import Board from "./Board";

import { initialGameState, GAME_SYMBOLS } from "../constants";
import { getSymbolColor } from "../helpers";
import { gameState } from "../types";

function Game() {
	const [state, setState] = useState<gameState>(initialGameState);

	const handleSetStep = (index: number) => {
		const newState = state;

		newState.gameBoard[index] = state.currentStep;

		newState.currentStep === GAME_SYMBOLS.SYMBOL_X
			? (newState.currentStep = GAME_SYMBOLS.SYMBOL_0)
			: (newState.currentStep = GAME_SYMBOLS.SYMBOL_X);

		setState({ ...newState });
	};

	return (
		<article className=" w-[200px] mx-auto p-3 border-2">
			<h2 className="text-xl font-bold mb-4">
				Next step:{""}
				<span className={`text-3xl ml-3 ${getSymbolColor(state.currentStep)}`}>{state.currentStep}</span>
			</h2>
			<Board fields={state.gameBoard} handleSetStep={handleSetStep} />
		</article>
	);
}

export default Game;
