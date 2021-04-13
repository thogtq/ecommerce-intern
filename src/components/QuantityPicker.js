import {
  InputAdornment,
  makeStyles,
  TextField,
} from "@material-ui/core";
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
  return (
    <TextField
      className={classes.root}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <RemoveIcon />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position="end">
            <AddIcon />
          </InputAdornment>
        ),
        classes: { underline: classes.underline },
        defaultValue: 1,
      }}
    />
  );
}