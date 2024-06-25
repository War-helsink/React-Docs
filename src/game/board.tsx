import React from "react";
import Square from "./square";

interface BoardProp {
	board: number;
	square: number;
	squares: string[];
	xIsNext: boolean;
	onClick: (i: number) => void;
}

export default class Board extends React.Component<BoardProp> {
	renderSquare(index: number) {
		const { square } = this.props;
		const rows = [];
		for (let i = 0; i < square; i += 1) {
			rows.push(
				<Square
					key={`key-square-${index + i}`}
					value={this.props.squares[index + i]}
					onClick={() => this.props.onClick(index + i)}
				/>,
			);
		}
		return rows;
	}

	renderBoard() {
		const { board, square } = this.props;
		const rows = [];

		for (let i = 0; i < board * square; i += square) {
			rows.push(
				<div className="board-row" key={`key-board-${i}`}>
					{this.renderSquare(i)}
				</div>,
			);
		}

		return rows;
	}

	render() {
		return (
			<div>
				{this.renderBoard()}
			</div>
		);
	}
}
