import React, { createContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { DigitalClock, AnalogClock } from "./clock";

import "./styles.scss";

export const TimeContext = createContext();

function App() {
  const initTime = () => new Date().getTime();
  const [time, setTime] = useState(initTime());

  useEffect(() => {
    const handleTick = () => {
      setTime(time + 1000);
    };
    const interval = setInterval(handleTick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return (
    <TimeContext.Provider value={{ time, setTime }}>
      <div className="App">
        <AnalogClock title="Analog" />
        <DigitalClock title="Digital" />
      </div>
    </TimeContext.Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
