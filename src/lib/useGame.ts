import { useState } from "react";

import { gameBoard, initialGameState } from "../constants";
import { getNewState } from "../helpers";
import { GameState } from "../types";

export const useGame = () => {
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

	return {
		handleSetStep,
		handleReset,
		state,
	};
};
