import React from 'react';
import Carousel from './Carousel';


var carouselList = [
    
    {
        name: 'Paws',
        imgURL: 'https://ih0.redbubble.net/image.526151863.8783/flat,550x550,075,f.u1.jpg'
    },

    {
        name: 'Purrasic Park',
        imgURL: 'https://i.imgur.com/ZuEoiRV.jpg'

    },
    {
        name: 'The Pawffice',
        imgURL: 'https://media1.popsugar-assets.com/files/thumbor/hybG1DrWDec8g9AWPP_ytCnwRqM/0x225:2250x1152/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2019/09/20/937/n/1922243/3f3adc395d8544bbdb55d7.28710032_.jpg'

    }
]   

    function CarouselList(){
        return(
        <div>
            {carouselList.map((carousel, index)=>
            <Carousel
                name={carousel.name}
                imgURL={carousel.imgURL}
                key={index}
                />
            )}
         </div>
         )
    }

export default CarouselList;