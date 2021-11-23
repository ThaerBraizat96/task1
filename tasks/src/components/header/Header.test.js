import * as React from 'react';
import * as ReactDOM from 'react-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import Header from './Header'
// import { LoginContext } from './Header'
import { LoginContext } from '../context/context'




describe("Header", () => {


    const loginContext = {
        loggedIn: true,
        userData: { email: "test@test.com" },
        setLoggedIn: jest.fn().mockResolvedValueOnce(true),
        setUser: jest.fn().mockResolvedValueOnce(true)
    }
    it('should render the title ', () => {
        const history = createMemoryHistory()
        const pushSpy = jest.spyOn(history, 'push')
        render(
            <LoginContext.Provider value={loginContext}>
                <Header />
            </LoginContext.Provider>
        );
        const h1Element = screen.getByText(/Task/i);
        expect(h1Element).toBeInTheDocument();
    });

    it('should render the LOGIN if the user not loggedin ', () => {
        const loginContext = {
            loggedIn: false,
            userData: { email: "test@test.com" }
        }
        const history = createMemoryHistory()
        const pushSpy = jest.spyOn(history, 'push')
        render(
            <LoginContext.Provider value={loginContext}>
                <Header />
            </LoginContext.Provider>
        );
        const h1Element = screen.getByTestId("t");
        expect(h1Element.textContent).toBe("login");
    });



    it('should render the login component when the user press login ', () => {
        const history = createMemoryHistory()
        const pushSpy = jest.spyOn(history, 'push')
        render(
            <Router history={history}>
                <LoginContext.Provider value={loginContext}>
                    <Header />
                </LoginContext.Provider>
            </Router>
        );

        const buttonElement = screen.getByTestId("logout");
        fireEvent.click(buttonElement, { target: { value: "/" } })
        expect(buttonElement).toBeInTheDocument();
    });


})