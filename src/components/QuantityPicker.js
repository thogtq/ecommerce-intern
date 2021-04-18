import { InputAdornment, makeStyles, TextField } from "@material-ui/core";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
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
  const handleIncrease = (e) => {
    if (props.value === 999) return;
    props.onChange(props.value + 1);
  };
  const handleDecrease = (e) => {
    if (props.value === 1) return;
    props.onChange(props.value - 1);
  };
  const handleChange = (e) => {
    props.onChange(parseInt(e.target.value));
  };

  return (
    <TextField
      value={props.value}
      onChange={handleChange}
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
      }}
    />
  );
}
