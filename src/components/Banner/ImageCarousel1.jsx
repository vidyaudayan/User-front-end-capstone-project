


import image1 from '../../assets/banner/banner-1.1.avif'
import image2 from '../../assets/banner/banner-1.2.avif'
import image3 from '../../assets/banner/banner-1.3.avif'
import image4 from '../../assets/banner/banner-1.4.avif'
import image5 from '../../assets/banner/banner-1.5.avif'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


const runningText = '#Shop with Exciting Offers..##Shop with Exciting Offers..##Shop with Exciting Offers..##Shop with Exciting Offers..##Shop with Exciting Offers..##Shop with Exciting Offers..##Shop with Exciting Offers..##Shop with Exciting Offers..##Shop with Exciting Offers..#Shop with Exciting Offers..#Shop with Exciting Offers.';

export function EmblaCarousel1() {

    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

    return (
        <div className="embla pt-6" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">
                    <img src={image1} alt='' />
                    
                    <div className="marquee bg-black bg-opacity-50">
                        <div className="slides">
                            <div className="slide">
                                <span className="text-lg  text-red-700 font-bold">
                                    *Best prices..!!Make your deal..  *Best prices..!!Make your deal.. *Best prices..!!Make your deal.. *Best prices..!!Make your deal..
                                </span>

                            </div>
                            <div className="slide">
                                <span className="text-lg text-blue-950 font-bold">
                                *Best prices..!!Make your deal.. *Best prices..!!Make your deal.. *Best prices..!!Make your deal.. *Best prices..!!Make your deal..
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="embla__slide">
                    <img src={image2} alt="" />
                </div>
                <div className="embla__slide">
                    <img src={image3} alt="" />
                </div>
                <div className="embla__slide">
                    <img src={image4} alt="" />
                </div>
                <div className="embla__slide">
                    <img src={image5} alt="" />
                </div>
            </div>
        </div>
    )
}
