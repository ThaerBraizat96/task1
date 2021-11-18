import React, { useContext, useEffect, useState } from 'react'

import {

    Button,
    Typography,
    CardContent,
    CardActions,
    Card
} from "@material-ui/core";
import { LoginContext } from './context';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';



function Posts() {

    const [postsAllUser, setPostsAllUser] = useState([]);
    const [userPosts, setUserPosts] = useState([]);

    const loginContext = useContext(LoginContext)
    const navigate = useNavigate();

    useEffect(() => {

        async function fetchMyAPI() {
        let response = await axios
            .get(`https://jsonplaceholder.typicode.com/Posts`)

        let postsData = await response.data

        console.log(postsData);
        console.log('userData', loginContext.userData);
        setPostsAllUser(postsData);


        let result = postsData.filter(data => data.userId === loginContext.userData.id)
        setUserPosts(result)
        console.log(postsAllUser);
        }
        fetchMyAPI()
    }, []);

    const handlePost = (id) => {
        loginContext.setPostId(id);
        navigate('/Comments')    }

    return (
        <>
        {/* <button onClick={handleData}>test</button> */}
      
            {userPosts && userPosts.map((post, idx) => {

                return(
                <Card key={idx} sx={{ maxWidth: 345 }}>

                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {post.title}
                        </Typography>
                        <Typography variant="body2" color="primary">
                            {post.body}
                        </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" color="secondary" onClick={() => handlePost(post.id)} >see comments</Button>

                    </CardActions>
                </Card>
                )

            })
            }

        </ >

    )
}
export default Posts;