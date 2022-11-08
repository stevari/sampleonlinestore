import React from 'react'
import beltandweight from "../img/beltandweight.jpg";
import dumbbellsmetal from "../img/dumbbellsmetalsmall.jpg";
import background from "../img/background.jpg";
import barbell from "../img/barbell.jpg";
import CustomCard from './CustomCard';

export default function Body() {
    return (
        <div style={{ backgroundImage: `url(${background})`,backgroundPosition: 'center',backgroundSize: 'cover', backgroundRepeat: 'no-repeat',marginLeft:-8,marginRight:-7 }}>
            <div className='parent'>
                {/*Row 1*/}
                <CustomCard
                    img={beltandweight}
                    title="Best price"
                    text="We here at Sample Online Store offer you the best price on our products. We belive in fair and sustainable pricing that serves you, the customer and us."
                />
                <CustomCard
                    img={dumbbellsmetal}
                    title="Best quality"
                    text="Our products are made from top-notch quality materials. We believe that quality defines who we are, so we only offer premium A+ tier equipment"
                />
                <CustomCard
                    img={barbell}
                    title="Best customer satisfaction"
                    text="Our mission is to give you the best workout experience with quality equipment and products. According to surveys, our customer satisfaction rates are on average three times higher than our competitors."
                />


            </div>
            {/*Row 2*/}
            <div className='parent'>
                <CustomCard
                    img={beltandweight}
                    title="Column 1"
                    text="textfield 1"
                />
                <CustomCard
                    img={dumbbellsmetal}
                    title="Column 2"
                    text="textfield 2"
                />
                <CustomCard
                    img={barbell}
                    title="Column 3"
                    text="Our mission is to give you the best workout experience with quality equipment and products. According to surveys, our customer satisfaction rates are on average three times higher than our competitors."
                />


            </div>
        </div>

    )
}