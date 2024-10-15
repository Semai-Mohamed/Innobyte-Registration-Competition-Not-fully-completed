/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import image2 from './assets/img/PC.png'
import image3 from './assets/img/Ellipse 10 (1).png'
import image4 from './assets/img/Group 39.png'
import image5 from './assets/img/Group 43 (1).png'
import image6 from './assets/img/Group 54 (1).png'
import image7 from './assets/img/Group 56.png'
import image8 from './assets/img/Group 62.png'
import image9 from './assets/img/Group 78.png'
import image10 from './assets/img/Group 88.png'
import imgae11 from './assets/img/Keyboard.png'
import image12 from './assets/img/Logo.png'
import image13 from './assets/img/PC.png'
function Herosection() {
  useEffect(()=>{
   const innobyte = document.querySelectorAll(".innovate")
   const transition = document.querySelector(".transition")
   const mouseonhandler = ()=>{
    innobyte.forEach((byte )=>{
     byte.classList.toggle('opacity')
     console.log("iam mohamed")
    })
   }
transition.addEventListener('mouseover',mouseonhandler)
transition.addEventListener('mouseout',mouseonhandler)

return(()=>{
  transition.removeEventListener('mouseover',mouseonhandler)
  transition.removeEventListener('mouseout',mouseonhandler)
})
},[])
  return (
    <div className='herosection_color'>
    <div className='herosection'>
        <div className='herosection_main'>
      
        <div className='herosection_contenu'>
            <div className='herosection_main_contenu'>
                <div className='herosectinon_title'>INNOBYTE HACKATHON</div>
                <div className='herosection_future' ><div className='BYTE'>BYTE</div> BY <div className='BYTE2'>BYTE</div>, WE</div>
                <div className='herosection_future '><div className='transition'>INNO<div className='inno'><div className='innovate'>VA</div> <div className='innovate  opacity'>BY</div></div>TE</div><div className='future'>THE FUTURE.</div> </div>
                <div className='herosection_text'>Where Creativity and innovation Collide in Every Byte</div>
                <div className='herosection_registre'>REGISTRE NOW</div>
            </div>
            <div className='herosection_main_photo'>
<div className='herosection_green'></div>
<div className='pc'>
  <img src={image9} alt="" />
</div>
<div className='clavier'>
  <img src={imgae11} alt="" />
</div>
<div className='div_logo'>
  <img src={image12} alt="" />
</div>
<div className='div_date'>
  <div className='days'>
   DAYS HOURS MINUTES
  </div>
  <div className='minutes'>
00 : 00 : 00   
  </div>
</div>


            </div>
        </div>
        <div className='herosection_cote1'>
        </div>
        <div className='herosection_cote2'>
        </div>
        <div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Herosection