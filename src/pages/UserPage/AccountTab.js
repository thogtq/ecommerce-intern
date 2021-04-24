import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import EditAccountTab from "./EditAccountTab";
import { getUser } from "services/UserService";

export default function AccountTab() {
  const [user, setUser] = useState({});
  const [edit, setEdit] = useState(false);
  const handleEditTab = () => {
    setEdit(true);
  };
  useEffect(() => {
    const fetchUser = async () => {
      let res = await getUser();
      if (res.status === "success") {
        setUser(res.data.user);
      } else {
        alert(res.error.message);
      }
    };
    fetchUser();
  }, [edit]);
  return edit ? (
    <EditAccountTab edit={edit} setEdit={setEdit} user={user} />
  ) : (
    <Grid className="account-tab" item container direction="column">
      <Grid className="tab-header" item>
        <span className="tab-title">Information</span>
        <span onClick={handleEditTab} className="edit-account">
          Edit
        </span>
      </Grid>
      <Grid
        className="account-content"
        container
        direction="column"
        style={{ gap: "31px" }}
      >
        <Grid item>
          <label>Name</label>
          <div className="tab-text">{user.fullname}</div>
        </Grid>
        <Grid item>
          <label>Email</label>
          <div className="tab-text">{user.email}</div>
        </Grid>
      </Grid>
    </Grid>
  );
}
