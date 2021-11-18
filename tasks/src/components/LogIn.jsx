
import React, { useContext, useEffect, useState } from 'react'
import { Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox } from '@material-ui/core';
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

            <Paper style={{padding:"20px" ,width:"25%",marginLeft:"25%",marginTop:"8%" } } >
                <div tyle={{padding:"20px"}}>
                    <Grid container spacing={12} alignItems="flex-end">
                        <Grid item>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD6-JhRPAx1Q0nw93zTfAth-DqzDe1HyVB8g&usqp=CAU" alt="logo" fullWidth style={{ } } />
                        </Grid>
                        
                

                        <Grid item md={true} sm={true} xs={true}>
                            <TextField  onChange={handleUserName} id="username" label="Username" type="text" fullWidth autoFocus required />
                        </Grid>
                    </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField id="username" label="Password" type="password" fullWidth required />
                        </Grid>
                    <Grid container alignItems="center" justify="space-between">
                        <Grid item>
                            <FormControlLabel control={
                                <Checkbox
                                    color="primary"
                                />
                            } label="Remember me" />
                        </Grid>
                        <Grid item>
                            <Button disableFocusRipple disableRipple style={{ textTransform: "none" }} variant="text" color="primary">Forgot password ?</Button>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button onClick={handleSubmit} variant="outlined" color="primary">Login</Button>
                    </Grid>
                </div>
            </Paper>


        </ >

    )
}
export default LogIn;


// <div className="login" style={{marginTop:"5%"}}>

// <Grid>
//     <Card style={{ maxWidth: 500, padding: "100px 20px", margin: "0 auto", backgroundColor:"#E6E6E6"}}>
//         <CardContent>
//             <Typography align="center" variant="h5">
//                 Login
//             </Typography >

//             <form>
//                 <Grid container spacing={1}>
//                     <Grid xs={12}  item>

//                         <TextField label={"username"} type="text" variant="outlined"  placeholder="Enter your username" onChange={handleUserName} fullWidth required />
//                     </Grid>
//                     <Grid xs={12}  item>
//                         <TextField label={"password"} type="password" variant="outlined" fullWidth required />
//                     </Grid>
//                     <Grid xs={12}  item>
//                     <Button onClick={handleSubmit} variant="outlined" fullWidth  > Submit </Button >
//                     </Grid>
//                 </Grid>
//             </form>
//         </CardContent>
//     </Card>
// </Grid >

// </div>