import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { scrollTop, ForLazyLoaderImg } from '../AllFunctions'
import WriterDefaultImg from '../../assets/media/common/profile.png';
// import OnlinePoll from './OnlinePoll';
// import JahanAds from './JahanAds';

var lazyloaded = false
export default function OpinionSec() {
    const [state, setState] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateCategory18.json`)
            .then(({ data }) => {
                if (data.data.length > 0) {
                    setState(data.data.slice(0, 4));
                    setTimeout(function () {
                        lazyloaded = false
                        ForLazyLoaderImg(lazyloaded)
                    }, 1000);
                }
            });
    }, [])

    return (
        <>
            <div className="row">
                <div className="col-lg-9">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <Link to="/opinion" onClick={scrollTop}>
                                    <h2>মতামত</h2>
                                </Link>
                            </div>
                        </div>
                        {state.map((nc) => {
                            return (
                                <div className="col-md-6" key={nc.ContentID}>
                                    <div className="opinion-box">
                                        <Link to={"/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}>
                                            <div className="row">
                                                <div className="col-lg-3 d-flex justify-content-center">
                                                    <div className="opinion-img">
                                                        {nc.ImageSmPath == null ?
                                                            <img src={WriterDefaultImg} alt={nc.ContentHeading} title={nc.ContentHeading} width={90} height={90} /> :
                                                            <img src={process.env.REACT_APP_IMG_Path + nc.ImageSmPath} alt={nc.ContentHeading} title={nc.ContentHeading} width={90} height={90} className="img-fluid" />
                                                        }
                                                        {nc.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}
                                                    </div>
                                                </div>
                                                <div className="col-lg-9 d-flex aling-items-center">
                                                    <div className="opinion-text">
                                                        <div className="Desc">
                                                            <h3 className="Title">{nc.ContentHeading}</h3>
                                                            <p className="WriterName"><i className="fa fa-pencil" aria-hidden="true"></i>{nc.WriterName}</p>
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
                <div className="col-lg-3 col-sm-12">
                    {/* <OnlinePoll /> */}
                    {/* <JahanAds /> */}
                </div>
            </div>


        </>

    )
}
