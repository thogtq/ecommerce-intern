import { makeStyles, withStyles } from "@material-ui/core";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

const useStyles = makeStyles({
  root: {
    display: "flex",
    alignItems: "center",
  },
  pageNumber: {
    fontFamily: "Montserrat-Medium",
    fontSize: "14px",
    color: "#202124",
    lineHeight: "22px",
  },
  navIcon: {
    cursor: "pointer",
  },
});
export default function SimplePagination(props) {
  let { page, setPage, max } = props;
  page = 1;
  max = 100;
  const handleNext = () => {
    if (page === max) return;
    setPage(page + 1);
  };
  const handleBack = () => {
    if (page === 1) return;
    setPage(page - 1);
  };
  const classes = useStyles();
  return (
    <span className={classes.root}>
      <NavigateBeforeIcon className={classes.navIcon} onClick={handleBack} />
      <span className={classes.pageNumber}>
        {page}/{max}
      </span>
      <NavigateNextIcon className={classes.navIcon} onClick={handleNext} />
    </span>
  );
}
