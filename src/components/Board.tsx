import { GameBoardField } from "../types";
import Cell from "./Cell";

function Board({
	fields,
	handleSetStep,
	stopGame,
	highlightedFields,
}: {
	fields: GameBoardField[];
	handleSetStep: (index: number) => void;
	stopGame: boolean;
	highlightedFields: number[];
}) {
	return (
		<div className="grid border-2 grid-cols-[repeat(3,_minmax(50px,_1fr))] grid-rows-[repeat(3,_minmax(50px,_1fr))] mb-3">
			{fields.map((field, index) => {
				return (
					<Cell
						key={index}
						index={index}
						field={field}
						handleSetStep={handleSetStep}
						stopGame={stopGame}
						highlightedFields={highlightedFields}
					/>
				);
			})}
		</div>
	);
}

export default Board;
