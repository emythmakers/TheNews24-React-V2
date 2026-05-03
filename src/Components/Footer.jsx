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
                                        <p><a href="#" target="_blank" rel="noreferrer" >কর্পোরেট অফিস: বাড়ি : ২১ (৮ তলা), <br /> ব্লক : এ, রোড : ০১, মহানগর প্রজেক্ট, হাতিরঝিল, ঢাকা-১২১৯ ৷</a></p>
                                        <p>ফোন:<a href="tel:+৮৮০৯৬১১১৭১৯৮০">+৮৮০৯৬১১১৭১৯৮০</a>
                                            {/* ,<a href="tel:+৮৮০১৩৩২৫০২৩০০">+৮৮০১৩৩২৫০২৩০০</a> */}
                                        </p>
                                        <p>ই-মেইল:<a href="mailto:hello@thenews24.com">hello@thenews24.com </a>,<a href="mailto:info@thenews24.com">info@thenews24.com</a></p>
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
                                    <li><Link onClick={scrollTop} to="/the-news">দ্য নিউজ</Link></li>
                                    <li><Link onClick={scrollTop} to="/aboutUs">আমাদের সম্পর্কে</Link></li>
                                    <li><Link onClick={scrollTop} to="/contact-us">যোগাযোগ করুন</Link></li>
                                    <li><Link onClick={scrollTop} to="/advertise">বিজ্ঞাপন দিন</Link></li>
                                    <li><Link onClick={scrollTop} to="/editorial-policy">সম্পাদকীয় নীতি</Link></li>
                                    <li><Link onClick={scrollTop} to="/privacy-policy">গোপনীয়তা নীতি</Link></li>
                                    <li><Link onClick={scrollTop} to="/terms-service">শর্তাবলী</Link></li>
                                    <li><Link onClick={scrollTop} to="/copyright">কপিরাইট নীতি</Link></li>
                                    <li><Link onClick={scrollTop} to="/reader-right">পাঠকের অধিকার</Link></li>
                                    <li><Link onClick={scrollTop} to="/fileComplaint">অভিযোগ দায়ের</Link></li>
                                    <li><Link onClick={scrollTop} to="/sitemep">সাইট ম্যাপ</Link></li>
                                    <li><Link onClick={scrollTop} to="/subscription">সাবস্ক্রিপশন</Link></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="DFooterBottomBg">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center">
                                <p><span className="En"></span> &copy; {toBengaliNumber(years)} | <a href="/"> দ্য নিউজ ২৪ ডটকম</a>।
                                    সর্বসত্ব ® সংরক্ষিত। রেজি. নং: ২৪৬ । প্রতিষ্ঠাতা ও প্রধান নির্বাহী: মো. আনোয়ারুল ইসলাম । উন্নয়নে:<a href="https://www.emythmakers.com/" target="_blank" rel="noreferrer">
                                        ইমিথমেকারস</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>


        </>
    )
}
