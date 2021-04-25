import { Grid, Tab, withStyles, Tabs } from "@material-ui/core";
import Footer from "cores/Footer/Footer";
import Header from "cores/Header/Header";
import React  from "react";
import TabPanel from "../../components/TabPannel";
import AccountTab from "./AccountTab";
import EditPasswordTab from "./EditPasswordTab";

const UserPage = () => {
  const [value, setValue] = React.useState(0);

  const StyledTab = withStyles({
    root: {
      font: "14px/22px Montserrat-Regular",
      color: "#4d4d4d",
      padding: 0,
      minHeight: "unset",
      opacity: 1,
      marginBottom: "18px",
    },
    wrapper: {
      justifyContent: "flex-start",
      flexDirection: "row",
      letterSpacing: "normal",
      textTransform: "none",
    },
    selected: {
      font: "14px/22px Montserrat-Medium",
      color: "#ff6900",
    },
  })(Tab);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <React.Fragment>
      <Header />
      <div className="container user-page-container">
        <Grid container direction="row" style={{ gap: "100px" }} spacing={0}>
          <Grid className="user-page-navbar" item xs>
            <div className="user-page-header">My Account</div>
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{
                style: {
                  display: "none",
                },
              }}
            >
              <StyledTab label="Account setting" />
              <StyledTab label="Change password" />
            </Tabs>
          </Grid>
          <TabPanel value={value} index={0}>
            <AccountTab />
          </TabPanel>
          <TabPanel value={value} index={1}>
            <EditPasswordTab />
          </TabPanel>
        </Grid>
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default UserPage;
