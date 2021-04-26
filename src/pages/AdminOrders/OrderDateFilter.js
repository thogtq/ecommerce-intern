import DateRangePicker from "react-bootstrap-daterangepicker";
import { useState } from "react";
import moment from "moment";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  dateInput: {
    backgroundColor: "#ffffff",
    width: "240px",
    height: "48px",
    border: "solid 1px #ededed",
    borderRadius: "2px",
    padding: "12px 16px",
    font: "14px/20px Montserrat-Medium",
    color: "#3d3d3f",
  },
});
export function OrderDateFilter() {
  require("bootstrap-daterangepicker/daterangepicker.css");
  const classes = useStyles();
  const [state, setState] = useState({
    start: moment(),
    end: moment(),
  });
  const { start, end } = state;
  const handleCallback = (start, end) => {
    setState({ start, end });
  };
  const handleEvent = (event, picker) => {
    console.log(picker.startDate);
  };
  return (
    <DateRangePicker
      className="use-bootstrap"
      initialSettings={{
        startDate: start.toDate(),
        endDate: end.toDate(),
      }}
      onEvent={handleEvent}
      onCallback={handleCallback}
    >
      <input type="text" className={classes.dateInput} />
    </DateRangePicker>
  );
}
