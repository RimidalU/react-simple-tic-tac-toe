import { useState } from "react";

import { gameState } from "../types";
import { getSymbolColor } from "../helpers";
import { initialGameState } from "../constants";
import Board from "./Board";

function Game() {
	const [gameState] = useState<gameState>(initialGameState);
	return (
		<article className=" w-[200px] mx-auto p-3 border-2">
			<h2 className="text-xl font-bold mb-4">
				Next step:{""}
				<span className={`text-3xl ml-3 ${getSymbolColor(gameState.currentStep)}`}>
					{gameState.currentStep}
				</span>
			</h2>
			<Board fields={gameState.gameBoard} />
		</article>
	);
}

export default Game;
