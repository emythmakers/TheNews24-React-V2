import React from 'react'
import { Link } from 'react-router-dom'
import { scrollTop } from './AllFunctions'
import FBpagePlugin from './FBpagePlugin'



export default function ReaderRight() {
    return (
        <div className='page-bangla'>
            <main>
                <div className="container">
                    <div className="TopHomeSection"></div>
                    <title>কপিরাইট নীতি :: দ্য নিউজ ২৪</title>
                    <div className="SectionTitle"><h3><Link to="/reader-right" onClick={scrollTop}><span className="ColorBox"></span>পাঠকের অধিকার</Link></h3></div>
                    <div className='row mt-5'>
                        <div className='col-lg-8'>
                            <div className="policy-details">
                                <h1>পাঠকই আমাদের আসল শক্তি। তাই পাঠকের অধিকার সুরক্ষা করা আমাদের দায়িত্ব।</h1>
                                <div className="policy-list-area">
                                    <ul className='mb-3'>
                                        <li>মূল অধিকার</li>
                                        <li>সত্য সংবাদ পাওয়ার অধিকার</li>
                                        <li>মতামত দেওয়ার অধিকার</li>
                                        <li>ভুল সংবাদ সংশোধনের দাবি জানানোর অধিকার</li>
                                        <li>গোপনীয়তা বজায় রাখার অধিকার</li>
                                    </ul>
                                    <p>আমরা বিশ্বাস করি—সচেতন পাঠক মানেই শক্তিশালী গণতন্ত্র।</p>
                                </div>
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
