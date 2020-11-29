import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { DigitalClock, AnalogClock, formatTime } from "./clock";

import "./styles.scss";

function App() {
  const getInitClock = () => {
    const date = new Date();
    let hours = formatTime(date.getHours());
    let minutes = formatTime(date.getMinutes());
    let seconds = formatTime(date.getSeconds());
    let time = date.getTime();
    return { hours, minutes, seconds, time };
  };
  const [clock, setClock] = useState(getInitClock());

  useEffect(() => {
    const handleTick = () => {
      const time = clock.time + 1000;
      const date = new Date(time);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      setClock({ hours, minutes, seconds, time });
    };
    const interval = setInterval(handleTick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [clock]);

  const handleSetting = ({ hours, minutes, seconds }) => {
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(seconds);
    const time = date.getTime();
    setClock({ hours, minutes, seconds, time });
  };
  const { hours, minutes, seconds } = clock;
  return (
    <div className="App">
      {/* <Clock title="Analog" datediff={9} /> */}
      <AnalogClock
        title="Analog"
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        handleSetting={handleSetting}
      />
      <DigitalClock
        title="Digital"
        datediff={-2}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        handleSetting={handleSetting}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
