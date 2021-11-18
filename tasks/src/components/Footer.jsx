import React from 'react'
import {
    AppBar,
    Toolbar,
    Typography
} from "@material-ui/core";


function Footer() {
 

    return (
        <>
            <AppBar style={{marginTop:"20%"}} position="static" >
                <Toolbar variant="dense" >
                    <Typography variant="h5" color="inherit" component="div" >
                        
                    </Typography >
             
                </Toolbar >
            </AppBar >
        </ >

    )
}
export default Footer;