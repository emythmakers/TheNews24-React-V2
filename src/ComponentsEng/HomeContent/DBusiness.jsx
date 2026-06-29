import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { scrollTop, ForLazyLoaderImg, getTimeDistance,  } from '../AllFunctions'
var lazyloaded = false
export default function DBusiness() {
    const [business, setbusiness] = useState([])
    const [business2, setbusiness2] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}en/json/file/generateCategory4.json`)
            .then(({ data }) => {
                setbusiness(data.data.slice(0, 6))
                setbusiness2(data.data[6])
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
                        <Link to="/english/business" onClick={scrollTop}>
                            <h2>Business</h2>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Content section */}
            <div className="row">
                <div className="col-lg-8 order-lg-1 order-2">
                    <div className="othersTwo-list-wrap">
                        <div className="row">
                            {business.map((nc, i) => {
                                return (
                                    <div className="col-lg-6" key={i}>
                                        <div className="othersTwo-list">
                                            <Link to={"/english/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}>
                                                <div className="row gx-3">
                                                    <div className="col-lg-5 col-sm-3 col-5">
                                                        <div className="othersTwo-list-img">
                                                            {nc.ImageThumbPath ?
                                                                <img src={process.env.REACT_APP_IMG_Path + nc.ImageThumbPath} alt={nc.ContentHeading} title={nc.ContentHeading} width={162} height={100} className="img-fluid" /> :
                                                                <img src={process.env.REACT_APP_LAZYL_IMG} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid" />}

                                                            {nc.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-7 col-sm-9 col-7">
                                                        <div className="Desc">
                                                            <h3 className="Title">{nc.ContentSubHeading ? (nc.ContentSubHeading + "/" + nc.ContentHeading) : (nc.ContentHeading)}</h3>
                                                            <div className="news-Time">
                                                                <span className="time">{getTimeDistance(nc.created_at)}</span>
                                                                <span>{nc.CategoryName}</span>
                                                            </div>
                                                        </div>
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
                {business2 ?
                    <div className="col-lg-4 order-lg-2 order-1">
                        <div className="others-Two-lead-wrap">
                            <div className="others-Two-lead">
                                <Link to={"/english/" + business2.Slug + "/news/" + business2.ContentID} onClick={scrollTop}>
                                    <div className="other-Two-lead-img">
                                        {business2.ImageBgPath ?
                                            <img src={process.env.REACT_APP_IMG_Path + business2.ImageBgPath} alt={business2.ContentHeading} title={business2.ContentHeading} className="img-fluid w-100" width={400} height={254} /> :
                                            <img src={process.env.REACT_APP_LAZYL_IMG} alt={business2.ContentHeading} title={business2.ContentHeading} className="img-fluid w-100" width={400} height={254} />}

                                        {business2.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}
                                    </div>
                                    <div className="Desc">
                                        <h3 className="Title">{business2.ContentSubHeading ? (business2.ContentSubHeading + "/" + business2.ContentHeading) : (business2.ContentHeading)}</h3>
                                        <p className="Brief">{business2.ContentBrief}</p>
                                        <div className="news-Time">
                                            <span className="time">{getTimeDistance(business2.created_at ? business2.created_at : "")}</span>
                                            <span>{business2.CategoryName}</span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    : ""}
            </div>

        </>

    )
}
