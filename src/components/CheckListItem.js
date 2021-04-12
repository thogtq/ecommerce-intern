import {
  ListItem,
  ListItemIcon,
  ListItemText,
  withStyles,
  Grid,
  ListItemSecondaryAction,
} from "@material-ui/core";
import CustomCheckbox from "./CustomCheckbox";
//Fix me
//Xu ly active ngay trong file
const CheckListItem = (props) => {
  const StyledListItem = withStyles({ root: {} })(ListItem);
  return (
    <StyledListItem disableGutters>
      <ListItemText primary={props.children} />
      <ListItemSecondaryAction>
        <CustomCheckbox color="#ffa15f" />
      </ListItemSecondaryAction>
    </StyledListItem>
  );
};
export default CheckListItem;
