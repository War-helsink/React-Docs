interface SquareProp {
	value: string;
	onClick: () => void;
}

export default function Square(props: SquareProp) {
	return (
		<button className="square" onClick={props.onClick}>
			{props.value}
		</button>
	);
}
