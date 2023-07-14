import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './LoveStoryWebsite.css';
import riaImage from "./assets/riaImage.gif";
import riaImage2 from "./assets/riaImage2.jpg";
import riaImage3 from "./assets/riaImage3.jpg";
import riaImage4 from "./assets/riaImage4.jpg";
import riaImage5 from "./assets/riaImage5.jpg";
import riaImage6 from "./assets/riaImage6.jpg";
import riaImage7 from "./assets/riaImage7.jpg";
import riaImage8 from "./assets/riaImage8.jpg";
import riaImage9 from "./assets/riaImage9.jpg";
import riaImage10 from "./assets/riaImage10.jpg";
import riaImage11 from "./assets/riaImage11.jpg";
import riaImage12 from "./assets/riaImage12.jpg";
import riaImage13 from "./assets/riaImage13.jpg";
import riaImage14 from "./assets/riaImage14.jpg";
import riaImage15 from "./assets/riaImage15.jpg";


const ImageCarouselSection = () => {
  const imgData = [
    riaImage,
    riaImage2,
    riaImage3,
    riaImage4,
    riaImage5,
    riaImage6,
    riaImage7,
    riaImage8,
    riaImage9,
    riaImage10,
    riaImage11,
    riaImage12,
    riaImage13,
    riaImage14,
    riaImage15,
  ]
  const renderImages = ()=>{
    let arr =[]
    imgData.map((e,index)=>{
      console.log(e)
        arr.push(
          <div key={index} >
            <img src={e} style={{height:'500px',width:'auto'}} alt="Image 1" />
            
          </div>
        )
    })

    return arr
  }
  return (
    <section className="image-carousel py-5" >
      <div className="container">
        <h2 className="text-center mb-5">Memorable Moments</h2>
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          
        >
          {renderImages()}
          
          {/* Add more images and captions here */}
        </Carousel>
      </div>
    </section>
  );
}

export default ImageCarouselSection;