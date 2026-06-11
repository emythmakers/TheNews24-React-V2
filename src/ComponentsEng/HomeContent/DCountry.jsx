import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { scrollTop, ForLazyLoaderImg, getTimeDistance } from '../AllFunctions'
var lazyloaded = false
export default function DCountry() {
    const [country, setCountry] = useState([])
    const [country2, setCountry2] = useState([])
    const [divisionName, setDivisionName] = useState([])
    const [districtName, setDistrictName] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generateCategory2.json`)
            .then(({ data }) => {
                setCountry(data.data.slice(0, 6))
                setCountry2(data.data[6])
                setTimeout(function () {
                    lazyloaded = false
                    ForLazyLoaderImg(lazyloaded)
                }, 1000);
            })

        axios
            .get(`${process.env.REACT_APP_API_URL}division`)
            .then(({ data }) => {
                setDivisionName(data.divisions);
            });
    }, [])
    const getDist = (e) => {
        e.preventDefault();

        //disabled ture & false
        if (document.getElementById("division") !== null) {
            document.getElementById("buttonFind").disabled = false;
        } else {
            document.getElementById("buttonFind").disabled = true;
        }//disabled ture & false

        var division = e.target.value
        // console.log(division);
        if (division !== 0) {
            axios
                .get(`${process.env.REACT_APP_API_URL}districtInDivision/${division}`)
                .then(({ data }) => {
                    setDistrictName(data.districtInDivision);
                });
        } else {
            setDistrictName([]);
        }
    }

    const getURL = (e) => {
        e.preventDefault()
        var url = ""
        var division = e.target.division.value
        var district = e.target.district.value
        if (division > '0') { url = '/divisions/' + division }
        if (district > '0') { url = '/divisions/' + division + '/' + district }
        // console.log(url);
        window.location.href = url;
    }

    return (
        <>
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-heading">
                        <Link to="/country" onClick={scrollTop}>
                            <h2>সারাদেশ</h2>
                        </Link>
                    </div>
                </div>
            </div>
            {/* district division  */}
            <div className="row mb-5">
                <div className="col-lg-10 m-auto">
                    <form onSubmit={getURL}>
                        <div className="district-news-wrap">
                            <div className="row">
                                <div className="col-lg-3 d-flex align-items-center justify-content-center">
                                    <div className="district-title">
                                        <h5>এলাকার খবর</h5>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <select defaultValue={'0'} className="form-select" name="division" id="division" onChange={getDist}>
                                        <option value="0" disabled selected> সব বিভাগ</option>
                                        {divisionName.map((nc) => {
                                            return (
                                                <option data-id={nc.DivisionID} key={nc.DivisionID} value={nc.DivisionSlug}>{nc.DivisionNameBn}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="col-lg-3">
                                    <select defaultValue={'0'} className="form-select" name="district" id="district">
                                        <option value="0" disabled selected>সব জেলা</option>
                                        {districtName.map((nc) => {
                                            return (
                                                <option data-id={nc.DistrictID} value={nc.DistrictSlug}>{nc.DistrictNameBn}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="col-lg-3 d-flex align-items-center justify-content-center">
                                    <div className="district-btn text-center" >
                                        {/* <a className="btn"  type="submit"  name="btnSubmit" id="buttonFind" disabled={true}>খুঁজুন</a> */}
                                        <button type="submit" id="buttonFind" onClick={scrollTop} name="btnSubmit" className="btn" disabled={true} >খুঁজুন</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>

                </div>
            </div>

            {/* Content section */}
            <div className="row">
                <div className="col-lg-8 order-lg-1 order-2">
                    <div className="othersTwo-list-wrap">
                        <div className="row">
                            {country.map((nc, i) => {
                                return (
                                    <div className="col-lg-6" key={i}>
                                        <div className="othersTwo-list">
                                            <Link to={"/" + nc.Slug + "/news/" + nc.ContentID} onClick={scrollTop}>
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
                {country2 ?
                    <div className="col-lg-4 order-lg-2 order-1">
                        <div className="others-Two-lead-wrap">
                            <div className="others-Two-lead">
                                <Link to={"/" + country2.Slug + "/news/" + country2.ContentID} onClick={scrollTop}>
                                    <div className="other-Two-lead-img">
                                        {country2.ImageBgPath ?
                                            <img src={process.env.REACT_APP_IMG_Path + country2.ImageBgPath} alt={country2.ContentHeading} title={country2.ContentHeading} className="img-fluid w-100" width={400} height={254} /> :
                                            <img src={process.env.REACT_APP_LAZYL_IMG} alt={country2.ContentHeading} title={country2.ContentHeading} className="img-fluid w-100" width={400} height={254} />}

                                        {country2.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}
                                    </div>
                                    <div className="Desc">
                                        <h3 className="Title">{country2.ContentSubHeading ? (country2.ContentSubHeading + "/" + country2.ContentHeading) : (country2.ContentHeading)}</h3>
                                        <p className="Brief">{country2.ContentBrief}</p>
                                        <div className="news-Time">
                                            <span className="time">{getTimeDistance(country2.created_at ? country2.created_at : "")}</span>
                                            <span>{country2.CategoryName}</span>
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
