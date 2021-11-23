import React, { useContext, useEffect, useState } from "react";
import { Avatar, Grid, Paper, Container, Button } from "@material-ui/core";
import axios from "axios";

import { LoginContext } from "../context/context";

function Comments(props) {
  const [userComments, setUserComments] = useState([]);
  const loginContext = useContext(LoginContext);

  useEffect(() => {
    async function fetchMyAPI(id) {
      let response = await axios.get(
        `https://jsonplaceholder.typicode.com/comments?postId=${id}`
      );

      let commentsData = await response.data;

      setUserComments(commentsData);
    }
    fetchMyAPI(loginContext.postId);
  }, []);

  return (
    <>
      <h1 data-testid="comments">Comments</h1>
      {userComments &&
        userComments.map((comment, idx) => {
          return (
            <div key={idx} style={{ padding: 14 }} className="App">
              <Container>
                <Paper
                  style={{ padding: "40px 20px", backgroundColor: "#E6E6E6" }}
                >
                  <Grid container wrap="nowrap" spacing={2}>
                    <Grid item>
                      <Avatar
                        alt="Remy Sharp"
                        src="https://assets2.rappler.com/2013/04/1588411756-6-comment-moderation-policy-4x3.jpg"
                      />
                    </Grid>
                    <Grid item xs zeroMinWidth>
                      <h4
                        data-testid="name"
                        style={{ margin: 0, textAlign: "left" }}
                      >
                        {comment.name}
                      </h4>
                      <p data-testid="body" style={{ textAlign: "left" }}>
                        {comment.body}
                      </p>
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
export default Comments;
