import { useGame } from "../lib/useGame";
import Board from "./Board";

import { renderHeader } from "../helpers";
import ResetButton from "./ResetButton";

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
			<ResetButton state={state} handleReset={handleReset} />
		</article>
	);
}

export default Game;
