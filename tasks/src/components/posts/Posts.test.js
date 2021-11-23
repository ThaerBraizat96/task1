import { Router } from 'react-router-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import axiosMock from "axios";

import Posts from './Posts'
import { LoginContext } from '../context/context'
import LoginProvider from '../context/context'





describe("login", () => {


    const loginContext = {
        loggedIn: true,
        userData: {
            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
        },
        setUser: { username: "Bret" },
        // setUserData: {
        //     users: [{

        //         "id": 1,
        //         "name": "Leanne Graham",
        //         "username": "Bret",
        //         "email": "Sincere@april.biz",

        //     }]
        // },
        user: {

            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",

        },
        setLoggedIn: { loggedIn: false },
        userPosts:[{

            "id": 1,
            "title": "Leanne Graham",
            "body": "Bret",
            "userId": 1

        }],

        setPostId: jest.fn().mockResolvedValueOnce(true),


        setPostsAllUser: jest.fn().mockResolvedValueOnce(true),
        setUserPosts: jest.fn().mockResolvedValueOnce(true)
    }

    // const setUserPosts = jest.fn().mockResolvedValueOnce(true)
    // const setPostsAllUser = jest.fn().mockResolvedValueOnce(true)

    it('posts ', async () => {
        axiosMock.get.mockResolvedValueOnce({
            data: [{

                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",

            }]
        });


        render(
            <LoginProvider value={loginContext}>
                <Posts />
            </LoginProvider>
        );
        await waitFor(() => {
            const avatar = screen.getByTestId("post");
            expect(avatar).toBeInTheDocument();
        });
    });


    it('handle posts ', async () => {
        const history = createMemoryHistory()
        const pushSpy = jest.spyOn(history, 'push')
        axiosMock.get.mockResolvedValueOnce({
            data: [{

                "id": 1,
                "title": "Leanne Graham",
                "body": "Bret",
                "userId": 1

            }]
        });


        render(
            <Router history={history}>
                <LoginContext.Provider value={loginContext}>
                    <Posts />
                    {console.log("tttttttttt", loginContext.userData.id)}
                </LoginContext.Provider>
            </Router>
        );
        await waitFor(() => {
            const btnPost = screen.getByTestId("postBtn1");
            fireEvent.click(btnPost)
            expect(btnPost).toBeInTheDocument();
        });
    });

});