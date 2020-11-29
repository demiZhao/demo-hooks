import React from "react";

export const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

export const ClockSetting = ({ handleSetting = () => {} }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const setting = {
      hours: evt.target.hours.value,
      minutes: evt.target.minutes.value,
      seconds: evt.target.seconds.value
    };
    //console.log(setting);
    handleSetting(setting);
    //clear out
  };
  return (
    <form className={"clock-settings"} onSubmit={handleSubmit}>
      <input type="text" name="hours" placeholder="hh" maxLength="2" />
      {":"}
      <input type="text" name="minutes" placeholder="mm" maxLength="2" />
      {":"}
      <input type="text" name="seconds" placeholder="ss" maxLength="2" />
      <button className={"btn-primary"} type="submit" value="Submit">
        Set
      </button>
    </form>
  );
};
export const DigitalClock = ({
  hours,
  minutes,
  seconds,
  title,
  handleSetting
}) => {
  return (
    <div className={"clock"}>
      <h3>{title}</h3>
      <div className={"digital-clock"}>
        {/* {hours}:{minutes}:{seconds} */}
        {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}
      </div>
      <ClockSetting handleSetting={handleSetting}></ClockSetting>
    </div>
  );
};
export const AnalogClock = ({
  hours,
  minutes,
  seconds,
  title,
  handleSetting
}) => {
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
      {/* <div className={"digital-clock"}>
        {hours}:{minutes}:{seconds}
      </div> */}
      <ClockSetting handleSetting={handleSetting}></ClockSetting>
    </div>
  );
};
// export default class Clock extends React.Component {
//   clockInterval = "";
//   constructor(props) {
//     super(props);
//     this.handleDate = this.handleDate.bind(this);
//     this.state = {
//       hours: 0,
//       minutes: 0,
//       seconds: 0
//     };
//   }

//   componentDidMount() {
//     this.clockInterval = setInterval(this.handleDate, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.clockInterval);
//   }

//   render() {
//     const { hours, minutes, seconds } = this.state;
//     const secondsStyle = {
//       transform: `rotate(${seconds * 6}deg)`
//     };
//     const minutesStyle = {
//       transform: `rotate(${minutes * 6}deg)`
//     };
//     const hoursStyle = {
//       transform: `rotate(${hours * 30}deg)`
//     };
//     const { title } = this.props;
//     return (
//       <div className={"clock"}>
//         <h3>{title}</h3>
//         <div className={"analog-clock"}>
//           <div className={"dial seconds"} style={secondsStyle} />
//           <div className={"dial minutes"} style={minutesStyle} />
//           <div className={"dial hours"} style={hoursStyle} />
//         </div>
//         <div className={"digital-clock"}>
//           {hours}:{minutes}:{seconds}
//         </div>
//       </div>
//     );
//   }

//   handleDate() {
//     // const { datediff } = this.props;
//     const date = new Date();
//     //date.setHours(date.getHours() + datediff);
//     let hours = this.formatTime(date.getHours());
//     let minutes = this.formatTime(date.getMinutes());
//     let seconds = this.formatTime(date.getSeconds());
//     this.setState({ hours, minutes, seconds });
//   }

//   formatTime(time) {
//     return time < 10 ? `0${time}` : time;
//   }
// }
