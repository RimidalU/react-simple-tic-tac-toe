import { ReactNode } from "react";

function BoardTable({ children }: { children: ReactNode }) {
	return (
		<div className="grid border-2 grid-cols-[repeat(3,_minmax(50px,_1fr))] grid-rows-[repeat(3,_minmax(50px,_1fr))] mb-3">
			{children}
		</div>
	);
}

export default BoardTable;
