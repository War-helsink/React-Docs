import React from "react";
import { Remarkable } from "remarkable";

interface MarkdownEditorState {
	text: string;
}

class MarkdownEditor extends React.Component<unknown, MarkdownEditorState> {
	md = new Remarkable();

	constructor(props: unknown) {
		super(props);
		this.state = {
			text: "Привіт, світе!",
		};
	}

	handleChange(even: React.ChangeEvent<HTMLTextAreaElement>) {
		this.setState({ text: even.target.value });
	}

	getRawMarkup() {
		return { __html: this.md.render(this.state.text) };
	}

	render() {
		return (
			<div>
				<div>
					<h3>Редактор</h3>
					<label htmlFor="markdown-content">
						Введіть що-небудь в форматі Markdown
					</label>
					<br />
					<textarea
						id="markdown-content"
						onChange={(ev) => this.handleChange(ev)}
						defaultValue={this.state.text}
					/>
				</div>
				<div>
					<h3>Вивід</h3>
					<div
						className="content"
						dangerouslySetInnerHTML={this.getRawMarkup()}
					/>
				</div>
			</div>
		);
	}
}

export default MarkdownEditor;
