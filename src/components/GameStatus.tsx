import clsx from "clsx";
import { getSymbolColor } from "../helpers";
import { StepSymbol } from "../types";

function GameStatus({ title, symbol }: { title: string; symbol?: StepSymbol }) {
	return (
		<h2 className="text-xl font-bold mb-4">
			{title}
			{symbol && <span className={clsx("text-3xl ml-3", getSymbolColor(symbol))}>{symbol}</span>}
		</h2>
	);
}

export default GameStatus;
