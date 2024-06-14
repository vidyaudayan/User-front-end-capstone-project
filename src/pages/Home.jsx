import React from 'react'

import { EmblaCarousel } from '../components/Banner/ImageCarousel'
import Horizontalcard from '../components/Card/Horizontalcard'
import { Verticalcard } from '../components/Card/Verticalcard'





const Home = () => {
  return (
    <div>
     
    <EmblaCarousel/>
<Horizontalcard category={"665c08c584ec78676b1660a5"} heading={'Popualar In Fashion'}/>
<Verticalcard category={"66693d12be2e359f1b8b9f28"} heading={'Popualar In Fashion'}/>  

    
    </div>
  )
}

export default Home