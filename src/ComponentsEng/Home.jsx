import React, { useEffect } from 'react'
import HomeLdJson from '../Components/HomeContent/HomeLdJson';


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
                    {/* popup */}
                    {/* <HomeDesktopPopUp /> */}
                    {/* Header Bottom Ads  */}
                    {/* <div className="container">
                        <div className="adsarea">
                            <a href="https://www.shwapno.com/" target='blank'>
                                <img
                                    src={shopnoADS}
                                    alt="The News 24"
                                    title="The News 24"
                                    className="img-fluid img100"
                                    width={970}
                                    height={90}
                                />
                            </a>
                        </div>
                    </div> */}

                    {/* <LeadNewsSection />
                    <>
                        <div className="video-area">
                            <div className="container">
                                <VideoSec />                             
                            </div>
                        </div>
                        <section className="others-two-area">
                            <div className="container">
                                <DCountry />
                            </div>
                        </section>

                        <section className="national-news-area">
                            <DNational />
                        </section>
                        <section className="others-two-area">
                            <div className="container">
                                <DInternationalSec />
                            </div>
                        </section>
                        <section className="opinion-area">
                            <div className="container">
                                <OpinionSec />
                            </div>
                        </section>
                        <section className="common-post-area">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <DPoliticsSec />
                                    </div>
                                    <div className="col-lg-4">
                                        <DJob />
                                    </div>
                                    <div className="col-lg-4">
                                        <DTrade />
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
                        <section className="Photogallery-area">
                            <div className="container">
                                <PhotoSection />
                            </div>
                        </section>
                    </> */}
                </>

            </main>
        </>
    )
}
