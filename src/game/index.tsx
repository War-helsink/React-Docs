import React from "react";
import Board from "./board";
import { calculateWinner } from "./helpers";
import "./index.css";

interface GameState {
	history: { squares: string[] }[];
	stepNumber: number;
	xIsNext: boolean;
}

class Game extends React.Component<unknown, GameState> {
	constructor(props: GameState) {
		super(props);
		this.state = {
			history: [
				{
					squares: Array(9).fill(null),
				},
			],
			stepNumber: 0,
			xIsNext: true,
		};
	}

	handleClick(index: number) {
		const history = this.state.history.slice(0, this.state.stepNumber + 1);
		const current = history[history.length - 1];
		const squares = current.squares.slice();
		if (calculateWinner(squares) || squares[index]) {
			return;
		}
		squares[index] = this.state.xIsNext ? "X" : "O";
		this.setState({
			history: history.concat([
				{
					squares: squares,
				},
			]),
			stepNumber: history.length,
			xIsNext: !this.state.xIsNext,
		});
	}

	jumpTo(step: number) {
		this.setState({
			stepNumber: step,
			xIsNext: step % 2 === 0,
		});
	}

	render() {
		const history = this.state.history;
		const current = history[this.state.stepNumber];
		const winner = calculateWinner(current.squares);
		let status = `Next player: ${this.state.xIsNext ? "X" : "O"}`;
		if (winner) {
			status = `Winner: ${winner}`;
		}

		const moves = history.map((step, move) => {
			const desc = move ? `Go to move #${move}` : "Go to game start";
			return (
				<li key={`key-moves-${move.toString()}`}>
					<button onClick={() => this.jumpTo(move)}>{desc}</button>
				</li>
			);
		});

		return (
			<div className="game">
				<div className="game-board">
					<Board
						board={3}
						square={3}
						squares={current.squares}
						xIsNext={this.state.xIsNext}
						onClick={(i) => this.handleClick(i)}
					/>
				</div>
				<div className="game-info">
					<div>{status}</div>
					<ol>{moves}</ol>
				</div>
			</div>
		);
	}
}

export default Game;
