import { InputAdornment, makeStyles, TextField } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { useRef, useState } from "react";
const useStyles = makeStyles({
  root: {
    width: "108px",
    height: "42px",
    border: "1px solid #d4d3d3",
    justifyContent: "center",
    padding: "8px",
    "& input": {
      textAlign: "center",
    },
    "& svg": {
      cursor: "pointer",
    },
  },
  underline: {
    "&&&:before": {
      borderBottom: "none",
    },
    "&&:after": {
      borderBottom: "none",
    },
  },
});
export default function QuantityPicker(props) {
  const classes = useStyles();
  const [value, setValue] = useState(1);
  const handleIncrease = (e) => {
    if (value === 999) return;
    setValue(value + 1);
  };
  const handleDecrease = (e) => {
    if (value === 1) return;
    setValue(value - 1);
  };
  return (
    <TextField
      value={value}
      className={classes.root}
      InputProps={{
        startAdornment: (
          <InputAdornment onClick={handleDecrease} position="start">
            <RemoveIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment onClick={handleIncrease} position="end">
            <AddIcon />
          </InputAdornment>
        ),
        classes: { underline: classes.underline },
        defaultValue: 1,
      }}
    />
  );
}
