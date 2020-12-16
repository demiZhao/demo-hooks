import React, { createContext, useState, useEffect, useContext } from "react";
import { DigitalClock, AnalogClock } from "./clock";
import "./styles.scss";

export const TimeContext = createContext();
export const useTimeContext = () => useContext(TimeContext);

const App = () => {
  const initTime = () => new Date().getTime();
  const [time, setTime] = useState(initTime());

  useEffect(() => {
    const tick = () => {
      setTime((t) => t + 1000);
    };
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <TimeContext.Provider value={{ time, setTime }}>
      <div className="App">
        <AnalogClock title="Analog" />
        <DigitalClock title="Digital" />
      </div>
    </TimeContext.Provider>
  );
};

export default App;
