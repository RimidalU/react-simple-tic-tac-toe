function GameStep({ stepNumber }: { stepNumber: number }) {
	return (
		<p className="text-xl font-bold mb-4">
			Step:{""}
			<span className="text-3xl ml-3">{stepNumber}</span>
		</p>
	);
}

export default GameStep;
