import React, { useContext, useEffect, useState } from 'react'

import {
    Typography,
    CardContent,
    Card
} from "@material-ui/core";
import { LoginContext } from './context';
import axios from 'axios';

function Comments(props) {


    const [userComments, setUserComments] = useState([]);

    const loginContext = useContext(LoginContext)

    useEffect(() => {
        async function fetchMyAPI(id) {
        let response = await axios
            .get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)

        let commentsData = await response.data

        console.log(commentsData);
        console.log('userData', loginContext.postId);
        setUserComments(commentsData);
        }
        fetchMyAPI(loginContext.postId)

        console.log('props test',props);


    }, []);


    return (
        <>
            {userComments && userComments.map((comment, idx) => {

                return (
                    <Card key={idx} sx={{ maxWidth: 345 }}>

                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {comment.name}
                            </Typography>
                            <Typography variant="body2" color="primary">
                                {comment.body}
                            </Typography>
                        </CardContent>
                        
                
                    </Card>
                )

            })
            }
        </ >

    )
}
export default Comments;