import { Checkbox, withStyles } from "@material-ui/core";
import { useState } from "react";
const CustomCheckbox = (props) => {
  const [checked, setChecked] = useState(props.checked);
  const StyledCheckbox = withStyles({
    root: {
      "&$checked": {
        color: props.color,
      },
    },
    checked: {},
  })(Checkbox);
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
    setChecked((prev) => !prev);
  };
  return (
    <StyledCheckbox
      edge="end"
      color="default"
      onClick={handleClick}
      checked={checked}
    />
  );
};

export default CustomCheckbox;
