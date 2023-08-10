import { GameBoardField } from "../types";
import BoardTable from "./BoardTable";
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
		<BoardTable>
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
		</BoardTable>
	);
}

export default Board;
