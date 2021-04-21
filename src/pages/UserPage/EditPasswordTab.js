import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import SiteButton from "components/SiteButton";
import UserService from "services/UserService";

export default function EditPasswordTab() {
  const [disabled, setDisabled] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formData, setFormData] = useState({
    oldPassword: "",
    newPassword: "",
  });
  const handleFormChange = () => {
    if (formData.oldPassword && formData.newPassword && confirmPassword) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.newPassword !== confirmPassword) {
      alert("Password not match");
      return;
    }
    setDisabled(true);
    let res = await UserService.updatePassword(formData);
    if (res.status === "success") {
      alert("Password updated");
      setFormData({ oldPassword: "", newPassword: "" });
      setConfirmPassword("");
    } else {
      alert(res.error.message);
    }
    setDisabled(false);
  };
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const handleOldPasswordChange = (e) => {
    setFormData({ ...formData, oldPassword: e.target.value });
  };
  const handleNewPasswordChange = (e) => {
    setFormData({ ...formData, newPassword: e.target.value });
  };
  return (
    <form onChange={handleFormChange} onSubmit={handleSubmit}>
      <Grid className="edit-password-tab" item container direction="column">
        <Grid className="tab-header" item>
          <span className="tab-title">Change password</span>
        </Grid>
        <Grid
          className="edit-password-content"
          container
          direction="column"
          style={{ gap: "31px" }}
        >
          <Grid item>
            <label>CURRENT PASSWORD</label>
            <input
              type="password"
              value={formData.oldPassword}
              onChange={handleOldPasswordChange}
              className="input-field"
              placeholder="Enter your password..."
            ></input>
          </Grid>
          <Grid item>
            <label>NEW PASSWORD</label>
            <input
              type="password"
              value={formData.newPassword}
              onChange={handleNewPasswordChange}
              className="input-field"
              placeholder="Enter your password..."
            ></input>
          </Grid>
          <Grid item>
            <label>RE-ENTER NEW PASSWORD</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={handleConfirmPassword}
              className="input-field"
              placeholder="Enter your password..."
            ></input>
          </Grid>
          <Grid item container justify="flex-end">
            <SiteButton
              name="Save"
              weight="Bold"
              color="#ffffff"
              backgroundColor="#ffa15f"
              width="130px"
              height="35px"
              disabled={disabled}
            />
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
