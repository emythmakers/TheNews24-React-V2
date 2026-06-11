import React from 'react'
import { Link } from 'react-router-dom'
import { scrollTop } from '../Components/AllFunctions'
import FBpagePlugin from './FBpagePlugin'
// import LeadLatestNews from './HomeContent/LeadLatestNews'



export default function PrivacyPolicy() {
    return (
        <div className='page-bangla'>
            <main>
                <div className="container">
                    <div className="TopHomeSection"></div>
                    <title>গোপনীয়তা নীতি :: দ্য নিউজ ২৪</title>
                    <div className="SectionTitle"><h3><Link to="/privacy-policy" onClick={scrollTop}><span className="ColorBox"></span>গোপনীয়তা নীতি</Link></h3></div>

                    <div className='row mt-5 '>
                        <div className='col-lg-8'>
                            <div className="policy-details">
                                <h1>আমাদের পাঠকদের গোপনীয়তা আমাদের কাছে অত্যন্ত গুরুত্বপূর্ণ। “দ্য নিউজ” সবসময় সচেষ্ট থাকে যেন পাঠকের ব্যক্তিগত তথ্য কোনোভাবেই অপব্যবহার না হয়।</h1>
                                <h2>তথ্য সংগ্রহ:</h2>
                                <div className='policy-list'>
                                    <p>আমরা শুধুমাত্র প্রয়োজনীয় তথ্য সংগ্রহ করি—যেমন নাম, ইমেইল বা সাবস্ক্রিপশন সংক্রান্ত তথ্য। কোনো অপ্রয়োজনীয় ব্যক্তিগত তথ্য আমরা রাখি না।</p>
                                </div>
                                <div className="policy-list-area">
                                <ul>
                                    <li>তথ্য ব্যবহার</li>
                                    <li>নিউজলেটার বা সাবস্ক্রিপশন পরিষেবা দিতে</li>
                                    <li>পাঠকের সাথে যোগাযোগ করতে</li>
                                    <li>ওয়েবসাইটের মান উন্নত করতে</li>
                                </ul>
                                </div>
                                <h2>তথ্য সুরক্ষা:</h2>
                                <p>আমরা আধুনিক প্রযুক্তি ব্যবহার করে তথ্য সুরক্ষিত রাখি। কোনোভাবেই তৃতীয় পক্ষের কাছে পাঠকের তথ্য বিক্রি করা হয় না।</p>
                                <p>আমরা প্রতিশ্রুতিবদ্ধ—আপনার গোপনীয়তা আমাদের অঙ্গীকার।</p>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <FBpagePlugin />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
