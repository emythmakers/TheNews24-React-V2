import React from 'react'
import politicsAds from '../../assets/media/Advertisement/rajnitiAdsR1.png';

const PoliticsPgAds = () => {
    return (
        <div className="DRightSideAdd d-flex justify-content-center mb-3 mt-3">
            <a href="https://www.shwapno.com/" target='blank'>
                <img src={politicsAds} alt="Advertisement" title="Advertisement" className='img-fluid'/>
            </a>
        </div>
    )
}

export default PoliticsPgAds;