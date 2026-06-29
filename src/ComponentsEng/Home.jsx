import React, { useEffect } from 'react'
import HomeLdJson from '../ComponentsEng/HomeContent/HomeLdJson';
import DNational from '../ComponentsEng/HomeContent/DNational';
import LeadNewsSection from '../ComponentsEng/HomeContent/LeadNewsSection'
import DWorldSec from '../ComponentsEng/HomeContent/DWorldSec'
import OpinionSec from '../ComponentsEng/HomeContent/OpinionSec';
import DBusiness from '../ComponentsEng/HomeContent/DBusiness'
import DEconomySec from './HomeContent/DEconomySec';
import DTechnology from './HomeContent/DTechnology';
import DScience from './HomeContent/DScience';
import DEntertainment from '../ComponentsEng/HomeContent/DEntertainment';
import Sports from '../ComponentsEng/HomeContent/Sports';
import Lifestyle from '../ComponentsEng/HomeContent/Lifestyle';

export default function Home() {

    useEffect(() => {
        document.querySelectorAll('link[rel="canonical"]')[0].setAttribute('href', window.location.href)
        setTimeout(() => { window.location.reload(1); }, 300000);
    }, [])
    return (
        <>
            <main>
                {/* <Event /> */}
                <>
                    <title>The News 24 ::  দ্য নিউজ ২৪</title>
                    <HomeLdJson />

                    <LeadNewsSection />
                    <>
                        {/* <div className="video-area">
                            <div className="container">
                                <VideoSec />
                            </div>
                        </div> */}
                        {/* <section className="others-two-area">
                            <div className="container">
                                <DCountry />
                            </div>
                        </section> */}

                        <section className="national-news-area">
                            <DNational />
                        </section>
                        <section className="others-two-area mt-3">
                            <div className="container">
                                <DWorldSec />
                            </div>
                        </section>
                        <section className="opinion-area">
                            <div className="container">
                                <OpinionSec />
                            </div>
                        </section>
                        <section className="others-two-area">
                            <div className="container">
                                <DBusiness />
                            </div>
                        </section>
                        <section className="common-post-area">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <DEconomySec />
                                    </div>
                                    <div className="col-lg-4">
                                        <DTechnology />
                                    </div>
                                    <div className="col-lg-4">
                                        <DScience />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="entertainment-area">
                            <div className="container">
                                <DEntertainment />
                            </div>
                        </section>
                        <section className="sports-area">
                            <div className="container">
                                <Sports />
                            </div>
                        </section>
                        <section className="life-style-area">
                            <div className="container">
                                <Lifestyle />
                            </div>
                        </section>
                        {/* <section className="Photogallery-area">
                            <div className="container">
                                <PhotoSection />
                            </div>
                        </section> */}
                    </>
                </>

            </main>
        </>
    )
}
