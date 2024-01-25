import robotAiHead from '../assets/head-bg.png';
import {motion} from 'framer-motion';
import MovingText from './MovingText';

function Hero() {
  return (
    <section className='hero-oc'>
      <h2 className='font-[400] text-4xl font-heading'>
        -<span>S</span>TARBUX X100-
      </h2>
      <p className='font-body mt-4 text-base sm:text-lg'>
        We are introducing our top twenty highly sophisticated and <br />
        daunting AI of the year 2022
      </p>
      <div className='eclipse'></div>
      <div className='flex flex-col gap-1 sm:flex-row mt-4 items-center justify-center sm:gap-10 md:gap-14 md:-translate-y-0 lg:-translate-y-14 xl:-translate-y-16 pl-4'>
        <div className='trans-text -translate-x-10 sm:-translate-x-0 mt-4 sm:mt-0 self-start sm:self-center'>
          <h1 className='text-[4.7rem] sm:text-[5rem] md:text-[6rem] lg:text-[7.5rem] xl:text-9xl font-heading font-bold'>
            OCULUS- <br /> X100
          </h1>
        </div>

        <div className='img-container'>
          <motion.img
            src={robotAiHead}
            alt='robot-head'
            className='mx-auto block object-contain w-full xl:w-[80%] aspect-square'
            initial={{scale: 1.1}}
            animate={{scale: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 1.2}}
          />
        </div>
      </div>

      <MovingText className='sm:bottom-16 -right-10 -rotate-[20deg] hero-text-animation' />
    </section>
  );
}

export default Hero;

// absolute bottom-16 -right-10 -rotate-[20deg]
