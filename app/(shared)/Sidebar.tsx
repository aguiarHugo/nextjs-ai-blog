import React from 'react'
import SocialLinks from './SocialLinks'
import Subscribe from './Subscribe'
import Image from 'next/image'

import Ad2 from 'public/assets/ad-2.png'
import Profile from 'public/assets/about-profile.jpg'

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <section>
      <h4 className='bg-wh-900 py-3 px-5 text-wh-50 text-xs text-center font-bold'>
          Subscribe and Follow
      </h4>
      <div className='my-5 mx-5'>
        <SocialLinks isDark />
      </div>
      <Subscribe />
      <div className='bg-wh-900 my-8'>
        <Image
          className='hidden md:block my-8 w-full'
          alt="Advert 2"
          src={Ad2}
          width={500}
          height={1000}
          style={{ objectFit: "cover" }}
          placeholder='blur'
        />
      </div>
      <h4 className='bg-wh-900 py-3 px-5 text-wh-50 text-xs text-center font-bold'>
        About the Blog
      </h4>
      <div className='flex justify-center my-3'>
        <Image
            alt="Profile Pic"
            src={Profile}
            style={{width: "500px", height: "250px", objectFit: "cover" }}
            placeholder='blur'
          />
      </div>
      <h4 className='py-3 px-5 text-wh-500 text-center font-bold'>
        Geoffry Epstein
      </h4>
      <p className='text-wh-500 text-center text-sm'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eveniet praesentium, numquam suscipit 
        corrupti dolorum, adipisci asperiores nihil placeat nostrum eligendi.
      </p>
    </section>
  )
}

export default Sidebar