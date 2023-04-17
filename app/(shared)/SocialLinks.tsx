import React from 'react';
import Image from 'next/image';
import twitter from 'public/assets/social_twitter.png';
import instagram from 'public/assets/social_instagram.png';
import discord from 'public/assets/social_discord.png';
import facebook from 'public/assets/social_facebook.png';
import google from 'public/assets/social_google.png';


type Props = {
  isDark?: boolean;
}

const SocialLinks = ({ isDark = false }: Props) => {
  return (
    <div className='flex justify-between items-center gap-7'>
      <a href='https//twitter.com' target='_blank' rel='noreferrer'>
        <Image
          className={ `${isDark ? 'brightness-0' : ' '} hover:opacity-50`}
          alt='twitter'
          src={twitter}
          width={20}
          height={20}
        />
      </a>

      <a href='https//instagram.com' target='_blank' rel='noreferrer'>
        <Image
          className={ `${isDark ? 'brightness-0' : ' '} hover:opacity-50`}
          alt='instagram'
          src={instagram}
          width={20}
          height={20}
        />
      </a>

      <a href='https//facebook.com' target='_blank' rel='noreferrer'>
        <Image
          className={ `${isDark ? 'brightness-0' : ' '} hover:opacity-50`}
          alt='facebook'
          src={facebook}
          width={20}
          height={20}
        />
      </a>

      <a href='https//discord.com' target='_blank' rel='noreferrer'>
        <Image
          className={ `${isDark ? 'brightness-0' : ' '} hover:opacity-50`}
          alt='discord'
          src={discord}
          width={20}
          height={20}
        />
      </a>
      <a href='https//google.com' target='_blank' rel='noreferrer'>
        <Image
          className={ `${isDark ? 'brightness-0' : ' '} hover:opacity-50`}
          alt='google'
          src={google}
          width={20}
          height={20}
        />
      </a>
    </div>
  )
}

export default SocialLinks