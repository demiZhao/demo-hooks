import React, { useRef } from "react";

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

const ClockSetting = ({ handleSetting }) => {
  const hhRef = useRef();
  const mmRef = useRef();
  const ssRef = useRef();

  const reset = () => {
    hhRef.current.value = "";
    mmRef.current.value = "";
    ssRef.current.value = "";
  };

  const handleClick = () => {
    const setting = {
      hours: hhRef.current.value,
      minutes: mmRef.current.value,
      seconds: ssRef.current.value
    };
    handleSetting(setting);
    reset();
  };
  return (
    <div className={"clock-settings"}>
      <input ref={hhRef} type="text" name="hh" placeholder="hh" />
      {":"}
      <input ref={mmRef} type="text" name="mm" placeholder="mm" />
      {":"}
      <input ref={ssRef} type="text" name="ss" placeholder="ss" />
      <button className={"btn-primary"} onClick={handleClick}>
        Set
      </button>
    </div>
  );
};

const DigitalClock = ({ hours, minutes, seconds, title, handleSetting }) => {
  return (
    <div className={"clock"}>
      <h3>{title}</h3>
      <div className={"digital-clock"}>
        {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
      </div>
      <ClockSetting handleSetting={handleSetting}></ClockSetting>
    </div>
  );
};

const AnalogClock = ({ hours, minutes, seconds, title, handleSetting }) => {
  const secondsStyle = {
    transform: `rotate(${seconds * 6}deg)`
  };
  const minutesStyle = {
    transform: `rotate(${minutes * 6}deg)`
  };
  const hoursStyle = {
    transform: `rotate(${hours * 30}deg)`
  };
  return (
    <div className={"clock"}>
      <h3>{title}</h3>
      <div className={"analog-clock"}>
        <div className={"dial seconds"} style={secondsStyle} />
        <div className={"dial minutes"} style={minutesStyle} />
        <div className={"dial hours"} style={hoursStyle} />
      </div>
      <ClockSetting handleSetting={handleSetting}></ClockSetting>
    </div>
  );
};

export { ClockSetting, DigitalClock, AnalogClock, formatTime };
