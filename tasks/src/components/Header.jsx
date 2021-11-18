import React, { useContext } from 'react'
import {
    AppBar,
    Toolbar,
    Typography
} from "@material-ui/core";
import { LoginContext } from './context';
import {useNavigate} from 'react-router-dom';

function Header() {
    const loginContext = useContext(LoginContext)
    const navigate = useNavigate();

    const handleLogOut =()=>{
        loginContext.setLoggedIn(false)
        navigate('/')
    }

    return (
        <>
            <AppBar position="static" >
                <Toolbar variant="dense" >
                    <Typography variant="h5" color="inherit" component="div" >
                        Task 
                    </Typography >
                    {loginContext.loggedIn ? <Typography variant="h5" color="inherit" component="div" style={{marginLeft:"70%"}} >
                      {loginContext.userData.email}
                      <button onClick={handleLogOut}> Logout</button>
                      
                      </Typography >  : <Typography variant="h5" color="primary" component="button" style={{marginLeft:"90%"}} >
                      login
                      </Typography >
                      }
                   
                </Toolbar >
            </AppBar >
        </ >

    )
}
export default Header;