import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BanglaRouterLink from './BanglaRouterLink'
import EnglishRouterLink from './EnglishRouterLink';


export default function RouterLink() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<BanglaRouterLink />} />
                <Route path="/english/*" element={<EnglishRouterLink />} />
            </Routes>
        </BrowserRouter>
    )
}