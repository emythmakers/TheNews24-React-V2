import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { scrollTop, ForLazyLoaderImg, getTimeDistance } from '../AllFunctions'
// import LeadTopSlider from './LeadTopSlider'
var lazyloaded = false
export default function Sports() {
    const [sports, setSports] = useState([])
    const [sports2, setSports2] = useState([])


    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateCategory6.json`)
            .then(({ data }) => {

                setSports(data.data.slice(0, 2))
                setSports2(data.data.slice(2, 6))

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
                        <Link to="/sports" onClick={scrollTop}>
                            <h2>খেলাধুলা</h2>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="sports-lead">
                <div className="row">
                    {sports.map((nc) => {
                        return (
                            <div className="col-lg-6" key={nc.ContentID}>
                                <div className="sports-lead-wrap">
                                    <Link to={"/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}>
                                        <div className="sports-lead-img">
                                            {nc.ImageBgPath ?
                                                <img src={process.env.REACT_APP_IMG_Path + nc.ImageBgPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid" width={627} height={330} /> :
                                                <img src={process.env.REACT_APP_LAZYL_IMG} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" width={627} height={330} />}

                                            {nc.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}
                                        </div>
                                        <div className="Desc">
                                            <h3 className="Title">{nc.ContentHeading}</h3>
                                            <p className="Brief">{nc.ContentBrief}</p>
                                            <div className="news-Time">
                                                <span className="time">{getTimeDistance(nc.created_at ? nc.created_at : "")}</span>
                                                <span>{nc.CategoryName}</span>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        )
                    })

                    }


                </div>
            </div>
            <div className="sports-list-wrap">
                <div className="row">
                    {sports2.map((nc) => {
                        return (
                            <div className="col-lg-3" key={nc.ContentID}>
                                <div className="sports-list">
                                    <Link to={"/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}>
                                        <div className="sports-list-img">
                                            <div className="row">
                                                <div className="col-5 col-lg-12">
                                                    <div className="sports-list-imgBox">
                                                        {nc.ImageSmPath ?
                                                            <img src={process.env.REACT_APP_IMG_Path + nc.ImageSmPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid" width={302} height={232} /> :
                                                            <img src={process.env.REACT_APP_LAZYL_IMG} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" width={302} height={232} />}

                                                        {nc.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}
                                                    </div>
                                                </div>
                                                <div className="col-7 col-lg-12">
                                                    <div className="Desc">
                                                        <h3 className="Title">{nc.ContentHeading}</h3>
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
        </>

    )
}
