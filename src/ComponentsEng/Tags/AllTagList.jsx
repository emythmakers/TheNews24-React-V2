import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { scrollTop } from '../AllFunctions'

export default function AllTagList() {
    let { all_tags } = useParams();
    const [allTags, setAllTags] = useState([])

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}en/tags`)
            .then(({ data }) => {
                setAllTags(data.tags);
            });
        document.querySelectorAll('link[rel="canonical"]')[0].setAttribute('href', window.location.href)
        const timer = setTimeout(() => { window.location.reload(1); }, 300000);
        return () => clearTimeout(timer);
    }, [all_tags])

    return (
        <main>
            <div className="container">
                <div className="TopHomeSection"></div>
                <title>The News 24 :: All Tag Lists</title>
                <h2 className="DTitle">
                    <Link to={+ '/english/'} onClick={scrollTop}>
                        <span className="DTitleInner"><span className="DTitleInnerBar"><span>All Tag Lists</span></span></span>
                    </Link>
                </h2>
                <div className="DTagListArea mb-5">
                    <ul className="row">
                        {allTags.map((nc) => {
                            return (
                                <li className="col-lg-4 col-sm-6 col-12" key={nc.TagID}>
                                    <div className="DTagListItem">
                                        <Link to={"/tags/" + nc.TagName}>
                                            <div className="Desc">
                                                <h2 className="Title">{nc.TagName}
                                                </h2>
                                            </div>
                                        </Link>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </main>
    )
}
