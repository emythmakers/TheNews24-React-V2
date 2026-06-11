import React from 'react'
import { Link } from 'react-router-dom'

export default function Ads() {
    return (
        <>
            <section className="container">
                <div className="row">
                    <div className="col-md-12 mt-4">
                        <div className="DAdd2 d-flex  justify-content-center">
                            <Link to="">
                                <img src={"/media/Advertisement/adHome2.png"} alt="Header Advertisement" title="Header Advertisement" className="img-fluid img100" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </>

    )
}
