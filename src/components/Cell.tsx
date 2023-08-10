import clsx from "clsx";
import { getSymbolColor } from "../helpers";
import { GameBoardField } from "../types";

function Cell({
	index,
	field,
	stopGame,
	highlightedFields,
	handleSetStep,
}: {
	index: number;
	field: GameBoardField;
	handleSetStep: (index: number) => void;
	stopGame: boolean;
	highlightedFields: number[];
}) {
	return (
		<button
			disabled={stopGame || field ? true : false}
			onClick={() => handleSetStep(index)}
			className={clsx(
				"w-full h-full border-2 hover:border-red-500/50 text-center self-center ",
				highlightedFields.length && highlightedFields.includes(index) && "bg-red-500"
			)}
		>
			{field && <span className={clsx("font-bold text-3xl", getSymbolColor(field))}>{field}</span>}
		</button>
	);
}

export default Cell;
