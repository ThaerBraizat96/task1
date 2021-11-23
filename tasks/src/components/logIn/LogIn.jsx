import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Paper,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  Link,
  Typography,
} from "@material-ui/core";
import axios from "axios";

import { LoginContext } from "../context/context";


function LogIn() {
  const loginContext = useContext(LoginContext);
  const paperStyle = {
    padding: 20,
    height: "50vh",
    width: 280,
    margin: "20px auto",
  };
  const btnstyle = { margin: "8px 0" };
  const history = useHistory();

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );

      let userData = response.data;
      loginContext.setUsers(userData);
    }
    fetchMyAPI();
  }, []);

  const handleUserName = (e) => {
    loginContext.setUser(e.target.value);
  };
  const handleSubmit = () => {
    loginContext.users?.forEach((element) => {
      if (element.username === loginContext.user) {
        loginContext.setUserData({
          username: element.username,
          email: element.email,
          id: element.id,
        });
        loginContext.setLoggedIn(true);
        history.push("/Posts");
      }
    });
  };

  return (
    <>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <h2 data-testid="login">Log In </h2>
          </Grid>
          <TextField
            data-testid="Username"
            onChange={handleUserName}
            label="Username"
            placeholder="Enter username"
            fullWidth
            required
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
          />
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            data-testid="submitBtn"
            color="primary"
            variant="contained"
            style={btnstyle}
            onClick={handleSubmit}
            fullWidth
          >
            Sign in
          </Button>
          <Typography>
            <Link href="#">Forgot password ?</Link>
          </Typography>
          <Typography>
            {" "}
            Do you have an account ?<Link href="#">Sign Up</Link>
          </Typography>
        </Paper>
      </Grid>
    </>
  );
}
export default LogIn;
