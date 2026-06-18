import React from 'react'
import {  Routes, Route } from "react-router-dom";
import Header from './ComponentsEng/Header'
import Footer from './ComponentsEng/Footer'
import Home from './ComponentsEng/Home'
import ErrorPage from './Components/ErrorPage';


export default function EnglishRouterLink() {
    return (
        <div className="eng-site">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </div>


    )
}