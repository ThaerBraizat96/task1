
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import Comments from "./Comments";
import LoginProvider from "../context/context";
import axiosMock from "axios";

describe("login", () => {
  const loginContext = {
    loggedIn: true,
    userData: { email: "Sincere@april.biz" },
    setUser: { username: "Bret" },
    setUserData: {
      users: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
        },
      ],
    },
    user: {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz",
    },
    setLoggedIn: { loggedIn: false },
  };

  const setUserPosts = { userPosts: { title: "test", body: "testtest" } };
  const setPostsAllUser = { PostsAllUser: { title: "test", body: "testtest" } };

  it("comments  ", async () => {
    axiosMock.get.mockResolvedValueOnce({
      data: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
        },
      ],
    });

    render(
      <LoginProvider value={(loginContext, setUserPosts, setPostsAllUser)}>
        <Comments />
      </LoginProvider>
    );
    await waitFor(() => {
      const comment = screen.getByTestId("comments");
      expect(comment).toBeInTheDocument();
    });
  });
});
