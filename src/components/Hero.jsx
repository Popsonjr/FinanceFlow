import React from 'react'
import styles, { layout } from '../style'
import Button from './Button'
import { hero_laptop, mobile_hero_laptop } from '../assets'

const Hero = () => {
  return (
    <section className={`${layout.section} min-h-[760px] flex-col md:flex-row`}>
      <div className='flex-1'>
        <h1 className={`${styles.h1}`}>Buy, trade, and hold <br /> 350+ cryptocurrencies</h1>
        <p className={`${styles.paragraph} max-w-[568px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat.</p>

        <div className='my-[28px] flex flex-col gap-[28px] md:flex-row'>
          <Button buttonStyles="bg-secondary md:w-[210px] h-[70px]" />
          <Button buttonText="view pricing" buttonStyles="bg-buttonDimBlack md:w-[191px] h-[70px]" />
        
        </div>
      </div>
      <div className=''>
        <img className='hidden md:block object-contain absolute top-[218px] right-[-160px] w-[971px] h-[585px]' alt='hero-image' src={hero_laptop} />
        <img className='md:hidden object-contain w-[358px] h-[215px]' alt='hero-image' src={mobile_hero_laptop} />
      </div>

    </section>
  )
}

export default Hero