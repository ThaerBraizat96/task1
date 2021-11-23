import { render, screen,waitFor } from '@testing-library/react';
import axiosMock from "axios";

import App from './App'
import { LoginContext } from './components/context/context';

describe("App", () => {

      test('should match snapshot', async  () => {

        axiosMock.get.mockResolvedValueOnce({
          data: [{
            "id": 1,
            "userId": 1,
            "title": "hello there",
            "body": "test"
    
          }]
        });
        const user = "wq"
        render(
            <LoginContext.Provider value={user}>
                    <App />
                
            </LoginContext.Provider>
        );
          await waitFor(()=>{

            expect(screen).toBeTruthy();
          })

      });
})