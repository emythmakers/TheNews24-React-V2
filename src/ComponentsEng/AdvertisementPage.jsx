import React from 'react'
import { Link } from 'react-router-dom'
import { scrollTop } from './AllFunctions'

export default function AdvertisementPage() {
    return (
        <>
            <main>
                <div className="container">
                    <div className="advertise-page">
                        <div className="TopHomeSection"></div>
                        <title>বিজ্ঞাপন :: দ্য নিউজ ২৪</title>
                        <div className="SectionTitle"><h3><Link to="/advertise" onClick={scrollTop}><span className="ColorBox"></span>বিজ্ঞাপন</Link></h3></div>

                        <div className="tempoHead d-flex justify-content-center mt-5">
                            <h2>Coming Soon .....</h2>
                        </div>
                    </div>


                </div>
            </main>
        </>
    )
}
