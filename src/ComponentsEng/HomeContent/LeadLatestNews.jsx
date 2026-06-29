import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { scrollTop } from '../AllFunctions'
import { Link } from 'react-router-dom';

export default function LeadLatestNews() {
    const [latest, setLatest] = useState([])
    const [popular, setPopular] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}en/json/file/generateLatest.json`)
            .then(({ data }) => {
                if (data.data.length > 0) {
                    setLatest(data.data.slice(0, 10))
                }
            })
        axios
            .get(`${process.env.REACT_APP_API_URL}en/json/file/generatePopular.json`)
            .then(({ data }) => {
                setPopular(data.data)
            })
    }, [])

    return (
        <>
            <div className="LatestNews">
                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-home" type="button" role="tab"
                            aria-controls="pills-home" aria-selected="true">Latest</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-profile" type="button" role="tab"
                            aria-controls="pills-profile" aria-selected="false">Popular</button>
                    </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                        aria-labelledby="pills-home-tab">
                        <div className="LatestNewsWrap">
                            <ul>
                                {latest.map((nc, i) => {

                                    return (
                                        <li key={nc.ContentID}>
                                            <Link to={"/english/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop} >
                                                <div className="LastestNewsList">
                                                    <div className="count">{(i + 1)}</div>
                                                    <div className="Desc">
                                                        {nc.ContentSubHeading == null ?
                                                            <h3 className="Title">{nc.ContentHeading} </h3> :
                                                            <h3 className="Title"> <span className="subheadTitle">{nc.ContentSubHeading + " /"}</span> {nc.ContentHeading} </h3>
                                                        }
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    )
                                })}


                            </ul>
                        </div>
                        <div className="allnews"><a href="/english/archives">All News <i
                            className="fa fa-angle-double-right"></i></a></div>
                    </div>
                    <div className="tab-pane fade" id="pills-profile" role="tabpanel"
                        aria-labelledby="pills-profile-tab">
                        <div className="LatestNewsWrap">
                            <ul>
                                {popular.map((nc, i) => {

                                    return (
                                        <li key={nc.ContentID}>
                                            <Link to={"/english/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}>
                                                <div className="LastestNewsList">
                                                    <div className="count">{(i + 1)}</div>
                                                    <div className="Desc">
                                                        {nc.ContentSubHeading == null ?
                                                            <h3 className="Title">{nc.ContentHeading} </h3> :
                                                            <h3 className="Title"> <span className="subheadTitle">{nc.ContentSubHeading + " /"}</span> {nc.ContentHeading} </h3>
                                                        }
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    )
                                })}

                            </ul>
                        </div>
                        <div className="allnews"><a href="/english/archives">All News <i
                            className="fa fa-angle-double-right"></i></a></div>
                    </div>
                </div>
            </div>

        </>

    )
}
