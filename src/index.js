import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import Clock, { DigitalClock, formatTime } from "./clock";

import "./styles.scss";

function App() {
  const getInitClock = () => {
    const date = new Date();
    let hours = formatTime(date.getHours());
    let minutes = formatTime(date.getMinutes());
    let seconds = formatTime(date.getSeconds());
    return { hours, minutes, seconds };
  };
  const [clock, setClock] = useState(getInitClock());
  const handleSetting = ({ hours, minutes, seconds }) => {
    setClock({ hours, minutes, seconds });
  };
  return (
    <div className="App">
      <Clock title="Analog" datediff={9} />
      <DigitalClock
        title="Digital"
        datediff={-2}
        hours={clock.hours}
        minutes={clock.minutes}
        seconds={clock.seconds}
        handleSetting={handleSetting}
      />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
