import React, { useState, createContext } from 'react';
// import axios from 'axios';


export const LoginContext = createContext();



export default function LoginProvider(props) {


    const [user, setUser] = useState("")
    const [userData,setUserData]= useState({username:"" ,email:"" ,id:0 })
    const [postId,setPostId] = useState(0)
    const [loggedIn,setLoggedIn] = useState(false)





    const state = {
        setUser: setUser,
        user: user,
        userData:userData,
        setUserData:setUserData,
        postId:postId,
        setPostId:setPostId,
        loggedIn:loggedIn,
        setLoggedIn:setLoggedIn

    }


    return (
        <LoginContext.Provider value={state}>
            {props.children}
        </LoginContext.Provider>
    )
}