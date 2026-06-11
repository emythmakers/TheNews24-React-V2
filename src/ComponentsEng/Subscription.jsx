import React from 'react'
import { Link } from 'react-router-dom'
import { scrollTop } from './AllFunctions'
import FBpagePlugin from './FBpagePlugin'

export default function Subscription() {
    return (
        <div className='page-bangla'>
            <main>
                <div className="container">
                    <div className="TopHomeSection"></div>
                    <title>সাবস্ক্রিপশন :: দ্য নিউজ ২৪</title>
                    <div className="SectionTitle"><h3><Link to="/subscription" onClick={scrollTop}><span className="ColorBox"></span>সাবস্ক্রিপশন</Link></h3></div>
                    <div className='row mt-5'>
                        <div className='col-lg-8'>
                            <div className="policy-details">
                                <h1>বিশেষ কনটেন্ট, বিজ্ঞাপনহীন অভিজ্ঞতা এবং এক্সক্লুসিভ রিপোর্টের জন্য আমাদের সাবস্ক্রিপশন সেবা রয়েছে।</h1>
                                <h2>সুবিধা:</h2>
                                <div className="policy-list-area">
                                    <ul className='mb-3'>
                                        <li>এক্সক্লুসিভ কনটেন্ট অ্যাক্সেস</li>
                                        <li>নিউজলেটার</li>
                                        <li>বিজ্ঞাপনমুক্ত পড়ার সুযোগ</li>
                                    </ul>
                                </div>
                                <h2>বিশেষ ছাড় ও অফার</h2>
                                <div className="policy-list-area">
                                    <ul className='mb-3'>
                                        <li>প্যাকেজ</li>
                                        <li>মাসিক</li>
                                        <li>ছয় মাস</li>
                                        <li>বার্ষিক</li>
                                    </ul>
                                </div>
                                <p>সাবস্ক্রিপশন হলো আমাদের পাঠকের সাথে দীর্ঘমেয়াদী সম্পর্ক গড়ার উপায়।</p>
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
