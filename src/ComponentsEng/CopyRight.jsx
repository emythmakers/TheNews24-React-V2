import React from 'react'
import { Link } from 'react-router-dom'
import { scrollTop } from './AllFunctions'
import FBpagePlugin from './FBpagePlugin'



export default function CopyRight() {
    return (
        <div className='page-bangla'>

            <main>
                <div className="container">
                    <div className="TopHomeSection"></div>
                    <title>কপিরাইট নীতি :: দ্য নিউজ ২৪</title>
                    <div className="SectionTitle"><h3><Link to="/copyright" onClick={scrollTop}><span className="ColorBox"></span>কপিরাইট নীতি</Link></h3></div>
                    <div className='row mt-5'>
                        <div className='col-lg-8'>
                            <div className="policy-details">
                                <h1>“দ্য নিউজ”-এর সব কনটেন্ট (লেখা, ছবি, ভিডিও, ডিজাইন) কপিরাইট আইনের অধীনে সুরক্ষিত।</h1>
                                <h2>কী সুরক্ষিত?</h2>
                                <div className="policy-list-area">
                                    <ul className='mb-3'>
                                        <li>খবর ও আর্টিকেল</li>
                                        <li>ফটোগ্রাফি ও ভিডিও</li>
                                        <li>গ্রাফিক ডিজাইন ও লোগো</li>
                                    </ul>
                                </div>
                                <h2>কীভাবে ব্যবহার করবেন?</h2>
                                <div className="policy-list-area">
                                    <ul className='mb-3'>
                                        <li>অনুমতি ছাড়া আংশিক বা পূর্ণ ব্যবহার করা যাবে না</li>
                                        <li>উদ্ধৃতি দিতে হলে অবশ্যই সূত্র উল্লেখ করতে হবে</li>
                                    </ul>
                                </div>
                                <p>আমাদের কপিরাইট নীতি হলো—কনটেন্টের প্রতি শ্রদ্ধা, সৃষ্টিশীলতার প্রতি সম্মান।</p>

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
