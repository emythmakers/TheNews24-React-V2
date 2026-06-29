import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { scrollTop } from './AllFunctions'
import LeadLatestNews from './HomeContent/LeadLatestNews'
import DSocialShare from './DetailsPage/DSocialShare'
export default function Live() {
    const [live, setLive] = useState([])


    // const PrintAble = () => { window.print(); };
    // const [isLoading, setisLoading] = useState(true)
    useEffect(() => {
        document.querySelectorAll('link[rel="canonical"]')[0].setAttribute('href', window.location.href)
        setTimeout(() => { window.location.reload(1); }, 300000);
        // setisLoading(true)
        // setTimeout(() => { setisLoading(false) }, 300);
        axios
            .get(`${process.env.REACT_APP_API_URL}en/live-video`)
            .then(({ data }) => {
                setLive(data.livevideo[0]);
            })
        // document.querySelectorAll('link[rel="canonical"]')[0].setAttribute('href', window.location.href)
        // const timer = setTimeout(() => { window.location.reload(1); }, 300000);
        // return () => clearTimeout(timer);
    }, [])
    return (
        <>

            <main>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="DTitle">
                                <Link to={+ '/'} onClick={scrollTop}>
                                    <span className="DTitleInner"><span className="DTitleInnerBar"><span>Live</span></span></span>
                                </Link>
                                <title>Live :: The News 24</title>
                            </h2>
                        </div>
                    </div>
                    <div className="DVideoDetailsArea my-5">
                        <div className="row">

                            <div className="col-lg-8 col-12 border-right-inner">
                                {live ?
                                    <>
                                        <h1 className="Title BGTitle fw-bold mb-2" style={{ fontSize: '26px', lineHeight: '38px' }}>
                                            {live.WebTVHeading}
                                        </h1>
                                        <div className="DVideoDetailsFrame">
                                            {/* <div className="col-sm-12 video-container">
                                    <iframe className="embed-responsive-item" title="youtube-video" src={"https://www.youtube.com/embed/" + state.WebTVLinkCode + "?autoplay=1&mute=1"} frameBorder="0" webkitallowfullscreen='true' mozallowfullscreen='true' allowFullScreen></iframe>
                                </div> */}
                                            <div className="col-sm-12 video-container">
                                                <React.Fragment key={live.WebLiveID}>
                                                    {live.SourceType === 1 ?
                                                        <iframe className="embed-responsive-item" title="youtube-video" src={"https://www.youtube.com/embed/" + live.WebTVLinkCode + "?autoplay=1&mute=1"} frameBorder="0" webkitallowfullscreen='true' mozallowfullscreen='true' allowFullScreen></iframe>
                                                        : live.SourceType === 2 ?
                                                            <div className="fb-wrapper">
                                                                <iframe src={"https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebookapp%2Fvideos%2F" + live.WebTVLinkCode + "%2F&show_text=0&width=560"} title={live.WebTVHeading} style={{ border: "none", overflow: "hidden" }} scrolling="no" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                                                            </div>
                                                            : live.SourceType === 3 &&
                                                            <iframe src={"https://player.vimeo.com/video/" + live.WebTVLinkCode} title="vimeo-video" width="100%" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>}
                                                </React.Fragment>

                                            </div>

                                        </div>
                                        <div className='d-flex '>

                                            <DSocialShare title={live.WebTVHeading} contentID={live.WebTVLinkCode} />
                                        </div>
                                    </>
                                    :
                                    ""}
                                {/* <DSocialShare title={live.WebTVHeading} contentID={live.ContentID} /> */}
                            </div>


                            <div className="col-lg-4 col-12 live">
                                {/* <LatestPopularNews /> */}
                                <LeadLatestNews />
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    )
}
