import React from 'react'
import { RouterPovider } from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"
import Browse from './Browse'
import Signin from './Signin'
import Login from './login'
const body = () => {
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <Browse />
        },
        {
            path: "/signin",
            element: <Signin />
        }
    ])
    return (
        <div>
            <RouterPovider router={appRouter}></RouterPovider>
        </div>
    )
}

export default body
