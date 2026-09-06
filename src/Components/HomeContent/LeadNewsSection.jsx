import React from 'react'
import LeadNews from './LeadNews'
import SpecialTop1 from './SpecialTop1'
import SpecialTop2 from './SpecialTop2';
import protibad from '../../assets/media/Advertisement/cbank-6-9-26.gif'

export default function LeadNewsSection() {

    return (
        <>
            <div className="leadnews-wrap">
                <div className="container">
                    <div className="row gx-3">
                        <div className="col-lg-3 order-lg-1 order-2">
                            <SpecialTop1 />
                        </div>
                        <div className="col-lg-6 order-lg-2 order-1">
                            <LeadNews />
                        </div>
                        <div className="col-lg-3 order-3">
                            <div className="DAdd1 d-flex  justify-content-center mb-4">
                                <img src={protibad} alt="Advertisement" title="Advertisement" className="img-fluid img100" width={300} height={250} />
                            </div>
                            <SpecialTop2 />
                        </div>
                    </div>

                </div>
            </div>

        </>

    )
}
