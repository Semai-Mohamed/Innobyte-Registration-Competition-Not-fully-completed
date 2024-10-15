/* eslint-disable eqeqeq */
import React, { useEffect } from 'react'
import image13 from './assets/img/Group 80.png'
import styled, { keyframes } from 'styled-components';
// import image14 from './assets/img/download (1) 1.png'


function Syphax() {
 
 
    useEffect(() => {
      const hotel = document.querySelector('.syphax_hotel');
      const title = document.querySelector('.syphax_title');
      const logo = document.querySelector('.syphax_photo');
      const text = document.querySelector('.syphax_text');
      const background = document.querySelector(".syphax_background")
      const location = document.querySelector(".syphax_location")
        const scrollHandler = () => {

          var scrollAmount = window.scrollY || document.documentElement.scrollTop;
          console.log(scrollAmount)
          if (scrollAmount > 700 && scrollAmount<1300) {

            hotel.style.animation = 'syphax_hotel 1s ease,syphax_opacity 1.5s ease';
            hotel.style.top = '0px'
            hotel.style.opacity = '1'
            location.style.animation = 'syphax_background 2s ease,syphax_opacity_background   2s ease'
            location.style.top = '0px'
            location.style.opacity = '1'
            title.style.animation = 'syphax_title 1s ease,syphax_opacity 1.5s ease';
            title.style.top = '0px'
            title.style.opacity = '1'
            logo.style.animation = 'syphax_opacity_background  2s ease, syphax_photo 2s ease';
            logo.style.right ='0px' 
            logo.style.opacity = '1'
            text.style.animation = '2s syphax_text ease, 2s syphax_opacity_background ease';
            text.style.left = '0px'
            text.style.opacity = '1'
            background.style.animation = 'syphax_background 2s ease,syphax_opacity_background   2s ease'
            background.style.top = '0px'
            background.style.opacity = '1'
          }
          else{
            if(scrollAmount<600 || scrollAmount>1400){
          
            hotel.style.animation = 'syphax_hotel2 2s ease,syphax_opacity2 0.1s ease';
         
            hotel.style.top = '200px'
            hotel.style.opacity = '0'
            location.style.top = '400px'
            location.style.opacity = '0'
            title.style.top = '200px'
            title.style.opacity = '0'
            logo.style.right ='800px' 
            logo.style.opacity = '0'
            text.style.left = '800px'
            text.style.opacity = '0'
            background.style.top = '400px'
            background.style.opacity = '0'
         
           
            location.style.animation = 'syphax_background2 1s ease,syphax_opacity_background2   0s ease'
          
            title.style.animation = 'syphax_title2 2s ease,syphax_opacity2 0s ease';
           
            logo.style.animation = 'syphax_opacity_background2  0s ease, syphax_photo2 1s ease';
         
            text.style.animation = '2s syphax_text2 ease, 0s syphax_opacity_background2 ease';
          
            background.style.animation = 'syphax_background2 1s ease,syphax_opacity_background2   0s ease'
          
           
          }
        }
      };
        window.addEventListener('scroll', scrollHandler);
            return () => {
          window.removeEventListener('scroll', scrollHandler);
        };
      }, []);



    return (
    <div className='syphax'>
<div className='syphax_title'>
EVENT LOCATION
</div>
<div className='syphax_hotel'>
SYPHAX HOTEL
</div>
<div className='syphax_main_contenu'>
   
    <div className='syphax_logo'>
        {/* <div className='hotel'>hotel</div>
        <div className='SYPHAX'>SYPHAX</div>
        <div className='SPA'>RESORT & SPA</div> */}
    </div>
    <div className='syphax_contenu'>
        <div className='syphax_background'></div>
        <div className='syphax_photo'>
            <img src={image13} alt="" />
        </div>
        <div className='syphax_text'>
        Syphax Hotel offers a comfortable and welcoming retreat for visitors. As a 3-star establishment, it combines affordability with a range of amenities. It is an ideal choice for those seeking a modest yet comfortable stay in a picturesque Algerian setting.
        </div>
    </div>
</div>
<div className='syphax_location'>View location</div>
</div>


  )
}

export default Syphax