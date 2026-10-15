import React, { useEffect } from 'react'
import DCountry from './HomeContent/DCountry'
import DEntertainment from './HomeContent/DEntertainment'
import DInternationalSec from './HomeContent/DInternationalSec'
import DJob from './HomeContent/DJob'
import DNational from './HomeContent/DNational'
import DPoliticsSec from './HomeContent/DPoliticsSec'
import LeadNewsSection from './HomeContent/LeadNewsSection'
import Lifestyle from './HomeContent/Lifestyle'
import OpinionSec from './HomeContent/OpinionSec'
import PhotoSection from './HomeContent/PhotoSection'
import Sports from './HomeContent/Sports'
import VideoSec from './HomeContent/VideoSec'
// import Event from './HomeContent/Event'
import DTrade from './HomeContent/DTrade'
import HomeLdJson from './HomeContent/HomeLdJson'
import HeaderBottomAdv from '../assets/media/Advertisement/Citytuch(15-10-26).jpg'
import HeaderBottomAdvM from '../assets/media/Advertisement/CitytuchM(15-10-26).jpg'
// import HeaderBottomAds from './HomeContent/HeaderBottomAds'
// import shopnoADS from '../assets/media/Advertisement/shopno-ads.png'
// import VideoSecBotmR2 from './HomeContent/VideoSecBotmR2'
// import Ramadan from './HomeContent/Ramadan'
// import LazyLoaderGIF from '../icon/lazyComponentLoaderGIF.gif'
// import HomeDesktopPopUp from '../Components/HomeContent/HomeDesktopPopUp'
// var allComponentsLoaded = false
export default function Home() {
    // useEffect(() => {
    //     document.querySelectorAll('link[rel="canonical"]')[0].setAttribute('href', window.location.href)
    //     const timer = setTimeout(() => { window.location.reload(1); }, 300000);
    //     return () => clearTimeout(timer);
    // }, [])
    // const [isLoading, setisLoading] = useState(true)
    // const [homeAd2, setHomeAd2] = useState([]) // eslint-disable-line no-unused-vars

    // const [firstSection, setFirstSection] = useState(false)
    // const [secondSection, setSecondSection] = useState(false)
    // const [thirdSection, setThirdSection] = useState(false)
    // const [fourthSection, setFourthSection] = useState(false)
    useEffect(() => {
        document.querySelectorAll('link[rel="canonical"]')[0].setAttribute('href', window.location.href)
        setTimeout(() => { window.location.reload(1); }, 300000);
        // setisLoading(true)
        // setTimeout(() => { setisLoading(false) }, 300);
        // setisLoading(true)
        // setTimeout(() => { setisLoading(false) }, 300);

        // allComponentsLoaded = true

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
                    <div className='HeaderBottomAdv'>
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 text-center">
                                    <div className="DAddDShow d-flex justify-content-center mt-4">
                                        <a href="https://citytouch.bd/" target='blank'>
                                            <img src={HeaderBottomAdv} alt="Advertisement" title="Advertisement" className="img-fluid img100" width={970} height={90} />
                                        </a>
                                    </div>
                                    <div className="DAddMShow d-flex justify-content-center my-3">
                                        <a href="https://citytouch.bd/" target='blank'>
                                            <img src={HeaderBottomAdvM} alt="Advertisement" title="Advertisement" className="img-fluid img100" width={320} height={82} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <LeadNewsSection />
                    <>
                        <div className="video-area">
                            <div className="container">
                                <VideoSec />
                                {/* <div className='row'> */}
                                {/* <div className='col-lg-12'> */}
                                {/* fresh field ads */}
                                {/* <VideoSecBotmR1 /> */}
                                {/* </div> */}
                                {/* </div> */}
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
                    </>
                </>

            </main>
        </>
    )
}
