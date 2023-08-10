import clsx from "clsx";
import { GameState } from "../types";

function ResetButton({ state, handleReset }: { state: GameState; handleReset: () => void }) {
	return (
		<button
			className={clsx(
				"border-2 p-1 hover:border-red-500/50 self-center", 
				state.stopGame && "bg-red-500"
			)}
			onClick={handleReset}
		>
			Reset
		</button>
	);
}

export default ResetButton;
