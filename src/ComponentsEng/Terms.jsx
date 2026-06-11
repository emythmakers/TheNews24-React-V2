import React from 'react'
import { Link } from 'react-router-dom'
import { scrollTop } from '../Components/AllFunctions'
import FBpagePlugin from './FBpagePlugin'
// import LeadLatestNews from './HomeContent/LeadLatestNews'


export default function Terms() {
    return (
        <div className='page-bangla'>

            <main>
                <div className="container">
                    <div className="TopHomeSection"></div>
                    <title>শর্তাবলী :: দ্য নিউজ ২৪</title>
                    <div className="SectionTitle"><h3><Link to="/terms-service" onClick={scrollTop}><span className="ColorBox"></span>শর্তাবলী</Link></h3></div>
                    <div className='row mt-5'>
                        <div className='col-lg-8'>
                            <div className="policy-details">
                                <h1>“দ্য নিউজ” ওয়েবসাইট ব্যবহারের মাধ্যমে আপনি আমাদের শর্তাবলীর সাথে সম্মত হচ্ছেন। এই শর্তগুলো পাঠক ও প্রকাশকের অধিকার নিশ্চিত করে।</h1>
                                <h2>মূল শর্ত</h2>
                                <div className="policy-list-area">
                                    <ul className='mb-3'>
                                        <ol>১. কনটেন্ট শুধুমাত্র ব্যক্তিগত তথ্যের জন্য ব্যবহারযোগ্য</ol>
                                        <ol>২. অননুমোদিত কপি বা পুনঃপ্রকাশ নিষিদ্ধ</ol>
                                        <ol>৩. বিজ্ঞাপন ও লিঙ্কে ক্লিক করলে বাহ্যিক সাইটে যেতে পারেন, সেক্ষেত্রে দায়ভার ব্যবহারকারীর</ol>
                                        <ol>৪. কোনো অনৈতিক বা অবৈধ কাজে আমাদের প্ল্যাটফর্ম ব্যবহার করা যাবে না</ol>
                                    </ul>
                                    <p>আমাদের শর্তাবলী পাঠক ও প্রকাশকের পারস্পরিক আস্থা রক্ষার জন্য প্রণীত।</p>
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
