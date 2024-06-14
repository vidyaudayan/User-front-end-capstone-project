


import image1 from '../../assets/banner/bannerpic11.avif'
import image2 from '../../assets/banner/bannerpic1.avif'
import image3 from '../../assets/banner/bannerpic9.avif'
import image4 from '../../assets/banner/bannerpic10.webp'
import image5 from '../../assets/banner/bannerpic8.avif'

import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


const runningText = '#Shop with Exciting Offers..##Shop with Exciting Offers..##Shop with Exciting Offers..##Shop with Exciting Offers..##Shop with Exciting Offers..##Shop with Exciting Offers..##Shop with Exciting Offers..##Shop with Exciting Offers..##Shop with Exciting Offers..#Shop with Exciting Offers..#Shop with Exciting Offers.';

export function EmblaCarousel() {

    const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

    return (
        <div className="embla pt-6" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">
                    <img src={image1} alt='' />
                    
                    <div className="marquee text-white bg-black bg-opacity-50">
                        <div className="slides">
                            <div className="slide">
                                <span className="text-lg font-bold">
                                    #Shop with Exciting Offers..##Shop with Exciting Offers..##Shop with Exciting Offers..##Shop with Exciting Offers...##Shop with Exciting Offers..##Shop with Exciting Offers..
                                </span>

                            </div>
                            <div className="slide">
                                <span className="text-lg font-bold">
                                    #Shop with Exciting Offers..##Shop with Exciting Offers..##Shop with Exciting Offers..##Shop with Exciting Offers...##Shop with Exciting Offers..##Shop with Exciting Offers..
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
