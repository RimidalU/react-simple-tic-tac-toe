import { useState } from "react";

import Board from "./Board";

import { gameBoard, initialGameState } from "../constants";
import { getNewState, renderHeader } from "../helpers";
import { GameState } from "../types";

function Game() {
	const [state, setState] = useState<GameState>(initialGameState);

	const handleSetStep = (index: number) => {
		const newState = getNewState(state, index);
		setState(newState);
	};

	const handleReset = () => {
		setState({
			...initialGameState,
			gameBoard: [...gameBoard],
			highlightedFields: [],
		});
	};

	return (
		<article className="w-[200px] mx-auto p-3 border-2 text-center">
			{renderHeader(state.isWin, state.currentStep, state.stepNumber)}
			<Board
				fields={state.gameBoard}
				handleSetStep={handleSetStep}
				stopGame={state.stopGame}
				highlightedFields={state.highlightedFields}
			/>
			<button
				className={`border-2 p-1 self-center ${state.stopGame && "bg-red-500"}`}
				onClick={handleReset}
			>
				Reset
			</button>
		</article>
	);
}

export default Game;
