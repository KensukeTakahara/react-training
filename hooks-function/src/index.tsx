import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const printHoge = () => {
  console.log("Hoge");
  return "hoge";
};

const sleep = (waitSeconds: number, someFunction: Function) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(someFunction());
    }, waitSeconds * 1000);
  });
};

ReactDOM.render(
  <App api={sleep(5, printHoge)} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
