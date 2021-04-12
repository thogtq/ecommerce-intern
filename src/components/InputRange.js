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
const InputRange = () => {
  const classes = useStyles();
  const [value, setValue] = useState([0, 5000]);
  const marks = [
    {
      value: 0,
      label: "$0",
    },
    { value: 5000, label: "$5000" },
  ];
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Slider
      classes={{ thumb: classes.thumb, root: classes.root }}
      value={value}
      onChange={handleChange}
      valueLabelDisplay="auto"
      aria-labelledby="range-slider"
      getAriaValueText={valuetext}
      marks={marks}
      max={5000}
      min={0}
      step={100}
    />
  );
};
export default InputRange;
