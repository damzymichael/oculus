import MovingText from './MovingText';
import robot_1 from '../assets/3d-metal.png';

//! Responsiveness

const AboutUs = () => {
  return (
    <section className='about-us sm:min-h-[90vh] max-h-[500px] relative overflow-hidden sm:max-h-[400px]'>
      <MovingText className='-top-4 -left-10 -rotate-[12deg]' />
      <div className='flex items-center mt-5 flex-col sm:flex-row'>
        <img src={robot_1} alt='Mighiniore' className='w-2/5' />
        <p className='font-body text-base md:text-xl px-4'>
          Starbux has multiple AI variations as displayed in our website, many
          more will be displayed soon enough, each AI has their special
          functions as displayed in their AI description section, we have
          conducted our research and we have found out that to some extent
          humans need not just man-power help but also help from AI's regardless
          of the field of specialty humans find themselves in so we create AI's
          of different variations, of different field to help for the betterment
          of man's stress.
        </p>
      </div>
      {/* Change bottom on smal device  */}
      <MovingText className='-bottom-5 sm:-bottom-28 md:-bottom-24 lg:-bottom-6 -right-10 -rotate-[12deg] text-bottom-ani' />
    </section>
  );
};

export default AboutUs;
