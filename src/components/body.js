import React from 'react';
import { RouterProvider,  } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Browse from './browse';

import Login from './login';

const Body = () => {
    
    
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        }
    ]);

   

    return (
        <div>
            <RouterProvider router={appRouter}></RouterProvider>
        </div>
    );
};

export default Body;
