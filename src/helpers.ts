import { GAME_SYMBOLS } from "./constants";
import { SYMBOL } from "./types";

export const getSymbolColor = (symbol: SYMBOL) => {
	if (symbol === GAME_SYMBOLS.SYMBOL_0) {
		return "text-yellow-500";
	}
	if (symbol === GAME_SYMBOLS.SYMBOL_X) {
		return "text-blue-800";
	}
	return "";
};
