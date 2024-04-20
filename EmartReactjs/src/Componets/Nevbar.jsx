import React from 'react'
import image9 from "../assets/asset 9.webp";
import image10 from "../assets/asset 10.webp";
import image24 from "../assets/asset 24.webp"
import image25 from "../assets/asset 25.webp"
import image26 from "../assets/asset 26.webp"
import image11 from "../assets/asset 11.webp"
import image12 from "../assets/asset 12.webp"
import image13 from "../assets/asset 13.webp"
import image14 from "../assets/asset 14.webp"
import image15 from "../assets/asset 15.webp"
import image16 from "../assets/asset 16.webp"
import image17 from "../assets/asset 17.svg"
import image30 from "../assets/asset 30.webp"
import image21 from "../assets/asset 21.webp"
import image2 from "../assets/asset 2.webp"
import image3 from "../assets/asset 3.webp"







const PageNo1 = () => {
  return (


    <div className=''>
  <div className='flex justify-between flex-wrap'>
    <div className='w-full sm:w-[530px] ms-10'>
      <h1 className='text-6xl font-medium ms-9 mt-40 text-center sm:text-left font-serif'>Plant a tree for better world</h1>
      <h1 className='text-6xl font-medium text-center sm:text-left ms-10 font-serif'>better world</h1>
      <p className='text-wrap text-center sm:text-left text-zinc-400 mt-5 ms-24'>Rectangle follower distribute device layer. Library hand</p>
      <p className='text-wrap text-center sm:text-left ms-14 text-zinc-400'>ellipse device strikethrough.</p>
      <div className='flex justify-center sm:justify-start ms-10'>
        <button className='border-2 border-solid border-black p-3 mt-5 text-black hover:bg-black hover:text-white h-11 w-44'>Shop Now</button>
      </div>
    </div>
    <div className='flex mt-6 sm:mt-0 sm:me-6'>
      <img className='max-h-[450px] mt-20 hidden sm:block palnt-1 max-h-[700px]' src={image9} alt="" />
      <img className='max-h-[600px] plant-2 ms-5' src={image10} alt="" />
    </div>
  </div>

  <div>
    <div className='flex justify-end'>
      <p className='text-5xl mt-14'>Shop by categories</p>
    </div>

    <div className='flex flex-wrap justify-around mt-4'>
      {/* <!-- Shop by categories images --> */}
    </div>
  </div>

  <div className='mt-14'>
    <p className='text-4xl semi-bold text-center'>Best interior plants</p>
    <p className='text-current text-center mt-5'>Rectangle follower library hand ellipse device strikethrough.</p>

    {/* <!-- Best interior plants images --> */}
  </div>

  <div className='w-auto h-24 bg-slate-300 mt-5'>
    {/* <!-- Free shipping content --> */}
  </div>

  <div class="image-container">
    {/* <!-- Find your perfect gardening tools --> */}
  </div>

  <div className='mt-15'>
    <h2 className='text-4xl mt-7 ms-9'>New arrivals</h2>
    <div className='flex flex-wrap justify-around relative'>
      {/* <!-- New arrivals images --> */}
    </div>

    <div className='mt-20'>
      <hr />
    </div>

    <footer>
      {/* <!-- Newsletter subscription --> */}
    </footer>
  </div>
</div>

  )
}

export default PageNo1