import { getSymbolColor } from "../helpers";
import { gameBoardField } from "../types";

function Board({
	fields,
	handleSetStep,
	stopGame,
}: {
	fields: gameBoardField[];
	handleSetStep: (index: number) => void;
	stopGame: boolean;
}) {
	return (
		<div className="grid border-2 grid-cols-[repeat(3,_minmax(50px,_1fr))] grid-rows-[repeat(3,_minmax(50px,_1fr))]">
			{fields.map((field, index) => {
				return (
					<button
						disabled={stopGame}
						key={index}
						onClick={() => handleSetStep(index)}
						className="w-full h-full border-2 text-center self-center"
					>
						{field && <span className={`font-bold text-3xl ${getSymbolColor(field)}`}>{field}</span>}
					</button>
				);
			})}
		</div>
	);
}

export default Board;
