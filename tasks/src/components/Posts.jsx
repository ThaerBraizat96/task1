import React, { useContext, useEffect, useState } from 'react'
import {

    Button,
    Divider,
    Avatar,
    Grid,
    Paper,
    Container
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

        setPostsAllUser(postsData);


        let result = postsData.filter(data => data.userId === loginContext.userData.id)
        setUserPosts(result)
        }
        fetchMyAPI()
    }, []);

    const handlePost = (id) => {
        loginContext.setPostId(id);
        navigate('/Comments')    }

    return (
        <>
            <h1>Posts</h1>
            {userPosts && userPosts.map((post, idx) => {

                return(
                    <div key={idx} style={{ padding: 14 }} className="App">
                   <Container >
                    <Paper style={{ padding: "40px 20px",backgroundColor:"#E6E6E6" }}>
                      <Grid container wrap="nowrap" spacing={2}>
                        <Grid item>
                          <Avatar alt="Remy Sharp" src="https://assets2.rappler.com/2013/04/1588411756-6-comment-moderation-policy-4x3.jpg" />
                        </Grid>
                        <Grid justifyContent="left" item xs zeroMinWidth>
                          <h4 style={{ margin: 0, textAlign: "left" }}> {post.title}</h4>
                          <p style={{ textAlign: "left" }}>
                          {post.body}
                          </p>
                          <Button  color="secondary" variant="contained" onClick={() => handlePost(post.id)} >see comments</Button>
                   
                        </Grid >
                      </Grid >
                      {/* <Divider variant="fullWidth" style={{ margin: "30px 0" }} />  */}
                      </Paper >
                      </Container >
                      </div >
              
              
                )

            })
            }

        </ >

    )
}
export default Posts;





        //
        // {userPosts && userPosts.map((post, idx) => {

        //     return(
        //     <Card key={idx} sx={{ maxWidth: 345 }}>

        //         <CardContent>
        //             <Typography gutterBottom variant="h5" component="div">
        //                 {post.title}
        //             </Typography>
        //             <Typography variant="body2" color="primary">
        //                 {post.body}
        //             </Typography>
        //         </CardContent>
        //         <CardActions>
        //         <Button size="small" color="secondary" onClick={() => handlePost(post.id)} >see comments</Button>

        //         </CardActions>
        //     </Card>
        //     )

        // })
        // }
        