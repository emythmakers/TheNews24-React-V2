import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { scrollTop, banglaDateConvetar } from './AllFunctions'
import { getDate, getMonth, getYear } from 'bangla-calendar';
import ePper from '../assets/media/common/E_paper2.png'
import archive from '../assets/media/common/archive2.png'
import map from '../assets/media/common/Map2.png'
import moment from 'moment-hijri';
import axios from 'axios'
import Marquee from "react-fast-marquee";

const date1 = new Date();
let bnDate = getDate(date1, { format: 'D' })
let bnMonth = getMonth(date1, { format: 'MMMM' })
let bnYear = getYear(date1, { format: 'YYYY' })
let BNDATEs = bnDate + ' ' + bnMonth + ' ' + bnYear
const currentDate = moment().format('DD MMMM YYYY')
const currentDay = moment().format('dddd')
var arabicDate = moment().subtract(1, 'days').format('iDD iMMMM iYYYY');

var todaysDate = new Date();
todaysDate.setDate(todaysDate.getDate() - 1);


var navbar
var sticky = 0
var navbarMobile
var sticky2 = 0
export default function Header() {

    let navigate = useNavigate();
    const [scroll, setScroll] = useState([])
    const [breaking, setBreaking] = useState([])
    const [isSearchBoxActive, setIsSearchBoxActive] = useState(false);
    const [isToggleActive, setIsToggleActive] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // 2. Function to toggle the state.
    const toggleSubMenu = () => {
        setIsOpen(!isOpen);
    };

    // Assuming scrollTop is defined elsewhere
    const handleLinkClick = () => {
        setIsOpen(false); // Set the state to false to close the menu
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
    };


    // const [showSubCat, setShowSubCat] = useState(false);
    // const [showSubCat1, setShowSubCat1] = useState(false);
    // const [showSubCat2, setShowSubCat2] = useState(false);
    // const [showSubCat6, setShowSubCat6] = useState(false);
    // const [showSubCat7, setShowSubCat7] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', myFixedNav);
        navbar = document.getElementById("myHeader");
        navbarMobile = document.getElementById("myHeader2");

        const fetchData = async () => {
            try {
                const breakingRes = await axios.get(`${process.env.REACT_APP_API_URL}active-breaking`);
                const breakingData = breakingRes.data.breaking;
                setBreaking(breakingData);

                if (breakingData.length === 0) {
                    const scrollRes = await axios.get(`${process.env.REACT_APP_API_URL}json/file/generateActiveScroll.json`);
                    setScroll(scrollRes.data.data || []);
                }
            } catch (err) {
                console.error("Error loading breaking/scroll data", err);
            }
        };

        fetchData();
    }, []);


    function myFixedNav() {
        navbar = document.getElementById("myHeader");
        navbarMobile = document.getElementById("myHeader2");
        if (navbar) {
            if (window.pageYOffset > sticky) {
                navbar = document.getElementById("myHeader");
                navbar.classList.add("sticky");
            } else {
                navbar = document.getElementById("myHeader");
                navbar.classList.remove("sticky");
            }
        }
        if (navbarMobile) {
            if (window.pageYOffset > sticky2) {
                navbarMobile = document.getElementById("myHeader2");
                navbarMobile.classList.add("sticky2");
            } else {
                navbarMobile = document.getElementById("myHeader2");
                navbarMobile.classList.remove("sticky2");
            }
        }
    }

    function mobileHeader() {
        var x = document.getElementById("mobile-nav");
        var element2 = document.getElementById("closeBTN1");
        var element = document.getElementById("menuBTN1");
        if (x.style.display === "block") {
            x.style.display = "none";
            element2.classList.add('hide')
            element2.classList.remove('show')
            element.classList.add('show')
            element.classList.remove('hide')
        } else {
            x.style.display = "block";
            element2.classList.add('show')
            element2.classList.remove('hide')
            element.classList.add('hide')
            element.classList.remove('show')
        }
    }

    function mobileHeaderSearch(e) {
        e.preventDefault();
        var searchWeb = document.getElementById("deskSearch");
        if (searchWeb.style.display === "none") {
            searchWeb.style.display = "block";
        } else {
            searchWeb.style.display = "none";
        }
        var searchMobile = document.getElementById("mobileSearchBar");
        if (searchMobile.style.display === "none") {
            searchMobile.style.display = "block";
        } else {
            searchMobile.style.display = "none";
        }
    }

    const handelSubmit = (e) => {
        e.preventDefault();
        const txt = e.target.q.value;
        navigate('/search/' + txt)
    }

    return (
        <>
            <header className="header-area">
                <div className="header-top d-none d-lg-block">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 d-flex align-items-center">
                                <div className="header-date">
                                    <i className="fas fa-calendar"></i>&nbsp;{banglaDateConvetar(currentDay)}, {banglaDateConvetar(currentDate)}, {BNDATEs}
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex align-items-center justify-content-end">
                                <div className="live-icon">
                                    <Link to="/live" onClick={scrollTop}><i className="fa-solid fa-play"></i><span>LIVE</span></Link>
                                </div>
                                <div className="header-social-icon">
                                    <a href="https://www.facebook.com/thenews24digital/" target="_blank"  rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="#" target="_blank"  rel="noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
                                    <a href="#" target="_blank"  rel="noreferrer"><i className="fa-brands fa-x-twitter"></i></a>
                                    <a href="#" target="_blank"  rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="https://www.youtube.com/@thenewsdhaka/" target="_blank"  rel="noreferrer"><i className="fa-brands fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-bootom" id="myHeader">
                    <div className="main-menu d-none d-lg-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <nav className="navbar navbar-expand-lg navbar-light">
                                        <div className="container-fluid">
                                            <a className="navbar-brand" href="/">
                                                <div className="logo">
                                                    <img className="img-fluid" src={process.env.REACT_APP_DOMAIN_URL + "media/common/logo.gif"} alt="The News 24 || দ্য নিউজ ২৪" title="The News 24 || দ্য নিউজ ২৪" />
                                                    {/* <img className="img-fluid" src={process.env.REACT_APP_DOMAIN_URL + "media/common/logo.png"} alt="The News 24 || দ্য নিউজ ২৪" title="The News 24 || দ্য নিউজ ২৪" /> */}
                                                </div>
                                            </a>
                                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                                aria-label="Toggle navigation">
                                                <span className="navbar-toggler-icon"></span>
                                            </button>
                                            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                                                <ul className="navbar-nav">
                                                    <li className="nav-item">
                                                        <Link className="nav-link" onClick={scrollTop} to="/national">জাতীয়</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" onClick={scrollTop} to="/politics">রাজনীতি</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" onClick={scrollTop} to="/international">আন্তর্জাতিক</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" onClick={scrollTop} to="/country">সারাদেশ</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" onClick={scrollTop} to="/crime">অপরাধ</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" onClick={scrollTop} to="/trade">বাণিজ্য</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" onClick={scrollTop} to="/entertainment">বিনোদন</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" onClick={scrollTop} to="/sports">খেলাধুলা</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" onClick={scrollTop} to="/lifestyle">জীবনযাপন</Link>
                                                    </li>
                                                    <li className="nav-item">
                                                        <Link className="nav-link" onClick={scrollTop} to="/opinion">মতামত</Link>
                                                    </li>

                                                    <li className="nav-item dropdown">
                                                        <Link className="nav-link dropdown-toggle" to="#" onClick={scrollTop} data-bs-toggle="dropdown" aria-expanded="false">অন্যান্য</Link>
                                                        <div className="dropdown-menu megamenu" role="menu" >
                                                            <div className="container">
                                                                <div className="row gx-3">
                                                                    <div className="col-md-3" style={{ flex: "0 0 20%", maxWidth: "20%" }}>
                                                                        <ul className="nav flex-column">
                                                                            <li><Link className="dropdown-item" to="/court-law" onClick={scrollTop}>আইন ও
                                                                                বিচার</Link></li>
                                                                            <li><Link className="dropdown-item" to="/education" onClick={scrollTop}>শিক্ষা</Link>
                                                                            </li>
                                                                            <li><Link className="dropdown-item"
                                                                                to="/motivation" onClick={scrollTop}>অনুপ্রেরণা</Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-md-3" style={{ flex: "0 0 20%", maxWidth: "20%" }}>
                                                                        <ul className="nav flex-column">
                                                                            <li><Link className="dropdown-item" to="/jobs" onClick={scrollTop}>চাকরি</Link></li>
                                                                            <li><Link className="dropdown-item" to="/health" onClick={scrollTop}>স্বাস্থ্য</Link>
                                                                            </li>
                                                                            <li><Link className="dropdown-item" to="/photo-feature" onClick={scrollTop}>ছবিঘর</Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-md-3" style={{ flex: "0 0 20%", maxWidth: "20%" }}>
                                                                        <ul className="nav flex-column">
                                                                            <li><Link className="dropdown-item" to="/technology" onClick={scrollTop}>তথ্য
                                                                                প্রযুক্তি</Link>
                                                                            </li>
                                                                            <li><Link className="dropdown-item" to="/environment-and-climate" onClick={scrollTop}>পরিবেশ ও
                                                                                জলবায়ু</Link>
                                                                            </li>
                                                                            <li><Link className="dropdown-item" to="/agriculture" onClick={scrollTop}>কৃষি</Link> </li>

                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-md-3" style={{ flex: "0 0 20%", maxWidth: "20%" }}>
                                                                        <ul className="nav flex-column">

                                                                            <li><Link className="dropdown-item" to="/the-news-special" onClick={scrollTop}>দ্য
                                                                                নিউজ স্পেশাল</Link></li>
                                                                            <li><Link className="dropdown-item" to="/reader-s-news" onClick={scrollTop}>পাঠকের
                                                                                সংবাদ</Link></li>
                                                                            <li><Link className="dropdown-item" to="/video" onClick={scrollTop}>ভিডিও</Link></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div className="col-md-3" style={{ flex: "0 0 20%", maxWidth: "20%" }}>
                                                                        <ul className="nav flex-column">

                                                                            <li><Link className="dropdown-item" to="/archives" onClick={scrollTop}>আর্কাইভ</Link>
                                                                            </li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>

                                                    <li className="nav-item search-sticky">
                                                        <div className="search-btn" >
                                                            <span className="icon-wrap">
                                                                <span className={`search-input ${isSearchBoxActive ? 'search-box' : ''}`} >
                                                                    <form onSubmit={handelSubmit} action="/search" method="get">
                                                                        <span className="srch-close-btn" onClick={() => setIsSearchBoxActive(false)}><i
                                                                            className="far fa-times-circle"></i></span>
                                                                        <input type="text" name="q" className="form-control" aria-describedby="button-addon3"
                                                                            id="search-terms" placeholder="লিখুন..." />
                                                                        <button type="submit" id="button-addon3"
                                                                            className="btn srch-sub-btn" aria-label="submit">খুঁজুন</button>
                                                                    </form>
                                                                </span>
                                                                <Link className="nav-link search-button" to="#"> <i className="fas fa-search" onClick={() => setIsSearchBoxActive(true)}></i>
                                                                </Link>
                                                            </span>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div className="header-extra-wrap">
                                                    <div className="extr">
                                                        <a href="#"> <img src={ePper} alt="ই-পেপার" title='ই-পেপার' />ই-পেপার</a>
                                                        <Link to="/archives" onClick={scrollTop}> <img src={archive} alt="আর্কাইভ" title='আর্কাইভ' />আর্কাইভ</Link>
                                                        <a className="languBn
                                                        " href="/"> <img src={map}
                                                            alt="English" title='English' />বাংলা</a>
                                                    </div>
                                                    <div className="header-search">
                                                        <form onSubmit={handelSubmit} action="/search" method="get">
                                                            <div className="input-group">
                                                                <input type="text" name="q" className="form-control"
                                                                    aria-label="Recipient's username"
                                                                    aria-describedby="basic-addon2" />
                                                                <div className="header-search-icon">
                                                                    <i className="fa-solid fa-magnifying-glass"></i>
                                                                </div>
                                                                <button className="input-group-text" type="submit" aria-label="submit" id="basic-addon2">খুঁজুন</button>
                                                            </div>
                                                        </form>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* marquee section */}
                    <div className="DScroll d-none d-lg-block">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 m-auto">
                                    {breaking.length > 0 ?
                                        <div className="DScrollSection">
                                            <div className="ScrollHeading d-flex align-items-center">
                                                <p>ব্রেকিং নিউজ:</p>
                                            </div>
                                            <div className="ScrollSubject">
                                                <Marquee Marquee delay='0' speed='70' direction="left" pauseOnHover={true} play={true}>
                                                    {breaking.map((nd) => {
                                                        return (
                                                            <React.Fragment key={nd.BreakingID}>
                                                                <a href={nd.ScrollUrl === null ? '/' : nd.ScrollUrl} onClick={scrollTop}><span><div className="SquareIcon">*</div>{nd.BreakingHead}</span></a>
                                                            </React.Fragment>
                                                        )
                                                    })}
                                                </Marquee>
                                            </div>
                                        </div>
                                        :
                                        <>
                                            {scroll.length > 0 ?
                                                <div className="DScrollSection">
                                                    <div className="ScrollHeading d-flex align-items-center">
                                                        <p>শিরোনাম:</p>
                                                    </div>
                                                    <div className="ScrollSubject">
                                                        <Marquee delay='0' speed='70' direction="left" pauseOnHover={true} play={true}>
                                                            {scroll.map((nd) => {
                                                                return (
                                                                    <React.Fragment key={nd.ScrollID}>
                                                                        <a href={nd.ScrollUrl === null ? '/' : nd.ScrollUrl} onClick={scrollTop}><span><div className="SquareIcon">*</div>{nd.ScrollHead}</span></a>
                                                                    </React.Fragment>
                                                                )
                                                            })}
                                                        </Marquee>
                                                    </div>
                                                </div> : false
                                            }
                                        </>}

                                </div>
                            </div>
                        </div>
                    </div>
                  
                    {/* <!--mobile-navbar-part-start--> */}
                    <div className="mobile-menu-area d-block d-lg-none hide" id="myHeader2">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="mobile-topbar">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="bars" onClick={() => setIsToggleActive(true)}>
                                                <i className="fas fa-bars"></i>
                                            </div>
                                            <div className="logo">
                                                <a href="/">
                                                    <img className="img-fluid" src={process.env.REACT_APP_DOMAIN_URL + "media/common/logo.gif"} alt="The News 24 || দ্য নিউজ ২৪" title="The News 24 || দ্য নিউজ ২৪" />
                                                </a>
                                            </div>
                                            <div className="search-btn">
                                                <span className="icon-wrap">
                                                    <span className={`search-input ${isSearchBoxActive ? 'search-box' : ''}`}>
                                                        <form onSubmit={handelSubmit} action="/search" method="get">
                                                            <span className="srch-close-btn" onClick={() => setIsSearchBoxActive(false)}><i className="far fa-times-circle"></i></span>
                                                            <input type="text" name="q" className="form-control" placeholder="লিখুন..." />
                                                            <button type="submit" className="btn srch-sub-btn" >খুঁজুন</button>
                                                        </form>
                                                    </span>
                                                    <Link className="nav-link search-button" to={"#"} onClick={() => setIsSearchBoxActive(true)}>
                                                        <i className="fas fa-search"></i>
                                                    </Link>
                                                </span>

                                            </div>
                                        </div>
                                    </div>
                                    <div className={`mobile-menu-overlay ${isToggleActive ? 'active' : ''}`}></div>
                                    <div className={`mobile-menu-main ${isToggleActive ? 'active' : ''}`}>
                                        <a href="/">
                                            <div className="logo">
                                                {/* <img className="img-fluid" src={process.env.REACT_APP_DOMAIN_URL + "media/common/logo.png"} alt="The News 24 || দ্য নিউজ ২৪" title="The News 24 || দ্য নিউজ ২৪" /> */}
                                                <img className="img-fluid" src={process.env.REACT_APP_DOMAIN_URL + "media/common/logo.gif"} alt="The News 24 || দ্য নিউজ ২৪" title="The News 24 || দ্য নিউজ ২৪" />
                                            </div>
                                        </a>
                                        <div className="close-mobile-menu" onClick={() => setIsToggleActive(false)}><i className="fas fa-times"></i></div>
                                        <div className="header-extra-wrap">
                                            <div className="extr">
                                                <a href="#"> <img src="media/imgAll/icon/E_paper2.png" alt="" />ই-পেপার</a>
                                                <Link to="/archives" onClick={() => setIsToggleActive(false)} > <img src="media/imgAll/icon/archive2.png" alt="" onClick={scrollTop} />আর্কাইভ</Link>
                                                <a className="languBn" href="/"> <img src="media/imgAll/icon/Map2.png" alt="" />বাংলা</a>
                                            </div>
                                        </div>
                                        <div className="menu-body">
                                            <div className="menu-list">
                                                <ul className="list-unstyled">
                                                    <li className="sub-mobile-menu" onClick={() => setIsToggleActive(false)} >
                                                        <div className="sub-menu-mobile-link">
                                                            <Link to="/national" onClick={scrollTop}>জাতীয়</Link>
                                                        </div>
                                                    </li>
                                                    <li className="sub-mobile-menu" onClick={() => setIsToggleActive(false)} >
                                                        <div className="sub-menu-mobile-link">
                                                            <Link to="/politics" onClick={scrollTop} >রাজনীতি</Link>
                                                        </div>
                                                    </li>
                                                    <li className="sub-mobile-menu" onClick={() => setIsToggleActive(false)}>
                                                        <div className="sub-menu-mobile-link">
                                                            <Link to="/international" onClick={scrollTop}> আন্তর্জাতিক </Link>
                                                        </div>
                                                    </li>
                                                    <li className="sub-mobile-menu" onClick={() => setIsToggleActive(false)}>
                                                        <div className="sub-menu-mobile-link">
                                                            <Link to="/country~" onClick={scrollTop}> সারাদেশ </Link>
                                                        </div>
                                                    </li>
                                                    <li className="sub-mobile-menu" onClick={() => setIsToggleActive(false)}>
                                                        <div className="sub-menu-mobile-link">
                                                            <Link to="/entertainment" onClick={scrollTop}>বিনোদন</Link>
                                                        </div>
                                                    </li>
                                                    <li className="sub-mobile-menu" onClick={() => setIsToggleActive(false)}>
                                                        <div className="sub-menu-mobile-link">
                                                            <Link to="/trade" onClick={scrollTop}> বাণিজ্য </Link>
                                                        </div>
                                                    </li>
                                                    <li className="sub-mobile-menu" onClick={() => setIsToggleActive(false)}>
                                                        <div className="sub-menu-mobile-link">
                                                            <Link to="/sports" onClick={scrollTop}>খেলাধুলা</Link>
                                                        </div>
                                                    </li>
                                                    <li className="sub-mobile-menu" onClick={() => setIsToggleActive(false)}>
                                                        <div className="sub-menu-mobile-link">
                                                            <Link to="/opinion" onClick={scrollTop}>মতামত</Link>
                                                        </div>
                                                    </li>
                                                    <li className="sub-mobile-menu" onClick={() => setIsToggleActive(false)}>
                                                        <div className="sub-menu-mobile-link">
                                                            <Link to="/crime" onClick={scrollTop}>অপরাধ</Link>
                                                        </div>
                                                    </li>
                                                    <li className={`sub-mobile-menu ${isOpen ? 'open' : ''}`}>
                                                        <div className="sub-menu-mobile-link">
                                                            <Link to="#" onClick={scrollTop}>অন্যান্য</Link>
                                                            <span className="accordion-click" onClick={toggleSubMenu}> <i className={isOpen ? "fas fa-angle-up" : "fas fa-angle-down"}></i></span>
                                                        </div>
                                                        <ul className="list-unstyled" style={{ display: isOpen ? 'block' : 'none' }}>
                                                            <li onClick={() => setIsToggleActive(false)}>
                                                                <Link to="/court-law" onClick={scrollTop}>আইন ও বিচার</Link>
                                                            </li>
                                                            <li onClick={() => setIsToggleActive(false)}>
                                                                <Link to="/education" onClick={scrollTop}>শিক্ষা</Link>
                                                            </li>
                                                            <li onClick={() => setIsToggleActive(false)}>
                                                                <Link to="/motivation" onClick={scrollTop}>অনুপ্রেরণা</Link>
                                                            </li>
                                                            <li onClick={() => setIsToggleActive(false)}>
                                                                <Link to="/jobs" onClick={scrollTop}>চাকরি</Link>
                                                            </li>
                                                            <li onClick={() => setIsToggleActive(false)}>
                                                                <Link to="/health" onClick={scrollTop}>স্বাস্থ্য</Link>
                                                            </li>
                                                            <li onClick={() => setIsToggleActive(false)}>
                                                                <Link to="/photo-feature" onClick={scrollTop}>ছবিঘর</Link>
                                                            </li>
                                                            <li onClick={() => setIsToggleActive(false)}>
                                                                <Link to="/technology" onClick={scrollTop}>তথ্য প্রযুক্তি</Link>
                                                            </li>
                                                            <li onClick={() => setIsToggleActive(false)}>
                                                                <Link to="/environment-and-climate" onClick={scrollTop}>পরিবেশ ও জলবায়ু</Link>
                                                            </li>
                                                            <li onClick={() => setIsToggleActive(false)}>
                                                                <Link to="/lifestyle" onClick={scrollTop}>জীবনযাপন</Link>
                                                            </li>
                                                            <li onClick={() => setIsToggleActive(false)}>
                                                                <Link to="/agriculture" onClick={scrollTop}>কৃষি</Link>
                                                            </li>
                                                            <li onClick={() => setIsToggleActive(false)}>
                                                                <Link to="/the-news-special" onClick={scrollTop}>দ্য নিউজ স্পেশাল</Link>
                                                            </li>
                                                            <li onClick={() => setIsToggleActive(false)}>
                                                                <Link to="/archives" onClick={scrollTop}>আর্কাইভ</Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="social-icon">
                                            <ul className="list-unstyled">
                                                <li><a href="https://www.facebook.com/thenews24digital/" target="_blank"  rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a></li>
                                                <li><a href="#" target="_blank"  rel="noreferrer"><i className="fa-brands fa-whatsapp"></i></a></li>
                                                <li><a href="#" target="_blank" rel="noreferrer" ><i className="fa-brands fa-x-twitter"></i></a></li>
                                                <li><a href="#" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                                                <li><a href="https://www.youtube.com/@thenewsdhaka/" target="_blank" rel="noreferrer"><i className="fa-brands fa-youtube"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!--mobile-navbar-part-end--> */}
                </div>
            </header>
        </>
    )
}
