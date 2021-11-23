import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

import { LoginContext } from "../context/context";

function Header() {
  const loginContext = useContext(LoginContext);
  const history = useHistory();

  const handleLogOut = () => {
    loginContext.setLoggedIn(false);
    loginContext.setUser("");
    history.push("/");
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography
            data-testid="header"
            variant="h5"
            color="inherit"
            component="div"
          >
            Task
          </Typography>
          {loginContext.loggedIn ? (
            <Typography
              data-testid="email"
              variant="h5"
              color="inherit"
              component="div"
              style={{ marginLeft: "70%" }}
            >
              {loginContext.userData.email}

              <Button
                color="inherit"
                data-testid="logout"
                onClick={handleLogOut}
              >
                {" "}
                Logout
              </Button>
            </Typography>
          ) : (
            <Typography
              data-testid="t"
              variant="h5"
              color="primary"
              component="button"
              style={{ marginLeft: "80%" }}
            >
              login
            </Typography>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Header;
