import { useGame } from "../lib/useGame";
import Board from "./Board";

import { renderHeader } from "../helpers";

function Game() {
	const { state, handleReset, handleSetStep } = useGame();

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
				className={`border-2 p-1 hover:border-red-500/50 self-center ${state.stopGame && "bg-red-500"}`}
				onClick={handleReset}
			>
				Reset
			</button>
		</article>
	);
}

export default Game;
