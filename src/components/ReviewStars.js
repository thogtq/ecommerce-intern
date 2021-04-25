import { makeStyles } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
  },
  svg: {
    width: "18px",
    height: "18px",
  },
});
export function ReviewStars({ star, disabled, onChange }) {
  const colorDisabled = "#d3d3d3";
  const colorStar = "#ffe234";
  const classes = useStyles();
  const handleStarClick = (ele) => {
    if (disabled) return;
    let value = ele.currentTarget.getAttribute("value");
    if (onChange) {
      onChange(value);
    }
  };
  return (
    <div className={classes.root}>
      {[...Array(5)].map((e, index) =>
        index + 1 <= star ? (
          <StarIcon
            key={index}
            onClick={handleStarClick}
            value={index + 1}
            classes={{ root: classes.svg }}
            style={{
              color: colorStar,
              cursor: disabled ? "unset" : "pointer",
            }}
          />
        ) : (
          <StarIcon
            key={index}
            onClick={handleStarClick}
            value={index + 1}
            classes={{ root: classes.svg }}
            style={{
              color: colorDisabled,
              cursor: disabled ? "unset" : "pointer",
            }}
          />
        )
      )}
    </div>
  );
}
