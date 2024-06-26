function generateLines(cells: number): number[][] {
	const lines = [];

	// Horizontal lines
	for (let i = 0; i < cells; i++) {
		const line = [];
		for (let j = 0; j < cells; j++) {
			line.push(i * cells + j);
		}
		lines.push(line);
	}

	// Vertical lines
	for (let i = 0; i < cells; i++) {
		const line = [];
		for (let j = 0; j < cells; j++) {
			line.push(j * cells + i);
		}
		lines.push(line);
	}

	// Diagonal line from top left to bottom right
	const diag1 = [];
	for (let i = 0; i < cells; i++) {
		diag1.push(i * cells + i);
	}
	lines.push(diag1);

	// Diagonal line from top right to bottom left
	const diag2 = [];
	for (let i = 0; i < cells; i++) {
		diag2.push(i * cells + (cells - i - 1));
	}
	lines.push(diag2);

	return lines;
}

export function calculateWinner(squares: string[], cells: number) {
	const lines = generateLines(cells);
	for (let i = 0; i < lines.length; i++) {
		const line = lines[i];
		const first = squares[line[0]];
		if (first && line.every(index => squares[index] === first)) {
			return first;
		}
	}
	return null;
}
