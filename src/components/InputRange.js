import { Slider, makeStyles } from "@material-ui/core";
import { useState } from "react";
const useStyles = makeStyles({
  root: {
    width: "100%",
    marginRight: "20px",
    marginLeft: "10px",
    color: "#ffc371",
  },
  thumb: {
    marginTop: "-10px",
    width: "20px",
    height: "20px",
    color: "#ffa15f",
  },
});
function valuetext(value) {
  return `$${value}`;
}
const InputRange = (props) => {
  const { min, max } = props;
  const classes = useStyles();
  const [value, setValue] = useState([min, max]);
  const marks = [
    {
      value: min,
      label: "$" + min,
    },
    { value: max, label: "$" + max },
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleCommit = () => {
    props.onCommit(value[0], value[1]);
  };
  return (
    <Slider
      classes={{ thumb: classes.thumb, root: classes.root }}
      value={value}
      onChangeCommitted={handleCommit}
      onChange={handleChange}
      valueLabelDisplay="auto"
      aria-labelledby="range-slider"
      getAriaValueText={valuetext}
      marks={marks}
      max={max}
      min={min}
      step={10}
    />
  );
};
export default InputRange;
