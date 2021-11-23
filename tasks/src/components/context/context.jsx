import React, { useState, createContext } from 'react';

export const LoginContext = createContext();

export default function LoginProvider(props) {


    const [user, setUser] = useState("")
    const [userData,setUserData]= useState({username:"" ,email:"" ,id:0 })
    const [postId,setPostId] = useState(0)
    const [loggedIn,setLoggedIn] = useState(false)
    const [users, setUsers] = useState([]);
    const [postsAllUser, setPostsAllUser] = useState([]);
    const [userPosts, setUserPosts] = useState([]);





    const state = {
        setUser: setUser,
        user: user,
        userData:userData,
        setUserData:setUserData,
        postId:postId,
        setPostId:setPostId,
        loggedIn:loggedIn,
        setLoggedIn:setLoggedIn,
        users:users,
        setUsers:setUsers,
        postsAllUser:postsAllUser,
        userPosts:userPosts,
        setPostsAllUser:setPostsAllUser,
        setUserPosts:setUserPosts


        

    }


    return (
        <LoginContext.Provider value={state}>
            {props.children}
        </LoginContext.Provider>
    )
}