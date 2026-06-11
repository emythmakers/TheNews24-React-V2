import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { scrollTop, ForLazyLoaderImg, getTimeDistance } from '../AllFunctions'

var lazyloaded = false
export default function DInternationalSec() {
    const [international, setInternational] = useState([])
    const [international2, setInternational2] = useState([])

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateCategory4.json`)
            .then(({ data }) => {

                setInternational(data.data.slice(0, 6))
                setInternational2(data.data[6])

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
                        <Link to="/international" onClick={scrollTop}>
                            <h2>আন্তর্জাতিক</h2>
                        </Link>
                    </div>
                </div>
            </div>
            {/* Content section */}
            <div className="row">
                <div className="col-lg-8 order-lg-1 order-2">
                    <div className="othersTwo-list-wrap">
                        <div className="row">
                            {international.map((nc, i) => {
                                return (
                                    <div className="col-lg-6" key={i}>
                                        <div className="othersTwo-list">
                                            <Link to={"/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}>
                                                <div className="row gx-3">
                                                    <div className="col-lg-5 col-sm-3 col-5">
                                                        <div className="othersTwo-list-img">
                                                            {nc.ImageThumbPath ?
                                                                <img src={process.env.REACT_APP_IMG_Path + nc.ImageThumbPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid" width={162} height={100} /> :
                                                                <img src={process.env.REACT_APP_LAZYL_IMG} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid" width={162} height={100} />}

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
                {international2 ? 
                <div className="col-lg-4 order-lg-2 order-1">
                    <div className="others-Two-lead-wrap">
                        <div className="others-Two-lead">
                            <Link to={"/" + international2.Slug + "/news/" + international2.ContentID} onClick={scrollTop}>
                                <div className="other-Two-lead-img">
                                    {international2.ImageBgPath ?
                                        <img src={process.env.REACT_APP_IMG_Path + international2.ImageBgPath} alt={international2.ContentHeading} title={international2.ContentHeading} className="img-fluid w-100"  width={410} height={254} /> :
                                        <img src={process.env.REACT_APP_LAZYL_IMG} alt={international2.ContentHeading} title={international2.ContentHeading} className="img-fluid w-100"  width={410} height={254}/>}

                                    {international2.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}
                                </div>
                                <div className="Desc">
                                    <h3 className="Title">{international2.ContentSubHeading ? (international2.ContentSubHeading + "/" + international2.ContentHeading) : (international2.ContentHeading)}</h3>
                                    <p className="Brief">{international2.ContentBrief}</p>
                                    <div className="news-Time">
                                        <span className="time">{getTimeDistance(international2.created_at ? international2.created_at : "")}</span>
                                        <span>{international2.CategoryName}</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                :""}
            </div>

        </>

    )
}
