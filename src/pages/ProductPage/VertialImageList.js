import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    gap: (props) => props.gap,
    "& img": {
      width: "100%",
      
    },
  },
});
export default function VerticalImageList(props) {
  const classes = useStyles(props);
  return (
    <Grid container direction="column" classes={{ root: classes.root }}>
      {props.children}
    </Grid>
  );
}
