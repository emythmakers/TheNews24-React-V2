import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { scrollTop, ForLazyLoaderImg } from '../AllFunctions'
import LeadLatestNews from './LeadLatestNews'



var lazyloaded = false
export default function VideoSec() {
    const [videos, setVideos] = useState([])
    const [Leadvideos, setLeadvideos] = useState([])
    // let sliderRef = useRef(null);
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generatePositionVideoCategory1.json`)
            .then(({ data }) => {
                setLeadvideos(data.data[0])
                setVideos(data.data.slice(1, 3))
                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);
            })
    }, [])




    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-heading">
                        <h2><Link to="/video" onClick={scrollTop}>ভিডিও</Link></h2>
                    </div>
                </div>
                <div className="video-wrap">
                    <div className="row gx-3">
                        <div className="col-lg-9">
                            <div className="row gx-3">
                                <div className="col-lg-8">
                                    {Leadvideos ?
                                        <div className="video-big-box">
                                            <Link to={"/video/show/" + Leadvideos.WebTVID} onClick={scrollTop}>
                                                <div className="video-big-img">
                                                    {Leadvideos.WebTVLinkCode ?
                                                        <img src={'https://img.youtube.com/vi/' + Leadvideos.WebTVLinkCode + '/0.jpg'} width={632} height={390} alt={Leadvideos.WebTVHeading} title={Leadvideos.WebTVHeading} className="img-fluid"   /> :
                                                        <img src={process.env.REACT_APP_LAZYL_IMG} width={800} height={450} alt={Leadvideos.WebTVHeading} title={Leadvideos.WebTVHeading} className="img-fluid" />}
                                                    <div className="video-btn">
                                                        <div className="icon-wrap">
                                                            <i className="fa-solid fa-play"></i>
                                                        </div>
                                                    </div>
                                                    <div className="Desc">
                                                        <h3 className="Title">{Leadvideos.WebTVHeading}</h3>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        : false}
                                </div>
                                <div className="col-lg-4">
                                    <div className="row gx-3">
                                        {videos.map((nc,i) => {
                                            return (
                                                <div className="col-md-6 col-lg-12" key={i}>
                                                    <div className="video-small-list">
                                                        <Link to={"/video/show/" + nc.WebTVID} onClick={scrollTop}>
                                                            <div className="video-small-img-wrap">
                                                                {nc.WebTVLinkCode ?
                                                                    <img src={'https://img.youtube.com/vi/' + nc.WebTVLinkCode + '/0.jpg'} width={308} height={187} alt={nc.WebTVHeading} title={nc.WebTVHeading} className="img-fluid" /> :
                                                                    <img src={process.env.REACT_APP_LAZYL_IMG} width={300} height={169} alt={nc.WebTVHeading} title={nc.WebTVHeading} className="img-fluid" />}
                                                                <div className="video-btn">
                                                                    <div className="icon-wrap">
                                                                        <i className="fa-solid fa-play"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="Desc">
                                                                    <h3 className="Title">{nc.WebTVHeading} </h3>
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            )
                                        })}


                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <LeadLatestNews />
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
