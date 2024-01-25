import {topThreeRobots} from '../data';

// breakpoint md : 768px
//adjust tag
export default () => {
  return (
    <section className='min-h-sreen '>
      <h1 className='mt-10 font-body text-2xl font-semibold text-center'>
        Meet Our Top Three
      </h1>
      <p className='text-center font-body mb-6 px-4 sm:p-0'>
        We will introduce our AI starting from the top three most daunting
      </p>
      {/* Container  */}
      <div className='flex justify-center items-center flex-col md:flex-row mb-3 gap-3 md:gap-0'>
        {topThreeRobots.map((robot, i) => (
          <div
            className={
              'w-[90%] md:w-[30%] p-7 border rounded-2xl ' +
              (i === 1 ? 'shadow-oc' : 'md:scale-90')
            }
            key={i}
          >
            <h3 className='font-body text-left md:text-center uppercase text-xl mb-1'>
              {robot.name}
            </h3>
            <div className='w-12 h-1 bg-gray-900 mr-auto md:mx-auto mb-3' />
            <div className='flex md:block gap-2 items-center justify-between md:justify-start'>
              <div className='relative mb-4 w-3/5 md:w-full'>
                <figure className='md:mx-auto bg-[#d9d9d9] md:w-[70%] aspect-square rounded-full flex items-center justify-center overflow-hidden flex-col '>
                  <img
                    src={robot.robotImg}
                    className={
                      'w-1/2 mx-auto border-xl ' +
                      (i === 0 ? 'scale-[1.7]' : 'scale-150')
                    }
                    loading='lazy'
                  />
                  <figcaption className='hidden sm:block uppercase font-heading rotate-0 md:absolute bottom-[8%] right-[14%] bg-black text-white min-w-2/5 px-3 text-center md:-rotate-[30deg] text-xl'>
                    {robot.name}
                  </figcaption>
                </figure>
              </div>
              <div>
                <p className='font-body text-left md:text-center text-sm mb-2'>
                  {robot.description}
                </p>
                <figure className='flex items-center gap-2 py-2'>
                  {/* <img src='' alt='' /> */}
                  <div className='w-1/5 aspect-square bg-slate-700 rounded-full' />
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
      </div>
    </section>
  );
};
