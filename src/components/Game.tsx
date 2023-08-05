import { useState } from "react";

import Board from "./Board";

import { initialGameState } from "../constants";
import { getNewState, renderHeader } from "../helpers";
import { GameState } from "../types";

function Game() {
	const [state, setState] = useState<GameState>(initialGameState);

	const handleSetStep = (index: number) => {
		const newState = getNewState(state, index);
		setState(newState);
	};

	return (
		<article className=" w-[200px] mx-auto p-3 border-2">
			{renderHeader(state.isWin, state.currentStep)}
			<Board fields={state.gameBoard} handleSetStep={handleSetStep} stopGame={state.stopGame} />
		</article>
	);
}

export default Game;
