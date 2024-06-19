"use client"

import React, { useEffect, useRef, useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { LuMaximize2 } from "react-icons/lu";
import { CiBellOn } from "react-icons/ci";
import { IoCloseCircle, IoMenu } from "react-icons/io5";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
function Page() {

const [isBlack,setIsBlack]= useState(false)
const [open,setOpen]= useState(false)
const HeroVideo = useRef<HTMLVideoElement | null>(null);
const CardVideo = useRef<HTMLVideoElement | null>(null);

const ModalVideo = useRef<HTMLVideoElement | null>(null);


const onCloseModal = ()=>{

  setOpen(false);

}
const handleScroll = ()=>{

if (window.scrollY>0){

  setIsBlack(true)
}else{

  setIsBlack(false) 
}
}

const HandleMouseEnter =()=>{

  setTimeout(()=>{

    CardVideo.current?.play()
  
   },3000)
}

const HandleModalLeave = ()=>{

  setTimeout(()=>{

    ModalVideo.current?.pause()

   if (ModalVideo.current){

    ModalVideo.current.src=""
     
    ModalVideo.current.src="/inception.mp4"
   }
  
   },1000) 
}
const HandleMouseLeave = ()=>{

  setTimeout(()=>{

    CardVideo.current?.pause()

   if (CardVideo.current){

     CardVideo.current.src=""
     
     CardVideo.current.src="/inception.mp4"
   }
  
   },1000) 
}
const HandleModalEnter =()=>{

  setTimeout(()=>{

    ModalVideo.current?.play()
  
   },3000)
}

  useEffect(()=>{

    window.addEventListener('scroll',handleScroll)
   
 setTimeout(()=>{

  HeroVideo.current?.play()

 },5000)

  },[])
  return (
  <div>

   <div className='h-[450px] overflow-hidden w-screen '>

   <video 

muted
   ref={HeroVideo}
   poster="https://i.ytimg.com/vi/Se5NBKNcsy4/maxresdefault.jpg" 
   className='w-screen scale-150 '
   src='/inception.mp4'
 
   id="IMAGE" >


</video>
<div className=' absolute top-0'>

<nav className={`  px-6 delay-75 duration-500 fixed CENTER justify-between  w-screen h-[50px] ${isBlack?"bg-black":" bg-transparent "}`}>

<div className=' CENTER gap-2'>

<img src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940" alt=""  className=' w-[50px] rounded-md'/>


<ul className='hidden sm:flex CENTER gap-2 text-[8px] text-white'>

  <li className=' group'> <a href="" className=' HOVERMUTED'> Home</a></li>
  <li className=' group'> <a href="" className='  HOVERMUTED '> TV Shows</a></li>
  <li className=' group'> <a href="" className='  HOVERMUTED'> Movies</a></li>
  <li className=' group'> <a href="" className='  HOVERMUTED'> New & Popular</a></li>
  <li className=' group'> <a href="" className='  HOVERMUTED'> My List</a></li>
  <li className=' group'> <a href="" className='  HOVERMUTED'> Brows by language</a></li>
</ul>
</div>

<IoMenu className=' sm:hidden text-white'/>
<div className=' hidden sm:flex pr-3 CENTER gap-3 text-white'>

<IoIosSearch />
<div className=' relative'>

<CiBellOn />

<div className=' bg-red-700 w-3 h-3 rounded-full text-[7px] CENTER absolute -top-1 left-[8px]  '> 3  </div>
</div>

<img src="https://cdnb.artstation.com/p/assets/images/images/033/885/779/large/caio-fernandes-1288b8b9-187d-4812-a73f-1dd14c9bb8d3.jpg?1610822483" alt="" className='h-[18px] rounded-sm' />
</div>
</nav>
</div>
   </div>


<div className='  p-6 pl-12  bg-[#141414]  w-screen h-[300px]'>

<div

onMouseEnter={()=>{
  HandleMouseEnter();
}}

onMouseLeave={()=>{
  HandleMouseLeave();
}}
className=' relative hover:cursor-pointer backdrop:delay-300 duration-500 hover:scale-150 top-0 hover:-top-[90px] group w-[120px] bg-[#0a0a0a] shadow-lg rounded-sm' >

  <div id="TOP" className=' rounded-sm w-[120px] h-[70px] overflow-hidden'>
  <video 

muted
   ref={CardVideo}
   poster="https://i.ytimg.com/vi/Se5NBKNcsy4/maxresdefault.jpg" 
   className=' w-[120px] scale-150 '
   src='/inception.mp4'
 
   id="IMAGE" >


</video>
  </div>

  <div id="BOTTOM" className='p-0 group-hover:p-2 duration-300 group-hover:h-[50px] h-0 overflow-hidden'>


    <div onClick={()=>{  setOpen(true);}} className=' bg-[#1e1e1e]  CENTER rounded-ms w-[20px] h-[20px]'>

    <LuMaximize2 size={12} color="white"/>
    </div>
  </div>
</div>


</div>

<Modal

styles={{

 modal:{

  backgroundColor:'#141414',
  padding:0,
  borderRadius:10
 }
}}

closeIcon={<IoCloseCircle color="white" />}

open={open} onClose={onCloseModal} center>


<div

onMouseLeave={()=>{

  HandleModalLeave()
}}
onMouseEnter={()=>{HandleModalEnter()}} className='  flex flex-col relative  h-[700px] w-[550px] rounded-sm'>

<div className=' overflow-hidden h-[500px] w-[100%]'>

<video 

muted
   ref={ModalVideo}
   poster="https://i.ytimg.com/vi/Se5NBKNcsy4/maxresdefault.jpg" 
   className=' w-[100%] scale-150 '
   src='/inception.mp4'
 
   id="IMAGE" >


</video>

</div>

<div id="BOTTOM" className=' relative -top-[130px] z-10 p-2 duration-300 h-[100%] overflow-hidden  bg-gradient-to-b from-transparent from-10% via-[#141414] via-30% to-[#141414] to-90%'>


   
  </div>
</div>




      </Modal>
  </div>
  )
}

export default Page
