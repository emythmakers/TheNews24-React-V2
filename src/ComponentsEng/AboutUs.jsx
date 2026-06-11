import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { scrollTop, ForLazyLoaderImg, banglaDateConvetar } from './AllFunctions'
import FBpagePlugin from './FBpagePlugin'
import axios from 'axios'

var lazyloaded = false
export default function AboutUs() {
    const [state, setState] = useState([])
    const [state2, setState2] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}team-members`)
            .then(({ data }) => {
                if (data.length > 0) {
                    setState(data[0]);
                    setState2(data.slice(1));
                    setTimeout(function () {
                        lazyloaded = false
                        ForLazyLoaderImg(lazyloaded)
                    }, 1000);
                }
            });
    }, [])

    return (
        <div className='page-bangla'>

            <main>
                <div className="container">
                    <div className="TopHomeSection"></div>
                    <title>আমাদের সম্পর্কে :: দ্য নিউজ ২৪</title>
                    <div className="SectionTitle"><h3><Link to="/the-news" onClick={scrollTop}><span className="ColorBox"></span>আমাদের সম্পর্কে</Link></h3></div>
                    {/* the news about us section */}
                    <div className='row mt-4'>
                        <div className='col-lg-8 col-12'>
                            <div className="news-details">
                                <p>একটি সংবাদমাধ্যমের প্রাণশক্তি হলো তার পাঠক ও তার নীতি। আমরা বিশ্বাস করি, সাংবাদিকতা কেবল তথ্য পরিবেশন নয়, বরং এটি একটি দায়িত্ব—সত্যের অনুসন্ধান, স্বচ্ছতার চর্চা এবং জনগণের জানার অধিকার নিশ্চিত করা। “দ্য নিউজ” প্রতিষ্ঠিত হয়েছে এই দর্শন নিয়ে যে, সত্যের পক্ষে নিরপেক্ষ কণ্ঠস্বর হতে হবে।</p>
                                <div className="news-area">
                                    <h3>প্রতিষ্ঠার ইতিহাস:</h3>
                                    <p>ডিজিটাল যুগে খবরের গতি বেড়ে গেছে, কিন্তু তার সঙ্গে বেড়েছে বিভ্রান্তি ও গুজবের প্রসার। এই পরিস্থিতিতে একদল উদ্যমী সাংবাদিক, গবেষক ও প্রযুক্তিবিদ একত্রিত হয়ে একটি নির্ভরযোগ্য প্ল্যাটফর্ম গড়ে তোলেন, যার নাম “দ্য নিউজ”। আমরা বিশ্বাস করি—পাঠককে সঠিক তথ্য দেওয়া মানেই তাদেরকে ক্ষমতায়ন করা।</p>
                                    <h3>আমাদের উদ্দেশ্য:</h3>
                                    <p>আমাদের উদ্দেশ্য তিনটি স্তম্ভের উপর দাঁড়িয়ে—</p>
                                    <ul>
                                        <ol>১. সত্য : আমরা প্রতিটি সংবাদকে তথ্য-ভিত্তিক ও যাচাই করা অবস্থায় প্রকাশ করি।</ol>
                                        <ol>২. দায়িত্বশীলতা : সমাজের প্রতি আমাদের দায়বদ্ধতা অপরিসীম। কোনো সংবাদ যেন কাউকে অযথা ক্ষতিগ্রস্ত না করে, সে বিষয়ে আমরা সতর্ক।</ol>
                                        <ol>৩. স্বচ্ছতা : সম্পাদকীয় নীতি ও কার্যপদ্ধতি পাঠকের কাছে উন্মুক্ত রাখা।</ol>
                                    </ul>
                                    <h3>আমাদের টিম:</h3>
                                    <p>আমাদের দলে আছেন অভিজ্ঞ সিনিয়র সাংবাদিক, তরুণ রিপোর্টার, গবেষক, ভিডিও এডিটর ও প্রযুক্তি বিশেষজ্ঞ। প্রতিটি সংবাদ সংগ্রহ হয় মাঠপর্যায়ে গিয়ে, তারপর তা সম্পাদকীয় ডেস্কে যাচাই হয়ে প্রকাশিত হয়।</p>
                                    <h3>কাজের ক্ষেত্র:</h3>
                                    <p>আমরা কাজ করি জাতীয় রাজনীতি, অর্থনীতি, আন্তর্জাতিক বিষয়াবলি, ক্রীড়া, বিনোদন, বিজ্ঞান, প্রযুক্তি ও পরিবেশসহ বহুমাত্রিক ক্ষেত্রে। বিশেষ করে আমরা এমন বিষয়গুলিকে গুরুত্ব দিই যেগুলো সাধারণ মানুষের জীবন ও ভবিষ্যতের সাথে জড়িত।</p>
                                    <h3>বিশেষ বৈশিষ্ট্য:</h3>
                                    <p>দ্রুত সংবাদ পরিবেশনের পাশাপাশি বিশ্লেষণধর্মী প্রতিবেদন</p>
                                    <p>ভিজ্যুয়াল কনটেন্ট যেমন ছবি, ইনফোগ্রাফিক ও ভিডিও</p>
                                    <p>পাঠকের জন্য সহজ নেভিগেশন ও ব্যবহারবান্ধব ওয়েবসাইট</p>
                                    <p>সর্বাধুনিক প্রযুক্তি ব্যবহারের মাধ্যমে সংবাদ পরিবেশন</p>
                                    <h3>আমাদের প্রতিশ্রুতি:</h3>
                                    <p>আমরা প্রতিশ্রুতিবদ্ধ—</p>
                                    <p>কোনো ভুয়া খবর পরিবেশন করব না</p>
                                    <p>পাঠকের মতামতকে সম্মান করব</p>
                                    <p>ভুল হলে দ্রুত সংশোধন করব</p>
                                    <p>বিজ্ঞাপন বা চাপের কাছে নীতিগতভাবে আপস করব না</p>
                                    <h3>সামাজিক অবদান:</h3>
                                    <p>আমাদের কাজ শুধুমাত্র সংবাদ প্রকাশ নয়। আমরা সামাজিক ইস্যুতে জনসচেতনতা তৈরি করি। যেমন: পরিবেশ রক্ষা, নারী অধিকার, শিক্ষা ও স্বাস্থ্যসেবায় ইতিবাচক পরিবর্তনের পক্ষে আমরা ধারাবাহিক প্রতিবেদন করি।</p>
                                    <h3>ভবিষ্যৎ পরিকল্পনা:</h3>
                                    <p>ভবিষ্যতে আমরা “দ্য নিউজ”-কে আরও আন্তর্জাতিক মানের ডিজিটাল প্ল্যাটফর্মে রূপ দিতে চাই। নতুন প্রযুক্তি, বিশেষ করে ডাটা জার্নালিজম ও কৃত্রিম বুদ্ধিমত্তা ব্যবহার করে আমরা সংবাদকে আরও প্রাণবন্ত ও নির্ভুল করতে চাই।</p>
                                    <p>“আমাদের সম্পর্কে” জানতে গিয়ে পাঠক বুঝতে পারবেন যে “দ্য নিউজ” শুধুমাত্র একটি ওয়েবসাইট নয়, এটি একটি প্রতিশ্রুতি—সত্য, দায়িত্ব ও নিরপেক্ষতার প্রতিশ্রুতি।</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <FBpagePlugin />
                        </div>
                    </div>
                    {/* team members */}
                    <section className='about-us-sec'>
                    <div className="SectionTitle"><h3><Link to="/the-news" onClick={scrollTop}><span className="ColorBox"></span>আমাদের টিম মেম্বার</Link></h3></div>
                        <div className="about-us-area2 mt-4">
                            {/* <Link to='/' key={state.id} onClick={scrollTop}> */}
                                <div className="about-img">
                                    <img src={'/media/common/profile.png'} data-src={process.env.REACT_APP_DOMAIN_URL + state.image} alt={state.name} title={state.name} className="img-fluid  " />
                                </div>
                                <div className="about-us-desc">
                                    <h3 className="Title">{state.name}</h3>
                                    <p className='design'>{state.designation}</p>
                                    <p className='design'>কর্মচারী আইডি : {banglaDateConvetar(state.id)}  </p>
                                </div>

                            {/* </Link> */}
                        </div>
                        <div className="row">
                            {state2.map((nc) => {
                                return (
                                    <div className="col-lg-3 col-6">
                                        <div className="about-us-area">
                                            {/* <Link to='/' key={nc.id} onClick={scrollTop} > */}
                                                <div className="about-img">
                                                    <img src={'/media/common/profile.png'} data-src={process.env.REACT_APP_DOMAIN_URL + nc.image} alt={nc.name} title={nc.name} className="img-fluid " />
                                                </div>
                                                <div className="about-us-desc">
                                                    <h3 className="Title">{nc.name}</h3>
                                                    <p className='design'>{nc.designation}</p>
                                                    <p className='design'>কর্মচারী আইডি : {banglaDateConvetar(nc.id)} </p>
                                                </div>

                                            {/* </Link> */}

                                        </div>
                                    </div>
                                )
                            })}
                        </div>


                    </section>

                </div>
            </main>
        </div>
    )
}
