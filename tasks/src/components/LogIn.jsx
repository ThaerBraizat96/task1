
import React, { useContext, useEffect, useState } from 'react'

import {
    Grid,
    TextField,
    Button,
    Card,
    CardContent,
    Typography
} from '@material-ui/core';

import { LoginContext } from './context';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';





function LogIn() {

    const [users, setUsers] = useState([]);

    const loginContext = useContext(LoginContext)
    const navigate = useNavigate();




    useEffect(() => {

        async function fetchMyAPI() {
            let response = await axios
                .get(`https://jsonplaceholder.typicode.com/users`)

            let userData = await response.data

            setUsers(userData);
        }
        fetchMyAPI()


    }, []);

    const handleUserName = (e) => {

        loginContext.setUser(e.target.value)
    }
    const handleSubmit = () => {
        console.log(users);
        users.forEach(element => {
            if (element.username === loginContext.user) {
                loginContext.setUserData({ username: element.username, email: element.email, id: element.id })
                loginContext.setLoggedIn(true)
                navigate('/Posts')
            }

        });


    }


    return (
        <>
            <div className="login" style={{marginTop:"5%"}}>

                <Grid>
                    <Card style={{ maxWidth: 500, padding: "100px 20px", margin: "0 auto", backgroundColor:"#BC8F8F"}}>
                        <CardContent>
                            <Typography align="center" variant="h5">
                                Login
                            </Typography>

                            <form>
                                <Grid container spacing={1}>
                                    <Grid xs={12}  item>

                                        <TextField label={"username"} type="text" variant="outlined"  placeholder="Enter your username" onChange={handleUserName} fullWidth required />
                                    </Grid>
                                    <Grid xs={12}  item>
                                        <TextField label={"password"} type="password" variant="outlined" fullWidth required />
                                    </Grid>
                                    <Button onClick={handleSubmit} variant="outlined"   > Submit </Button >
                                </Grid>
                            </form>
                        </CardContent>
                    </Card>
                </Grid>

            </div>
        </ >

    )
}
export default LogIn;

