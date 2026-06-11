import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { scrollTop, ForLazyLoaderImg, getTimeDistance } from '../AllFunctions'

var lazyloaded = false
export default function LeadNews() {
    const [state, setState] = useState([])
    const [state2, setState2] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateSpecial1.json`)
            .then(({ data }) => {
                if (data.data.length > 0) {
                    setState(data.data[0]);
                    setState2(data.data.slice(1, 7));
                    setTimeout(function () {
                        lazyloaded = false
                        ForLazyLoaderImg(lazyloaded)
                    }, 1000);
                }
            });
    }, [])

    return (
        <>
            <div className="lead-news">
                <Link to={"/" + state.Slug + "/news/" + state.ContentID} onClick={scrollTop}>
                    <div className="lead-news-img">
                        {state.ImageBgPath ?
                            <img src={process.env.REACT_APP_IMG_Path + state.ImageBgPath} alt={state.ContentHeading} title={state.ContentHeading} width={632} height={390} className="img-fluid" /> :
                            <img src={process.env.REACT_APP_LAZYL_IMG} alt={state.ContentHeading} title={state.ContentHeading} width={632} height={390} className="img-fluid img100" />}

                        {state.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}

                        <div className="Desc">
                            {/* live section segment */}
                            {state.is_live_content === 1 && state.is_live_now === 1 ?
                                <h1 className="Title">
                                    <div className="pulsate-wrap">
                                        <div className="puls-content-wrap">
                                            <div className="pulsate">
                                                <div className="ringring"></div>
                                                <div className="circle"></div>
                                            </div>
                                            <span className="live-text">লাইভ</span>
                                        </div>
                                    </div> {state.ContentSubHeading ? (state.ContentSubHeading + "/" + state.ContentHeading) : (state.ContentHeading)} </h1>
                                : <h1 className="Title">
                                    {state.ContentSubHeading ? (state.ContentSubHeading + "/" + state.ContentHeading) : (state.ContentHeading)}</h1>}
                        </div>

                    </div>
                </Link>
            </div>
            <div className="sublead-news">
                <div className="row">
                    {state2.map((nc, i) => {
                        return (
                            <div className="col-lg-4 col-md-6" key={i}>
                                <div className="sublead-news-box">
                                    <Link to={"/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}>
                                        <div className="sublead-news-img">
                                            {nc.ImageSmPath ?
                                                <img src={process.env.REACT_APP_IMG_Path + nc.ImageSmPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid" width={195} height={120} /> :
                                                <img src={process.env.REACT_APP_LAZYL_IMG} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" width={195} height={120} />}

                                            {nc.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}
                                        </div>
                                        <div className="Desc">
                                            <h3 className="Title">{nc.ContentSubHeading ? (nc.ContentSubHeading + "/" + nc.ContentHeading) : (nc.ContentHeading)} </h3>
                                            <div className="news-Time">
                                                <span className="time">{getTimeDistance(nc.created_at)}</span>
                                                <span>{nc.CategoryName}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}


                </div>
            </div>

        </>

    )
}
