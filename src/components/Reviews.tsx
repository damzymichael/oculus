import {useEffect} from 'react';
// import {useReducer, useRef} from 'react';
import MovingText from './MovingText';

//! Add interacitvity for viewing more user's comment
export default () => {
  // const divRef = useRef<HTMLDivElement | null>(null);
  // const [moreElements, toggleMoreElements] = useReducer(state => !state, false);

  useEffect(() => {
    // console.log(divRef.current?.clientWidth);
    // console.log(divRef.current?.offsetWidth);
  });
  return (
    <div className='mt-8 border pt-5'>
      <MovingText className='top-0' />
      <section className='p-4 w-full'>
        <h1 className='relative w-max mx-auto text-center font-body font-semibold text-2xl mt-16 mb-10'>
          Users' reviews on our AIs
          <span className='absolute bottom-1 -left-1 w-16 bg-[#252525] h-1'></span>
        </h1>
        <p className='text-center font-body mb-7'>
          Here are some reviews on our competemt AI's
        </p>
        <div className='flex flex-wrap gap-12 lg:gap-16 justify-center p-10'>
          {Array.from({length: 4}).map((_, i) => (
            <div
              className='flex gap-4 items-center border-black border-2 p-4 relative rounded-lg w-full sm:w-4/5 md:w-3/5 lg:w-2/5'
              key={i}
            >
              <div
                className='w-1/5 aspect-square bg-slate-700 rounded-full absolute -top-[15%] sm:-top-[25%] -left-[8%] border-white border-[15px]'
                // ref={divRef}
              />
              <div className='ml-12'>
                <p className='font-body text-sm mb-3'>
                  Hey there I’m Jennifer lawrence i’m a content creator for
                  15years now ever since I started using mighionre my work as a
                  content creator has been more easier and faster, she’s a
                  really nice AI.
                </p>
                <p className='text-[#011F44] font-body font-bold text-sm'>
                  Jennifer Lawrence
                </p>
                <p className='text-xs'>
                  Software Developer at midjourney{' '}
                  <a href='#' className='underline italic text-[#011F44]'>
                    click here for developer’s bio
                  </a>{' '}
                </p>
              </div>
              <div className='w-1 h-28 bg-[#0d0d0d] absolute top-0 -right-5' />
            </div>
          ))}
        </div>
        <button className='font-body font-bold flex items-center mx-auto'>
          <span>View more users' comment</span>
          <div className='relative flex items-center -translate-y-[2px]'>
            <div className='w-2 h-[0.17rem] bg-[#0d0d0d] rounded-md inline-block rotate-[50deg] translate-x-[2px]' />
            <div className='w-2 h-[0.17rem] bg-[#0d0d0d] rounded-md inline-block -rotate-[50deg] -translate-x-[2px]' />
          </div>
        </button>
      </section>
    </div>
  );
};
