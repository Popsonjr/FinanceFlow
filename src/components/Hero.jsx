
import styles, { layout } from '../style'
import Button from './Button'
import { hero_laptop, mobile_hero_laptop } from '../assets'

const Hero = () => {
  return (
    <section className={`${layout.section} min-h-[760px] flex-col md:flex-row md:items-center`}>
      <div className='flex-1'>
        <h1 className={`${styles.h1} md:min-w-[738px]`}>Buy, trade, and hold <br className='hidden md:block'/> 350+ cryptocurrencies</h1>
        <p className={`${styles.paragraph} max-w-[568px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aenean dis placerat.</p>

        <div className='my-[28px] flex flex-col gap-[28px] md:flex-row'>
          <Button buttonStyles="bg-secondary md:w-[210px] h-[70px]" />
          <Button buttonText="view pricing" buttonStyles="bg-buttonDimBlack md:w-[191px] h-[70px]" />
        
        </div>
      </div>
      <div className='flex-1 justify-center w-full h-full'>
        <img className='hidden md:block object-contain absolute top-[218px] w-max-[971px] h-max-[585px] z-[1]' alt='hero-image' src={hero_laptop} />
        <div className="absolute w-[30%] h-[30%] bottom-[0%] right-[0%] rounded-full green__gradient"></div>
        <img className='md:hidden object-contain w-full min-w-[358px] min-h-[215px]' alt='hero-image' src={mobile_hero_laptop} />
      </div>
      

    </section>
  )
}

export default Hero