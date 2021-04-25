import { Fragment, useState } from "react";
import dropdownIcon from "assets/images/admin/icons/dropdown.svg";
import { MenuItem, Menu, makeStyles, Grid } from "@material-ui/core";
import ColorDot from "components/ColorDot";
import { updateStatus } from "services/OrderService";
import ConfirmModal from "../../components/ConfirmModal";
import CustomCheckbox from "../../components/CustomCheckbox";
import SiteButton from "components/SiteButton";
const useStyles = makeStyles({
  root: {
    marginTop: "25px",
    width: "200px",
    padding: "16px",
  },
  list: {
    padding: "0",
    "& li": {
      textAlign: "center",
      font: "14px/20px Montserrat-Medium",
      color: "#3d3d3f",
    },
    //backgroundColor: "#fbfbfb",
  },
  listItem: {
    maxHeight: "80px",
  },
  modalHeader: {
    fontFamily: "Montserrat-Bold",
    color: "#363636",
  },
  reasonBox: {
    display: "flex",
    gap: "20px",
    flexDirection: "column",
    margin: "34px 0",
  },
  reasonText: {
    marginLeft: "12px",
    font: "14px/20px Montserrat-Medium",
    color: "#3d3d3f",
  },
  cancelButton: {
    border: "1px solid #ededed",
  },
});

const ActionMenu = ({ orderID, status, setFilter, filter }) => {
  const classes = useStyles();
  const [anchorMenu, setAnchorMenu] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [newStatus, setNewStatus] = useState("");
  const handleCloseMenu = () => {
    setAnchorMenu(null);
  };
  const handleMenuClick = (e) => {
    setAnchorMenu(e.target);
  };
  const handleStatusChange = (e) => {
    let selectedStatus = e.currentTarget.dataset.value;
    if (selectedStatus === status) {
      handleCloseMenu();
      return;
    }
    setNewStatus(selectedStatus);
    if (selectedStatus === "Canceled") {
      setOpenModal(true);
    } else {
      UpdateOrderStatus(selectedStatus);
    }
  };
  const UpdateOrderStatus = async (status) => {
    if (!status) return;
    let res = await updateStatus(orderID, status);
    if (res.status === "success") {
      setFilter({ ...filter });
      handleCloseMenu();
      return;
    } else {
      console.log(res);
    }
  };
  const handleCancel = (e) => {
    setNewStatus("");
    setAnchorMenu(null);
    setOpenModal(false);
  };
  const handleConfirm = (e) => {
    UpdateOrderStatus(newStatus);
  };
  return (
    <Fragment>
      <span onClick={handleMenuClick}>
        Action<img src={dropdownIcon} alt="dropdown-icon"></img>
      </span>

      <Menu
        classes={{ paper: classes.root, list: classes.list }}
        open={Boolean(anchorMenu)}
        anchorEl={anchorMenu}
        onClose={handleCloseMenu}
        getContentAnchorEl={null}
        disableAutoFocusItem={true}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem
          data-value="Completed"
          onClick={handleStatusChange}
          disableGutters
        >
          <ColorDot color="#82bf11" />
          Mark as Completed
        </MenuItem>
        <MenuItem
          data-value="Canceled"
          onClick={handleStatusChange}
          disableGutters
        >
          <ColorDot color="#f05d62" />
          Mart as Canceled
        </MenuItem>
        <ConfirmModal open={openModal} setOpen={setOpenModal}>
          <Grid
            classes={{ root: classes.modalHeader }}
            container
            justify="center"
          >
            Are you sure to cancel this order?
          </Grid>
          <div className={classes.reasonBox}>
            <div>
              <CustomCheckbox color="#ffa15f" />
              <span className={classes.reasonText}>Reason #1</span>
            </div>
            <div>
              <CustomCheckbox color="#ffa15f" />
              <span className={classes.reasonText}>Reason #2</span>
            </div>
            <div>
              <CustomCheckbox color="#ffa15f" />
              <span className={classes.reasonText}>Reason #3</span>
            </div>
          </div>
          <Grid container justify="space-between">
            <SiteButton
              className={classes.cancelButton}
              name="Cancel"
              width="156px"
              height="48px"
              weight="SemiBold"
              color="#ffa15f"
              backgroundColor="#ffffff"
              onClick={handleCancel}
            />
            <SiteButton
              className={classes.cancelButton}
              name="Confirm"
              width="156px"
              height="48px"
              weight="SemiBold"
              color="#ffffff"
              backgroundColor="#ffa15f"
              onClick={handleConfirm}
            />
          </Grid>
        </ConfirmModal>
      </Menu>
    </Fragment>
  );
};
export default ActionMenu;
