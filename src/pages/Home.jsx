import React from 'react'
import Label from '../components/Banner/Label'
import { EmblaCarousel } from '../components/Banner/ImageCarousel'
import Horizontalcard from '../components/Card/Horizontalcard'
import { Verticalcard } from '../components/Card/Verticalcard'
import Label1 from '../components/Banner/Label1'
import { EmblaCarousel1 } from '../components/Banner/ImageCarousel1'




const Home = () => {
  return (
    <div>
    
    <EmblaCarousel/>
    <Label/>
{/*<Horizontalcard category={"665c08c584ec78676b1660a5"} heading={'Popualar In Fashion'}/>*/}
<Verticalcard category={"66693d12be2e359f1b8b9f28"} heading={'Popualar In Fashion'}/>  
<EmblaCarousel1/>
<Label1/>
<Verticalcard category={"665c08c584ec78676b1660a5"} heading={'Top pick for Men'}/> 
    
    </div>
  )
}

export default Home