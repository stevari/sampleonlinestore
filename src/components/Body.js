import React from 'react'
import EuroOutlinedIcon from '@mui/icons-material/EuroOutlined';
import CustomCard from './CustomCard';
export default function Body() {
    return (
        <div>
            <div className='parent'>
                <CustomCard title="Best price"
                    img={`url(${EuroOutlinedIcon})`}
                    text="We here at Sample Online Store offer you the best price on our products."
                />
                <CustomCard
                    title="Best quality"
                    text="Our products are made from top-notch quality materials. We believe that quality defines who we are, so we only offer premium A+ tier equipment"
                />
                <CustomCard title="Best customer satisfaction"
                    text="Our mission is to give you the best workout experience with quality equipment and products. According to surveys, our customer satisfaction rates are on average three times higher than our competitors."
                />

            </div>
        </div>
    )
}