import DateRangePicker from "react-bootstrap-daterangepicker";
import { useRef, useEffect } from "react";
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
export function OrderDateFilter({ state, setState }) {
  const pickerRef = useRef();
  const classes = useStyles();
  const handleCallback = (start, end) => {
    setState({ ...state, startDate: start, endDate: end });
  };
  const handleEvent = (event, picker) => {};
  useEffect(() => {
    pickerRef.current.setStartDate(state.startDate);
    pickerRef.current.setEndDate(state.endDate);
  }, [state]);
  return (
    <DateRangePicker
      ref={pickerRef}
      initialSettings={{
        startDate: state.startDate.toDate(),
        endDate: state.endDate.toDate(),
      }}
      onEvent={handleEvent}
      onCallback={handleCallback}
    >
      <input type="text" className={classes.dateInput} />
    </DateRangePicker>
  );
}
