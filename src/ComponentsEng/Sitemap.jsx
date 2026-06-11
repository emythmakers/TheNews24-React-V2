import React from 'react'
import { Link } from 'react-router-dom'
import { scrollTop } from './AllFunctions'
import FBpagePlugin from './FBpagePlugin'



export default function Sitemap() {
    return (
        <div className='page-bangla'>

            <main>
                <div className="container">
                    <div className="TopHomeSection"></div>
                    <title>সাইট ম্যাপ :: দ্য নিউজ ২৪</title>
                    <div className="SectionTitle"><h3><Link to="/sitemep" onClick={scrollTop}><span className="ColorBox"></span>সাইট ম্যাপ</Link></h3></div>
                    <div className='row mt-5'>
                        <div className='col-lg-8'>
                            <div className="policy-details">
                                <h1>আমাদের ওয়েবসাইটে সহজ নেভিগেশনের জন্য সাইট ম্যাপ প্রদান করা হয়েছে।</h1>
                                <h2>বিভাগসমূহ:</h2>
                                <div className="policy-list-area">
                                    <ul className='mb-3'>
                                        <li>জাতীয় খবর</li>
                                        <li>আন্তর্জাতিক</li>
                                        <li>অর্থনীতি</li>
                                        <li>ক্রীড়া</li>
                                        <li>বিনোদন</li>
                                        <li>মতামত</li>
                                        <li>বিজ্ঞাপন</li>
                                        <li>যোগাযোগ</li>
                                    </ul>
                                </div>
                                <p>সাইট ম্যাপের মাধ্যমে পাঠক সহজেই পছন্দের খবর খুঁজে পাবেন।</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <FBpagePlugin />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
