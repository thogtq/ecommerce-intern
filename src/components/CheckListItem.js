import {
  ListItem,
  ListItemText,
  withStyles,
  ListItemSecondaryAction,
} from "@material-ui/core";
import CustomCheckbox from "./CustomCheckbox";
//Fix me
//Xu ly active ngay trong file
const CheckListItem = (props) => {
  const checked = props.checked;
  const handleClick = () => {
    props.onClick(props.value);
  };
  const StyledListItem = withStyles({ root: {} })(ListItem);
  return (
    <StyledListItem disableGutters>
      <ListItemText primary={props.name} />
      <ListItemSecondaryAction>
        <CustomCheckbox
          onClick={handleClick}
          checked={checked}
          color="#ffa15f"
        />
      </ListItemSecondaryAction>
    </StyledListItem>
  );
};
export default CheckListItem;
