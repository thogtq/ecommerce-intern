import {
  Chip,
  FormControl,
  Select,
  Input,
  makeStyles,
} from "@material-ui/core";
import React from "react";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "48px",
    display: "flex",
    justifyContent: "center",
  },
  input: {
    "&::after": {
      borderBottom: "none",
    },
    "&::before": {
      borderBottom: "none",
    },
    "&:hover": {
      borderBottom: "none",
    },
    height: "48px",
    backgroundColor: "#ffffff",
  },
  multiSelect: {
    "&:focus": {
      backgroundColor: "#ffffff",
    },
  },
  chips: {
    display: "flex",
    flexWrap: "wrap",
  },
  chip: {
    borderRadius: 4,
    margin: 2,
    backgroundColor: "#f6f6f6",
  },
  menu: {
    marginTop: "50px",
  },
}));

export default function MultiSelect(props) {
  const { onChange, choosed, children } = props;
  const classes = useStyles();

  const MenuProps = {
    classes: { paper: classes.menu },
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
    getContentAnchorEl: () => null,
  };
  return (
    <FormControl classes={{ root: classes.root }}>
      <div className="form-label">{props.label}</div>
      <Select
        multiple
        value={choosed}
        onChange={onChange}
        input={<Input classes={{ root: classes.input }} />}
        renderValue={(selected) => (
          <div className={classes.chips}>
            {selected.map((value) => (
              <Chip key={value} label={value} className={classes.chip} />
            ))}
          </div>
        )}
        MenuProps={MenuProps}
        classes={{ root: classes.multiSelect }}
      >
        {children}
      </Select>
    </FormControl>
  );
}
