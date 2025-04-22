import React from "react"
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import Layout from "../Layout/Layout"
import About from "../page/About"
import Home from "../page/Home"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={<Layout />}>
         <Route index  element={<Home />} />
         <Route path="/about" element={<About />} />
        </Route>
        </>
    )
)