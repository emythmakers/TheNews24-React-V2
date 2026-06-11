import React from 'react'
import { Link } from 'react-router-dom'
import { scrollTop } from './AllFunctions'
import FBpagePlugin from './FBpagePlugin'



export default function FileComplaint() {
    return (
        <div className='page-bangla'>

            <main>
                <div className="container">
                    <div className="TopHomeSection"></div>
                    <title>অভিযোগ দায়ের :: দ্য নিউজ ২৪</title>
                    <div className="SectionTitle"><h3><Link to="/fileComplaint" onClick={scrollTop}><span className="ColorBox"></span>অভিযোগ দায়ের</Link></h3></div>
                    <div className='row mt-5'>
                        <div className='col-lg-8'>
                            <div className="policy-details">
                                <h1>যদি কোনো সংবাদ বা কনটেন্ট নিয়ে আপনার অভিযোগ থাকে, আমরা সেটিকে গুরুত্বের সাথে বিবেচনা করি।</h1>
                                <h2>অভিযোগ জানানোর মাধ্যম?</h2>
                                <div className="policy-list-area">
                                    <ul className='mb-3'>
                                        <li>ইমেইল</li>
                                        <li>ওয়েবসাইটের অভিযোগ ফর্ম</li>
                                        <li>ফোন কল</li>
                                    </ul>
                                </div>
                                <h2>আমাদের করণীয়</h2>
                                <p>অভিযোগ পাওয়ার সঙ্গে সঙ্গে আমরা তদন্ত করি এবং প্রয়োজনে দ্রুত সংশোধন বা প্রত্যাহার করি।</p>
                                <p>আমরা বিশ্বাস করি—অভিযোগ শোনা মানেই উন্নতির সুযোগ পাওয়া।</p>

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
