import { makeStyles } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
const useStyles = makeStyles({
  root: {
    display: "inline",
    "& svg": {
      width: "20px",
      height: "20px",
    },
  },
});
export function ReviewStarts() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <StarIcon color="disabled" />
      <StarIcon color="disabled" />
      <StarIcon color="disabled" />
      <StarIcon color="disabled" />
      <StarIcon color="disabled" />
    </div>
  );
}
