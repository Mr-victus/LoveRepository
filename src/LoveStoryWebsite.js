import React, { useState } from 'react';
import './LoveStoryWebsite.css';
import ImageCarouselSection from './ImageCarouselSection'
import may from './assets/may.gif'
import june from './assets/june.jpg'
import july from './assets/july.jpg'
import august from './assets/august.jpg'
import september from './assets/september.jpg'
import october from './assets/october.jpg'
import november from './assets/november.jpg'
import december from './assets/december.jpg'
import january from './assets/january.jpg'
import february from './assets/february.jpg'
import march from './assets/march.jpg'
import april from './assets/april.jpg'
import may23 from './assets/may.jpg'
import june23 from './assets/june 23.jpg'
import RSLL from './assets/RSLL.jpg'
import RSLL2 from './assets/RSLL2.jpg'
import RSLL3 from './assets/RSLL3.jpg'
import RSLL4 from './assets/RSLL4.jpg'
import ppdLL from './assets/ppdLL.jpg'

const LoveStoryWebsite = () => {
    const [popupImage, setPopupImage] = useState(null);

    const openPopup = (imageSrc) => {
      setPopupImage(imageSrc);
    };
  
    const closePopup = () => {
      setPopupImage(null);
    };
  
    const timelineData = [
        { month: 'May 2022', event: 'That Monday Night',img:[may], desc:"On a Monday night, amidst the serendipity of a change in plans, two souls discovered an extraordinary connection. Instead of the fancy restaurant, they shared pizza and beer, laughter filling the air. In the warmth of their conversation, hands intertwined, they found solace and a gentle spark. As the night embraced them, they cuddled, savoring the intimacy of each other's presence. And in a moment that stopped time, their lips met, igniting a new chapter in their love story." },
        { month: 'June 2022', event: 'Weekend Getaway',img:[june], desc:"In her town, he arrived. Amidst the company of friends, their playful banter painted the evening. Together, riding on a bike, laughter carried away by the wind. And in the midst of joyous chaos, amidst exchanged glances and shared moments, she uttered those three magical words: \"I love you.\" Her words were quick, leaving him momentarily stunned, but as a smile danced upon her lips, she playfully darted away. There he stood, his heart brimming with affection, a blush gracing his cheeks as he smiled, knowing that love had found its way into their lives in the most delightful and unexpected of ways." },
        { month: 'July 2022', event: 'PondiCherry',img:[july], desc:"On her birthday, they embarked on a memorable journey to Pondicherry, accompanied by a friend. Under the starlit sky, as the clock struck midnight, they embraced the enchantment of her birthday, they gathered on the beach, With laughter and joy, they cut the cake, sharing in the sweetness of the moment. As the waves applauded their celebration painting the night with love, laughter, and unforgettable memories. A beautiful bouquet of flowers, gifted by him in the morning, captured the essence of his love and admiration. Later, in a cozy café, amidst laughter and shared stories, she penned heartfelt letters to her parents, bridging the distance with words. It was a day of pure joy and happiness, where love, friendship, and the warmth of celebration intertwined to create unforgettable moments, painting her birthday with love and endless smiles."},
        { month: 'August 2022', event: 'Goa',img:[august], desc:"GOOOAAAAAA!!! BABBYYYY" },
        { month: 'September 2022', event: 'Creating Memories',img:[september], desc: "She attended her Convocation" },
        { month: 'October 2022', event: 'Holiday Season Together',img:[october], desc:"Amidst the bustling chaos of the Durga Puja Festival, they took the opportunity to finally embark on a long-awaited date at the arcade. Amidst the festive chaos, they discovered that the greatest adventure was found in each other's company." },
        { month: 'November 2022', event: 'Without each other',img:[november], desc:"Spent a month without meeting each other. However, he got a ton of gifts from heeerrrr a new hoodie and couple of ganjjiissss" },
        { month: 'December 2022', event: 'Night at his place',img:[december], desc:"In the embrace of familiarity, she stepped into his world, visiting his place for the first time. As the night unfolded, their hearts and souls found solace in each other's presence. Delightful aromas filled the air as they indulged in a feast of flavors, savoring the rich spices of biriyani, the comforting allure of chole bhature, and the fiery thrill of 2x spicy noodles. With laughter echoing through the walls, they relished in the simple pleasures of shared meals and stories, creating a sanctuary of joy and tranquility. As the night gently unfolded, their bond grew stronger, intertwining their hearts with love and cherished memories." },
        { month: 'January 2023', event: 'His Birthday',img:[january],desc:"She journeyed to his place to celebrate his birthday. Filled with excitement and tenderness, she transformed the bachelor's den into a haven of joy. With anticipation in the air, they gathered around the cake, its candles flickering with the promise of wishes yet to be made. In the exchange of gifts, each one carefully chosen to reflect their shared moments and dreams. She gifted him the greatest treasure of all—a celebration of their love and a reminder of the profound bond they shared." },
        { month: 'February & March 2023', event: 'The distance',img:[february,march],  desc:"As the distance increased between them, so did their longingness for each other, it were two difficult months." },
        { month: 'April 2023', event: 'Kashmir',img:[april], desc:"Kashmir and all the shenanigans" },
        { month: 'May & June 2023', event: 'Distance with a hope',img:[may23,june23], desc:"Again the distance with a hope to be with each other soon!!" },
        { month: 'July 2023', event: 'One Year Together',img:[july], desc:"Story yet to unfold" }
      ];
      const challenges = [
        {
          title: 'Cooking Challenge',
          description: 'Pick a recipe and cook a romantic dinner together. Share the experience and enjoy the delicious meal you create.',
        },
        {
          title: 'Go explore a new Cafe',
          description: 'Randomly select a cafe and drive away.',
        },
        {
          title: 'Go Kayaking',
          description: 'Go row away those kayaks',
        },
        {
          title: 'Visit the Zoo',
          description: 'Go have some fun with the animals',
        },
        {
          title: 'Get High',
          description: 'Roll that thing up and dive into another dimension',
        },
        {
          title: 'Get Drunk',
          description: 'Open that home bar and create some nice cocktails',
        },
        {
          title: 'Movie Marathon',
          description: 'Create a movie marathon night with your favorite romantic films. Snuggle up, prepare popcorn, and enjoy a cozy movie night at home.',
        },
      ];
    
      const [selectedChallenge, setSelectedChallenge] = useState(null);
    
      const selectRandomChallenge = () => {
        const randomIndex = Math.floor(Math.random() * challenges.length);
        setSelectedChallenge(challenges[randomIndex]);
      };
      const reset = () => {
        
        setSelectedChallenge(null);
      };

      const loveletterData = [{"title":"The first", img:[RSLL,ppdLL]}, {"title":"The birthday", img:[RSLL3,RSLL4]},{"title":"The May", img:[RSLL2]}]
  return (
    <div className='mainn'>
      

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link" href="#timeline">Timeline</a></li>
            <li className="nav-item"><a className="nav-link" href="#love-letters">Love Letters</a></li>
            <li className="nav-item"><a className="nav-link" href="#challenges">Date Ideas</a></li>
            <li className="nav-item"><a className="nav-link" href="#playlist">Playlist</a></li>
          </ul>
        </div>
      </nav>
      <section id="timeline" className="py-5">
      <ImageCarouselSection />

      </section>
      <section id="timeline" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Our Love Story Timeline</h2>

          <div className="timeline">
            {timelineData.map((item, index) => (
              <div className="timeline-event" key={index}>
                <div className="date">{item.month}</div>
                <div className="description">{item.event}</div>
                <p className="love-letter-text">
                {item.desc}
                </p>
                {item.img.map((item,index)=>(
                  <div key={index}>
                    <img src={item} style={{height:'500px',width:'auto',maxWidth:"100%"}} alt="Image 1" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>


      <section id="love-letters" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Love Letters</h2>
          <div className="love-letters-container">
            {loveletterData.map((item,index)=>(
              <div key={index} className="love-letter-tile" onClick={() => openPopup(item.img)}>
              {/* <img src="image1.jpg" alt="Love Letter 1" className="love-letter-image" /> */}
              <p className="love-letter-text">
                {item.title}
              </p>
            </div>
            ))}
            
          </div>
        </div>
      </section>

      <section id="challenges" className="py-5">
        <div className="container">
          <h2 className="text-center mb-5">Challenges</h2>
          <div className="challenge-container">
            {selectedChallenge ? (
              <div>
              <div className="challenge-tile">
                <h3 className="challenge-title">{selectedChallenge.title}</h3>
                <p className="challenge-description">{selectedChallenge.description}</p>
              </div>
              <button className="random-challenge-button" onClick={reset}>
                reset
              </button>
              </div>
            ) : (
              <button className="random-challenge-button" onClick={selectRandomChallenge}>
                Get a Random Challenge
              </button>
            )}
          </div>
        </div>
      </section>

      <section id="playlist" className="py-5 playlist-section">
        <div className="container">
          <h2 className="text-center mb-5">Our Playlist</h2>
          <div className="playlist-container" >
            <iframe
              src="https://open.spotify.com/embed/playlist/1DR2wsZlZ2QakG2HFGAuMr?utm_source=generator"
              width="100%"
              height="500"
              frameBorder="0"
              allowtransparency="true"
              allow="encrypted-media"
              title="Spotify Playlist"
              
            ></iframe>
          </div>
        </div>
      </section>


      <footer className="bg-light text-center py-3">
        <p>&copy; 2023 Ria and Me Love Story. All rights reserved.</p>
      </footer>
      {popupImage && (
        <div className="popup-container"  onClick={(e)=>{closePopup()}}>
          {
            popupImage.map((item,index)=>(
            <div key={index} className="popup-content" >
             <img src={item} style={{height:'500px',width:'auto',maxWidth:"100%"}} alt="Image 1" />
              
            </div>
            ))
          }
         <a onClick={(e)=>{closePopup()}} className="random-challenge-button">Close</a>
        </div>
      )}
      

    </div>
  );
}

export default LoveStoryWebsite;