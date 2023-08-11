import { Component } from "react";
import "./app.scss";

export default class App extends Component {
  state = {
    userDate: "",
    userDateInTime: 0,
  };
  handleDate = (value) => {
    this.setState(() => {
      return {
        userDate: value,
        userDateInTime: this.handleDateToTime(value),
      };
    });
    console.log(this.state.userDate, this.state.userDateInTime);
  };
  handleDateToTime = (date) => {
    const newDate = new Date(date);
    return newDate.getTime();
  };
  render() {
    //To get current date and time.

    const currentDate = new Date();
    const adjustDate = (date) => {
      if (date.toString().length !== 1) return date;
      else return "0" + date;
    };
    const todayDate =
      currentDate.getUTCFullYear() +
      "-" +
      adjustDate(currentDate.getUTCMonth() + 1) +
      "-" +
      adjustDate(currentDate.getDate());

    return (
      <div className="app">
        <div className="navbar">
          <p>Days calculator app</p>
        </div>
        <div className="main-app">
          <h3>
            Today date: <span>{todayDate}</span>
          </h3>
          <label htmlFor="date">
            Enter date:
            <input
              required
              type="date"
              name=""
              id="date"
              onChange={(e) => this.handleDate(e.target.value)}
            />
          </label>
          <h3>
            You chose :{" "}
            <span>{this.state.userDate !== "" && this.state.userDate}</span>
          </h3>
          <h3>
            Days between :{" "}
            <span>
              {this.state.userDate !== "" &&
                Math.abs(
                  Math.round(
                    (currentDate.getTime() - this.state.userDateInTime) /
                      (24 * 3600 * 1000)
                  )
                ) + " days in "}
              {Math.round(
                (currentDate.getTime() - this.state.userDateInTime) /
                  (24 * 3600 * 1000)
              ) < 0 && "future."}
              {Math.round(
                (currentDate.getTime() - this.state.userDateInTime) /
                  (24 * 3600 * 1000)
              ) > 0 && this.state.userDateInTime !== 0
                ? "past."
                : ""}
            </span>
          </h3>
        </div>
      </div>
    );
  }
}
