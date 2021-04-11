import { FormControl, Select, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    width: "100%",
    height: "48px",
    display: "flex",
    justifyContent: "center",
    "& .MuiInputBase-root": {
      "&::after": {
        borderBottom: "none",
      },
      "&::before": {
        borderBottom: "none",
      },
      backgroundColor: "#ffffff",
    },
  },
  singleSelect: {
    padding: "14px 16px",
    "&:focus": {
      backgroundColor: "#ffffff",
    },
  },
  menu: {
    marginTop: "50px",
  },
}));

export default function SingleSelect(props) {
  const { onChange, choosed, children } = props;
  const classes = useStyles();

  const MenuProps = {
    classes: { paper: classes.menu },
    getContentAnchorEl: () => null,
  };
  return (
    <FormControl classes={{ root: classes.root }}>
      <div className="form-label">{props.label}</div>
      <Select
        value={choosed}
        onChange={onChange}
        MenuProps={MenuProps}
        classes={{ root: classes.singleSelect }}
        className="form-input"
      >
        {children}
      </Select>
    </FormControl>
  );
}
