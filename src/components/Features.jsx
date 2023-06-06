import styles, {layout} from "../style"
import { FeatureCards } from "../constants"
import {Button} from "../components"


const FeatureBox = ({title, logo, content}) => {
    return (
        <div className="bg-cardBoxTransparent w-full md:max-w-[364px] min-h-[295px] rounded-[40px] py-[48px] ps-[24px] pe-[22px] mb-[16px] md:mb-0">
            <img className="w-[68px] h-[68px] mb-[20px]" src={logo} alt="feature-card-logo" />
            <h4 className={`${styles.h4} uppercase my-[7px]`}>{title}</h4>
            <p className={`${styles.smallParagraph}`}>{content}</p>
        </div>
    )
}

const Features = () => {
  return (
    <section className={`${layout.section} flex-col justify-center items-center relative`}>
        <h2 className={`${styles.h2} mb-[15px]`} >Build your crypto portfolio</h2>
        <p className={`${styles.paragraph} mb-[16px] md:mb-[80px] md:max-w-[496px] md:text-center`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat nulla suspendisse tortor aene.</p>
        <div className="absolute w-[45%] h-[25%] md:h-[35%] bottom-[70%] md:bottom-[45%] md:right-[3%] rounded-full green__gradient"></div>
        <div className="md:grid grid-flow-col gap-x-[27px] gap-y-7 max-w-full">
            
        {FeatureCards.map((card, index) => (
            index !== 2 ? <FeatureBox key={card.id} {...card} /> : 
            <div key={card.id} className="row-span-2 bg-secondary rounded-[40px] w-full md:max-w-[477px] md:max-h-[622px] pt-[44px] px-[33px] flex flex-col mb-[16px] md:mb-0 ">
                <h4 className={`${styles.h4} text-[20px] uppercase mb-[22px]`}>{card.title}</h4>
                <p className={`${styles.smallParagraph} mb-[37px]`}>{card.content}</p>
                <img className="h-full object-bottom object-contain overflow-hidden" src={card.logo} alt={card.title}/>
            </div>
            
        ))}

        </div>
        
        <Button buttonStyles="bg-secondary md:w-[210px] h-[70px] my-[40px] md:my-[48px]" />

    </section>
  )
}

export default Features