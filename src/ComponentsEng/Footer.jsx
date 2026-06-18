import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { scrollTop } from './AllFunctions';
import { Link } from 'react-router-dom';

const { toBengaliNumber } = require('bengali-number');

const years = new Date().getFullYear()
export default function Footer() {
    const [scroll, setScroll] = useState([])
    const [breaking, setBreaking] = useState([])
    const [ticker, setTicker] = useState(false)
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}active-breaking`)
            .then(({ data }) => {
                setBreaking(data.breaking);
                if (data.breaking.length <= 0) {
                    axios
                        .get(`${process.env.REACT_APP_API_URL}json/file/generateActiveScroll.json`)
                        .then(({ data }) => {
                            setScroll(data.data);
                            if (data.data.length > 0) {
                                setTicker(true)
                            }
                        });
                }
                else {
                    setTicker(true)
                }
            });
    }, [])
    return (
        <>
            <footer className="footer-area">
                <div className="DFooterBg">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6  border-right-inner">
                                <div className="footer-info">
                                    <div className="footer-logo">
                                        <a href="/">
                                            <img className="img-fluid" src={process.env.REACT_APP_DOMAIN_URL + "media/common/logo.gif"} alt="The News 24 || দ্য নিউজ ২৪" title="The News 24 || দ্য নিউজ ২৪" />
                                        </a>
                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 d-flex justify-content-md-center justify-content-start border-right-inner">
                                <div className="footer-info">
                                    <address className="address">
                                        <p><a href="#" target="_blank" rel="noreferrer" >Corporate Office : 21 (8th Floor), <br /> Block : A, Road : 01, Mahanagar Project, Hatirjheel, Dhaka-1219. ৷</a></p>
                                        <p>Phone:<a href="tel:+8809611171980">+8809611171980</a>
                                            {/* ,<a href="tel:+৮৮০১৩৩২৫০২৩০০">+৮৮০১৩৩২৫০২৩০০</a> */}
                                        </p>
                                        <p>E-mail:<a href="mailto:hello@thenews24.com">hello@thenews24.com </a>,<a href="mailto:info@thenews24.com">info@thenews24.com</a></p>
                                    </address>
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-4 col-md-6 d-flex justify-content-md-center justify-content-start align-items-center">
                                <div>
                                    <div className="FooterSocialIcon mt-3">
                                        <a className="twitter" href="#" target="_blank" rel="noreferrer"><i className="fa-brands fa-x-twitter"></i></a>
                                        <a className="facebook" href="https://www.facebook.com/thenews24digital/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                                        <a className="youtube" href="https://www.youtube.com/@thenewsdhaka/" target="_blank"><i className="fa-brands fa-youtube"></i></a>
                                        <a className="instagram" href="#" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                                        <a className="whatsapp" href="#" target="_blank" rel="noreferrer"><i className="fa-brands fa-whatsapp"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="DFooterMiddleListBg">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <ul className="DFooterMiddleListItems">
                                    <li><Link onClick={scrollTop} to="/the-news">The News</Link></li>
                                    <li><Link onClick={scrollTop} to="/aboutUs">About Us</Link></li>
                                    <li><Link onClick={scrollTop} to="/contact-us">Contact Us</Link></li>
                                    <li><Link onClick={scrollTop} to="/advertise">Advertisement</Link></li>
                                    <li><Link onClick={scrollTop} to="/editorial-policy">Editorial Policy</Link></li>
                                    <li><Link onClick={scrollTop} to="/privacy-policy">Privacy Policy</Link></li>
                                    <li><Link onClick={scrollTop} to="/terms-service">Terms Service</Link></li>
                                    <li><Link onClick={scrollTop} to="/copyright">Copyright</Link></li>
                                    <li><Link onClick={scrollTop} to="/reader-right">Reader Right</Link></li>
                                    <li><Link onClick={scrollTop} to="/fileComplaint">File Complaint</Link></li>
                                    <li><Link onClick={scrollTop} to="/sitemep">Sitemap</Link></li>
                                    <li><Link onClick={scrollTop} to="/subscription">Subscription</Link></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="DFooterBottomBg">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <p><span className="En"></span> &copy; {years} | <a href="/"> The News 24.com</a>।
                                All Rights Reserved.®। Registration No.: 246. । Founder & Chief Executive Officer: <b> Md. Anwarul Islam</b> । Developed by: <a href="https://www.emythmakers.com/" target="_blank" rel="noreferrer">
                                        Emythmaker</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}
