import { Divider, Grid, makeStyles } from "@material-ui/core";
import React from "react";

const styles = makeStyles({
  root: {
    "& hr": {
      height: "2px",
    },
  },
  text: {
    margin: "0 24px",
    color: "#202124",
    fontFamily: "Montserrat-Medium",
    fontSize: "16px",
    lineHeight: "24px",
  },
  left: { width: "80px" },
  right: { width: "auto", overflow: "hidden" },
});
export default function TextDivider({ ...props }) {
  const classes = styles();
  return (
    <Grid
      className={classes.root}
      container
      direction="row"
      alignItems="center"
    >
      <Divider classes={{ root: classes.left }} />
      <span className={classes.text}>{props.text}</span>
      <Grid item xs>
        <Divider classes={{ root: classes.right }} />
      </Grid>
    </Grid>
  );
}
