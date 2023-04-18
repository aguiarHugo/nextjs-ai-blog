import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-wh-900 text-wh-50 p-10'>
      <div className='justify-between mx-auto gap-16 sm:flex'>
        {/* FIRST COLUMN */}
        <div className='mt-16 basis-1/2 sm:mt-0'>
          <h4 className='font-bold'>
            BLOG OF THE FUTURE
          </h4>
          <p className='my-5'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione sint 
            ipsum accusamus consectetur beatae provident consequatur itaque repellat 
            aliquid alias? Unde harum provident nobis mollitia quibusdam quod, vero consequuntur quia.
          </p>
          <p>
            &copy; Blog of the Future All Rights Reserved.
          </p>
        </div>

        {/* SECOND COLUMN */}
        <div className='mt-16 basis-1/4 sm:mt-0'>
          <h4 className='font-bold'>
            LINKS
          </h4>
          <p className='my-5'>
            Swimmer is surrounded by Orcas
          </p>
          <p className='my-5'>
            Diablo 4 coming soon!
          </p>
          <p className='my-5'>
            Sampaoli wants Alex Telles.
          </p>
        </div>

        {/* THIRD COLUMN */}
        <div className='mt-16 basis-1/4 sm:mt-0'>
          <h4 className='font-bold'>
            Contact Us
          </h4>
          <p className='my-5'>
            blogofthefuture@botf.com
          </p>
          <p className='my-5'>
            (333)425-6825
          </p>
        </div>
      </div>
      Footer
    </footer>
  )
}

export default Footer