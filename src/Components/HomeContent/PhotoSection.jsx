import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { scrollTop, ForLazyLoaderImg } from '../AllFunctions'
import Ads from '../../assets/media/Advertisement/life-bdHome.png'
var lazyloaded = false

export default function PhotoSection() {
    const [photoStory, setPhotoStory] = useState([])
    const [photoStory2, setPhotoStory2] = useState([])
    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}json/file/generatePhotoFeature.json`)
            .then(({ data }) => {
                setPhotoStory(data.data[0])
                setPhotoStory2(data.data.slice(1, 2))
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
                        <Link to="/photo-feature" onClick={scrollTop}>
                            <h2>ফটোগ্যালারি</h2>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-8">
                    {photoStory ?
                        <div className="Photogallery-wrap">
                            <Link to={'/photo-feature/news/' + photoStory.PhotoFeatureID} onClick={scrollTop}>
                                <div className="Photogallery-img">
                                    <div className="Photogallery-overlay"></div>
                                    <picture>
                                        {photoStory.ImageBgPath ?
                                            <img src={process.env.REACT_APP_IMG_Path + photoStory.ImageBgPath} alt={photoStory.PhotoFeatureTitle} title={photoStory.PhotoFeatureTitle} className="img-fluid" width={845} height={522} /> :
                                            <img src={process.env.REACT_APP_LAZYL_IMG} alt={photoStory.PhotoFeatureTitle} title={photoStory.PhotoFeatureTitle} className="img-fluid img100" width={845} height={522} />}
                                        {photoStory.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}
                                    </picture>
                                    <div className="Desc">
                                        <h3 className="Title">{photoStory.PhotoFeatureTitle}</h3>
                                    </div>
                                    <div className="photo-icon"><i className="fas fa-image"></i></div>
                                </div>
                            </Link>
                        </div>
                        : false
                    }
                </div>
                <div className="col-lg-4">
                    <div className="photo-list-wrap">
                        <div className="row">
                            {photoStory2.map((nc) => {
                                return (
                                    <div className="col-lg-12 col-sm-6" key={nc.PhotoFeatureID}>
                                        <div className="Photogallery-wrap">
                                            <Link to={"/photo-feature/news/" + nc.PhotoFeatureID} onClick={scrollTop}>
                                                <div className="Photogallery-img">
                                                    <div className="Photogallery-overlay"></div>
                                                    <picture>
                                                        {nc.ImageSmPath ?
                                                            <img src={process.env.REACT_APP_IMG_Path + nc.ImageSmPath} alt={nc.PhotoFeatureTitle} title={nc.PhotoFeatureTitle} className="img-fluid" width={410} height={254} /> :
                                                            <img src={process.env.REACT_APP_LAZYL_IMG} alt={nc.PhotoFeatureTitle} title={nc.PhotoFeatureTitle} className="img-fluid img100" width={410} height={254} />}

                                                        {nc.ShowVideo === 1 && <div className="card-video-icon big transition"> <i className="fa-solid fa-play"></i> </div>}
                                                    </picture>
                                                    <div className="Desc">
                                                        <h3 className="Title">{nc.PhotoFeatureTitle}</h3>
                                                    </div>
                                                    <div className="photo-icon"><i className="fas fa-image"></i></div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    {/* ads placement */}
                    <div className="DRightSideAdd d-flex justify-content-center mb-3 mt-3">
                        <img src={Ads} alt="The News 24" title="The News 24" className='img-fluid' />
                    </div>
                </div>
            </div>
        </>
    )
}
