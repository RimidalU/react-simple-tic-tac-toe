import { getSymbolColor } from "../helpers";
import { GameBoardField } from "../types";

function Board({
	fields,
	handleSetStep,
	stopGame,
}: {
	fields: GameBoardField[];
	handleSetStep: (index: number) => void;
	stopGame: boolean;
}) {
	return (
		<div className="grid border-2 grid-cols-[repeat(3,_minmax(50px,_1fr))] grid-rows-[repeat(3,_minmax(50px,_1fr))] mb-3">
			{fields.map((field, index) => {
				return (
					<button
						disabled={stopGame || field ? true : false}
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
