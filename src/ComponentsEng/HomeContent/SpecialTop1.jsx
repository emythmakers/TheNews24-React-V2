import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { scrollTop, ForLazyLoaderImg, getTimeDistance } from '../AllFunctions'
import { Link } from 'react-router-dom'

var lazyloaded = false
export default function SpecialTop1() {
    const [state1, setState1] = useState([])
    const [state3, setState3] = useState([])
    useEffect(() => {

        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateSpecial2.json`)
            .then(({ data }) => {
                if (data.data) {
                    setState1(data.data[0])
                    setState3(data.data.slice(1, 7));
                    setTimeout(function () {
                        lazyloaded = false
                        ForLazyLoaderImg(lazyloaded)
                    }, 1000);
                }
            });
    }, [])


    return (
        <>
            <div className="lead-left-wrap">
                <div className="lead-left-big">
                    {state1 ?
                        <Link to={"/" + state1.Slug + "/news/" + state1.ContentID} onClick={scrollTop}>
                            <div className="lead-left-big-img">
                                {state1.ImageSmPath ?
                                    <img src={process.env.REACT_APP_IMG_Path + state1.ImageSmPath} alt={state1.ContentHeading} title={state1.ContentHeading} className="img-fluid" width={300} height={190} /> :
                                    <img src={process.env.REACT_APP_LAZYL_IMG} alt={state1.ContentHeading} title={state1.ContentHeading} className="img-fluid" width={300} height={190}/>}

                                {state1.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}

                                <div className="Desc">
                                    {state1.ContentSubHeading == null ?
                                        <h3 className="Title"> {state1.ContentHeading}</h3> :
                                        <h3 className="Title"> <span className="subheadTitle">{state1.ContentSubHeading}/</span>  {state1.ContentHeading}</h3>
                                    }
                                </div>
                            </div>
                        </Link>
                        : false}
                </div>
                <div className="lead-left-small-wrap">
                    {state3.map((nc, i) => {
                        return (
                            <div className="lead-left-small-list" key={i}>
                                <Link to={"/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}>
                                    <div className="row gx-2">
                                        <div className="col-5 col-lg-4">
                                            <div className="lead-left-small-img">
                                                {nc.ImageThumbPath ?
                                                    <img src={process.env.REACT_APP_IMG_Path + nc.ImageThumbPath} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid"  width={90} height={75}/> :
                                                    <img src={process.env.REACT_APP_LAZYL_IMG} alt={nc.ContentHeading} title={nc.ContentHeading} className="img-fluid"  width={90} height={75}/>}

                                                {nc.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}

                                            </div>
                                        </div>
                                        <div className="col-7 col-lg-8">
                                            <div className="Desc">
                                                {nc.ContentSubHeading == null ?
                                                    <h3 className="Title"> {nc.ContentHeading}</h3> :
                                                    <h3 className="Title"> <span className="subheadTitle">{nc.ContentSubHeading}/</span>  {nc.ContentHeading}</h3>
                                                }
                                                <div className="news-Time">
                                                    <span className="time">{getTimeDistance(nc.created_at)}</span>
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
