import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { scrollTop, ForLazyLoaderImg, getTimeDistance } from '../AllFunctions'
var lazyloaded = false
export default function DJob() {
    const [News, setNews] = useState([])
    const [News2, setNews2] = useState([])

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateCategory19.json`)
            .then(({ data }) => {
                setNews(data.data[0])
                setNews2(data.data.slice(1, 4))
                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);


            })
    }, [])

    return (
        <>

            <div className="common-post-listBox">
                <div className="section-heading">
                    <Link to="/jobs" onClick={scrollTop}>
                        <h2>চাকরি </h2>
                    </Link>
                </div>
                <div className="common-single-post-wrap">
                    {News ?
                        <Link to={"/" + News.Slug + "/news/" + News.ContentID} onClick={scrollTop}>
                            <div className="common-single-post-wrap-img">
                                {News.ImageBgPath ?
                                    <img src={process.env.REACT_APP_IMG_Path + News.ImageBgPath} alt={News.ContentHeading} title={News.ContentHeading} className="img-fluid" width={410} height={254} /> :
                                    <img src={process.env.REACT_APP_LAZYL_IMG} alt={News.ContentHeading} title={News.ContentHeading} className="img-fluid" width={410} height={254} />}

                                {News.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}
                            </div>
                            <div className="Desc">
                                <h3 className="Title">{News.ContentSubHeading ? (News.ContentSubHeading + "/" + News.ContentHeading) : (News.ContentHeading)}
                                </h3>
                                <div className="news-Time">
                                    <span className="time">{getTimeDistance(News.created_at ? News.created_at : "")}</span>
                                    <span>{News.CategoryName}</span>
                                </div>
                            </div>
                        </Link>
                        : false}

                </div>
                <div className="common-single-post-list-wrap">
                    {News2.map((nc, i) => {
                        return (
                            <div className="common-single-post-list" key={i}>
                                <Link to={"/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}>
                                    <div className="row gx-3">
                                        <div className="col-5 col-lg-4">
                                            <div className="common-single-post-list-img">
                                                {nc.ImageThumbPath ?
                                                    <img src={process.env.REACT_APP_IMG_Path + nc.ImageThumbPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid" width={126} height={84} /> :
                                                    <img src={process.env.REACT_APP_LAZYL_IMG} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid" width={126} height={84} />}

                                                {nc.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}
                                            </div>
                                        </div>
                                        <div className="col-7 col-lg-8">
                                            <div className="Desc">
                                                <h3 className="Title">{nc.ContentSubHeading ? (nc.ContentSubHeading + "/" + nc.ContentHeading) : (nc.ContentHeading)}
                                                </h3>
                                                <div className="news-Time">
                                                    <span className="time">{getTimeDistance(nc.created_at ? nc.created_at : "")}</span>
                                                    <span>{nc.CategoryName}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>

    )
}
