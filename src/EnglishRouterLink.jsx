import React from 'react'
import {  Routes, Route } from "react-router-dom";
import Header from './ComponentsEng/Header'
import Footer from './ComponentsEng/Footer'
import Home from './ComponentsEng/Home'
import ErrorPage from './ComponentsEng/ErrorPage';
import Category from './ComponentsEng/Category/Category';
import TagPage from './ComponentsEng/Tags/TagPage';
import AllTagList from './ComponentsEng/Tags/AllTagList'
import WritersPage from './ComponentsEng/Writers/WritersPage';
import AllWriters from './ComponentsEng/Writers/AllWriters';
import Details from './ComponentsEng/DetailsPage/Details';
import SearchResult from './ComponentsEng/SearchResult';
import Live from './ComponentsEng/Live';
import Archives from './ComponentsEng/Archives';
import PrivacyPolicy from './ComponentsEng/Privacy-policy';
import Terms from './ComponentsEng/Terms';
import TheNews from './ComponentsEng/TheNews';
import ContactUs from './ComponentsEng/ContactUs';
import AdvertisementPage from './ComponentsEng/AdvertisementPage';
import EditorialPolicy from './ComponentsEng/EditorialPolicy';
import CopyRight from './ComponentsEng/CopyRight';
import ReaderRight from './ComponentsEng/ReaderRight';
import FileComplaint from './ComponentsEng/FileComplaint';
import Sitemap from './ComponentsEng/Sitemap';
import Subscription from './ComponentsEng/Subscription';
import AboutUs from './ComponentsEng/AboutUs';



export default function EnglishRouterLink() {
    return (
        <div className="eng-site">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/live" element={<Live />} />
                <Route path="/:catSlugEn" element={<Category />} />
                <Route path="/archives" element={<Archives />} />
                <Route path="/:catSlugEn/news/:id" element={<Details />} />
                <Route path="/tags/:TagTitle" element={<TagPage />} />
                <Route path="/all_tags" element={<AllTagList />} />
                <Route path="/writers/:WriterSlug" element={<WritersPage />} />
                <Route path="/all_writers" element={<AllWriters />} />
                <Route path="/search/:searchSlug" element={<SearchResult />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-service" element={<Terms />} />
                <Route path="/the-news" element={<TheNews />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/advertise" element={<AdvertisementPage />} />
                <Route path="/editorial-policy" element={<EditorialPolicy />} />
                <Route path="/copyright" element={<CopyRight />} />
                <Route path="/reader-right" element={<ReaderRight />} />
                <Route path="/fileComplaint" element={<FileComplaint />}/>
                <Route path="/sitemep" element={<Sitemap />} />
                <Route path="/subscription" element={<Subscription />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </div>


    )
}