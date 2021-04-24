import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import SiteButton from "components/SiteButton";
import {updateUser} from "services/UserService";
export default function EditAccountTab({ edit, setEdit, user }) {
  const [disabled, setDisabled] = useState(true);
  const [formData, setFormData] = useState({
    fullname: user.fullname,
    email: user.email,
  });
  const handleCloseEdit = () => {
    setEdit(false);
  };
  const handleFormChange = () => {
    if (formData.fullname && formData.email) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setDisabled(true);
    let res = await updateUser(formData);
    if (res.status === "success") {
      setEdit(false);
    } else {
      alert(res.error.message);
    }
    setDisabled(false);
  };
  const handleNameChange = (e) => {
    setFormData({ ...formData, fullname: e.target.value });
  };
  const handleEmailChange = (e) => {
    setFormData({ ...formData, email: e.target.value });
  };
  return (
    <Grid className="edit-account-tab" item container direction="column">
      <Grid className="tab-header" item>
        <span className="tab-title">Information</span>
      </Grid>
      <form onChange={handleFormChange} onSubmit={handleSubmit}>
        <Grid
          className="edit-account-content"
          container
          direction="column"
          style={{ gap: "31px" }}
        >
          <Grid item>
            <label>NAME</label>
            <input
              value={formData.fullname}
              onChange={handleNameChange}
              className="input-field"
              placeholder="Enter your name..."
            ></input>
          </Grid>
          <Grid item>
            <label>EMAIL</label>
            <input
              onChange={handleEmailChange}
              value={formData.email}
              className="input-field"
              placeholder="Enter your email..."
            ></input>
          </Grid>
          <Grid item container justify="flex-end">
            <SiteButton
              name="Cancel"
              weight="Medium"
              color="#202124"
              backgroundColor="transparent"
              width="130px"
              height="35px"
              onClick={handleCloseEdit}
            />
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
      </form>
    </Grid>
  );
}
