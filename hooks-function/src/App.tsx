import React, { useState, useEffect, useCallback, useMemo } from "react";
import logo from "./logo.svg";
import "./App.css";

const useApi = (api: Promise<any>) => {
  const [results, setResults] = useState(null);
  useEffect(() => {
    let isCurrent = true;
    api.then(results => {
      if (isCurrent) {
        setResults(results);
      }
    });
    return () => {
      isCurrent = false;
    };
  }, [api]);
  return results;
};

interface Props {
  api: Promise<any>;
}

const App: React.FC<Props> = (props: Props) => {
  const api = useApi(props.api);
  const callback = useCallback(() => api, [props.api]);
  // const memo = useMemo(() => api, [props.api]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={callback}>hoge</button>
      </header>
    </div>
  );
};

export default App;
