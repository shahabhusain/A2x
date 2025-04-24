import React from "react"
import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom"
import Layout from "../Layout/Layout"
import About from "../page/About"
import Home from "../page/Home"
import Services from "../page/Services"
import ServicesDeatail from "../page/ServicesDeatail"
import Carrer from "../page/Carrer"
import Blog from "../page/Blog"

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path="/" element={<Layout />}>
         <Route index  element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/services" element={<Services />} />
         <Route path="/servicesdetail" element={<ServicesDeatail />} />
         <Route path="/carrer" element={<Carrer />} />
         <Route path="/blog" element={<Blog />} />
        </Route>
        </>
    )
)