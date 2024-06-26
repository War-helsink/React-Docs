import React, { StrictMode } from "react";
import ReactDOM from 'react-dom/client';
import Game from './game';
import Todo from "./todo";
import MarkdownEditor from "./markdown-editor";

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <StrictMode>
    <Game cells={3} />
    <Todo />
    <MarkdownEditor />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
