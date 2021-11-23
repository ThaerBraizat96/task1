import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Avatar, Grid, Paper, Container } from "@material-ui/core";
import axios from "axios";


import { LoginContext } from "../context/context";


function Posts() {
  const history = useHistory();
  const loginContext = useContext(LoginContext);

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/Posts`
      );

      let postsData = response.data;
      loginContext.setPostsAllUser(postsData);

      let result = postsData.filter(
        (data) => data.userId === loginContext.userData.id
      );
      loginContext.setUserPosts(result);
    }
    fetchMyAPI();
  }, []);

  const handlePost = (id) => {
    loginContext.setPostId(id);
    history.push("/Comments");
  };

  return (
    <>
      <h1 data-testid="post">Posts</h1>
      {loginContext.userPosts &&
        loginContext.userPosts.map((post, idx) => {
          return (
            <div key={idx} style={{ padding: 14 }} className="App">
              <Container>
                <Paper
                  style={{ padding: "40px 20px", backgroundColor: "#E6E6E6" }}
                >
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                      <Avatar
                        alt="comments"
                        src="https://assets2.rappler.com/2013/04/1588411756-6-comment-moderation-policy-4x3.jpg"
                      />
                    </Grid>
                    <Grid item xs zeroMinWidth>
                      <h4 style={{ margin: 0, textAlign: "left" }}>
                        {" "}
                        {post.title}
                      </h4>
                      <p style={{ textAlign: "left" }}>{post.body}</p>
                      <Button
                        data-testid="postBtn1"
                        color="secondary"
                        variant="contained"
                        onClick={() => handlePost(post.id)}
                      >
                        see comments
                      </Button>
                    </Grid>
                  </Grid>
                </Paper>
              </Container>
            </div>
          );
        })}
    </>
  );
}
export default Posts;
