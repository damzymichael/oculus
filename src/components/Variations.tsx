import {useRef} from 'react';
import {variations} from '../data';
import {useInView, motion} from 'framer-motion';

// {  once: true }
//!Fix mobile responsiveness
export default () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  return (
    <section className='min-h-[100px] p-3 '>
      <h2 className='font-body w-max mx-auto my-2 text-center font-bold text-3xl relative'>
        Our Variations
        <span className='absolute bottom-1 -left-1 w-20 bg-[#252525] h-1'></span>
      </h2>
      <p className='font-body text-center text-xl mb-3'>
        Here are some of our AI variations
      </p>
      {/* container  */}
      <motion.div
        className='flex flex-wrap justify-center gap-3'
        ref={containerRef}
      >
        {/* Children   */}
        {variations.map((robot, i) => (
          <div
            className='item w-full sm:w-2/5 md:w-[30%] p-4 border rounded-md'
            key={i}
            style={{
              transform: isInView ? 'none' : 'translateY(20px)',
              opacity: isInView ? 1 : 0,
              transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${
                0.2 + (i + 1) / 4
              }s`
            }}
          >
            <h3 className='font-body text-center uppercase text-xl mb-1'>
              {robot.name}
            </h3>
            <div className='w-12 h-1 bg-gray-900 mx-auto mb-3' />
            <div className='md:block gap-2 items-center justify-between md:justify-start'>
              <div className='relative mb-4 mx-auto w-1/3 sm:w-3/5 md:w-full'>
                <figure className='md:mx-auto bg-[#d9d9d9] md:w-[70%] aspect-square rounded-full flex items-center justify-center overflow-hidden flex-col '>
                  <img
                    src={robot.image}
                    className='w-4/5 mx-auto border-xl'
                    loading='lazy'
                  />
                  <figcaption className='hidden sm:block uppercase font-heading rotate-0 md:absolute bottom-[8%] right-[14%] bg-black text-white min-w-2/5 px-3 text-center md:-rotate-[30deg] text-xl'>
                    {robot.name}
                  </figcaption>
                </figure>
              </div>
              <div>
                <p className='font-body text-left md:text-center text-sm mb-2'>
                  Meet Siren, she’s a 2022 AI model with a highly sophisticated
                  AI model used for vocal manipulation.
                </p>
                <figure className='flex items-center gap-2 py-2'>
                  {/* <img src='' alt='' /> */}
                  <div className='w-[15%] aspect-square bg-slate-700 rounded-full' />
                  <figcaption className='leading-none'>
                    <h4 className='font-body font-bold'>Steve Elson</h4>
                    <p className='text-xs'>
                      Software Developer at Midjourney{' '}
                      <a href='#' className='underline'>
                        Click here for developer's bio
                      </a>
                    </p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
};
