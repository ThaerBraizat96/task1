import { Router } from 'react-router-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { createMemoryHistory } from 'history'
import axiosMock from "axios";

import LogIn from './LogIn'
import { LoginContext } from '../context/context'

describe("login", () => {

    const users = [{

        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",

    },
    {
        id: 2,
        name: "Lean2ne Graham",
        username: "Br2et",
        email: "Sincere2@april.biz",
    }];

    const loginContext = {
        loggedIn: true,
        userData: { email: "Sincere@april.biz" },
        user:"Bret",
       
        users: [{

            id: 1,
            name: "Leanne Graham",
            username: "Bret",
            email: "Sincere@april.biz",
    
        },
        {
            id: 2,
            name: "Lean2ne Graham",
            username: "Br2et",
            email: "Sincere2@april.biz",
        }],

        setLoggedIn: jest.fn().mockResolvedValueOnce(true),
        setUser: jest.fn().mockResolvedValueOnce(true),
        setUserData: jest.fn().mockResolvedValueOnce(true),
        setUsers: jest.fn().mockResolvedValueOnce(true),

    }

      it('render login', async () => {
        axiosMock.get.mockResolvedValueOnce({
            data: [{

                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",

            }]
        });
        render(
            <LoginContext.Provider value={loginContext}>
                <LogIn />
            </LoginContext.Provider >


        );

        await waitFor(() => {

            const inputElement = screen.getByTestId("login");
            expect(inputElement).toBeInTheDocument();
        });
    });

    it('able to type into input', async () => {
        axiosMock.get.mockResolvedValueOnce({
            data: [{

                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",

            }]
        });
        render(
            <LoginContext.Provider value={loginContext}>
                <LogIn />
            </LoginContext.Provider >
        );

        await waitFor(() => {

            const inputElement = screen.getByPlaceholderText(/Enter username/i);
            fireEvent.change(inputElement, { target: { value: "Bret" } })
            expect(inputElement.value).toBe("Bret");

        });
    })

    it('check if the username correct', async () => {
        const history = createMemoryHistory()
        const pushSpy = jest.spyOn(history, 'push')
        // const setUsers = jest.fn();
        // const useStateMock = (users) => [users, setUsers];
        // jest.spyOn(React, 'useState').mockImplementation(useStateMock);
        axiosMock.get.mockResolvedValueOnce({
            data: [{

                "id": 1,
                "name": "Leanne Graham",
                "username": "Bret",
                "email": "Sincere@april.biz",

            }, {

                "id": 2,
                "name": "Leanne Grahsdam111",
                "username": "B",
                "email": "Sincesdre1111111@april.biz",

            }]
        });
        render(
            <Router history={history}>
                <LoginContext.Provider value={loginContext}>
                    <LogIn />
                </LoginContext.Provider >
            </Router>
        );
        await waitFor(() => {

            const inputElement = screen.getByTestId("submitBtn");
            fireEvent.click(inputElement)
            expect(inputElement).toBeInTheDocument();

        });
    })

});