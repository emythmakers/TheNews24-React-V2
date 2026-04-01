import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
// import Ads from '../../assets/media/Advertisement/shopno.png'
import { ForLazyLoaderImg, getTimeDistance, scrollTop } from '../AllFunctions'
import FBpagePlugin from '../FBpagePlugin'
import PrayerTime from './PrayerTime'

var lazyloaded = false
export default function DNational() {
    const [national, setNational] = useState([])
    const [national1, setNational1] = useState([])
    const [national2, setNational2] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateCategory1.json`)
            .then(({ data }) => {
                setNational(data.data[0])
                setNational1(data.data[1])
                setNational2(data.data.slice(2, 5))
                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);
            })
    }, [])
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-heading">
                            <h2><Link to="/national" onClick={scrollTop}>জাতীয়</Link></h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-9">
                        <div className="national-lead-wrap">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="national-lead">
                                        <Link to={"/" + national.Slug + "/news/" + national.ContentID} onClick={scrollTop}>
                                            <div className="national-img">
                                                {national.ImageBgPath ?
                                                    <img src={process.env.REACT_APP_IMG_Path + national.ImageBgPath} alt={national.ContentHeading} title={national.ContentHeading} className="img-fluid" width={627} height={388} /> :
                                                    <img src={process.env.REACT_APP_LAZYL_IMG} alt={national.ContentHeading} title={national.ContentHeading} className="img-fluid img100" width={627} height={388} />}

                                                {national.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}
                                                <div className="Desc">
                                                    <h3 className="Title">{national.ContentSubHeading ? (national.ContentSubHeading + "/" + national.ContentHeading) : (national.ContentHeading)}</h3>
                                                    <div className="news-Time">
                                                        <span className="time">{getTimeDistance(national.created_at ? national.created_at : "")}</span>
                                                        <span>{national.CategoryName}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    {national1 ?
                                        <div className="national-leadTwo">
                                            <Link to={"/" + national1.Slug + "/news/" + national1.ContentID} onClick={scrollTop}>
                                                <div className="row">
                                                    <div className="col-5 col-lg-12">
                                                        <div className="national-leadTwo-img">
                                                            {national1.ImageSmPath ?
                                                                <img src={process.env.REACT_APP_IMG_Path + national1.ImageSmPath} alt={national1.ContentHeading} title={national1.ContentHeading} className="img-fluid" width={302} height={186} /> :
                                                                <img src={process.env.REACT_APP_LAZYL_IMG} alt={national1.ContentHeading} title={national1.ContentHeading} className="img-fluid img100" width={302} height={186} />}

                                                            {national1.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}
                                                        </div>
                                                    </div>
                                                    <div className="col-7 col-lg-12">
                                                        <div className="Desc">
                                                            <h3 className="Title">{national1.ContentSubHeading ? (national1.ContentSubHeading + "/" + national1.ContentHeading) : (national1.ContentHeading)}</h3>
                                                            <p className="Brief">{national1.ContentBrief}</p>
                                                            <div className="news-Time">
                                                                <span className="time">{getTimeDistance(national1.created_at ? national1.created_at : "")}</span>
                                                                <span>{national1.CategoryName}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div> :
                                        false
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="national-list-wrap">
                            <div className="row">
                                {national2.map((nc, i) => {
                                    return (
                                        <div className="col-lg-4" key={i}>
                                            <div className="national-list">
                                                <Link to={"/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}>
                                                    <div className="row">
                                                        <div className="col-5 col-lg-12">
                                                            <div className="national-list-img">
                                                                {nc.ImageSmPath ?
                                                                    <img src={process.env.REACT_APP_IMG_Path + nc.ImageSmPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid" width={302} height={186} /> :
                                                                    <img src={process.env.REACT_APP_LAZYL_IMG} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid img100" width={302} height={186} />}

                                                                {nc.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}
                                                            </div>
                                                        </div>
                                                        <div className="col-7 col-lg-12">
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
                    <div className="col-lg-3">
                        <div className="DPrayer mb-3">
                            <PrayerTime />
                        </div>
                        <FBpagePlugin />
                        {/* <div className="DRightSideAdd mt-2">
                            <a href="https://www.shwapno.com/" onClick={scrollTop} target='blank'><img src={Ads} alt="ads" title="ads" /></a>
                        </div> */}
                    </div>
                </div>
            </div>

        </>

    )
}
