import robot_1 from '../assets/3d-metal.png';
import robot_2 from '../assets/female-cyborg.png';
import robot_3 from '../assets/3d-texture.png';
import robotAiHead from '../assets/head-bg.png';
import robot_head_blue from '../assets/robot-head-blue.png';
import robot_ai_3d from '../assets/robot-ai-3d.png';
import head_stripe from '../assets/head-stripe.png';

export default () => {
  const images = [
    robot_1,
    robot_2,
    robot_3,
    robotAiHead,
    robot_head_blue,
    robot_ai_3d,
    head_stripe
  ];

  const generatedAIs = [...images, ...images, ...images, ...images];
  return (
    <section>
      <h2 className='font-body w-max mx-auto my-2 text-center font-semibold text-2xl relative'>
        Other 2022 AI's
        <span className='absolute bottom-1 -left-1 w-16 bg-[#252525] h-1'></span>
      </h2>
      <h3 className='font-body text-center mb-10'>
        There are list of other 2022 AI's you should know about
      </h3>

      <div className='marquee-section absolute moving-ai'>
        <div className='marquee-div moving-ai'>
          <div className='marquee flex gap-2 md:gap-0 min-h-[80vh]'>
            {generatedAIs.map((ai, i) => (
              <div
                key={i}
                className={
                  ((i + 1) % 2 === 0 ? 'translate-y-20 ' : '') +
                  'w-[3%] sm:w-[5%] md:w-[10%] flex-shrink-0'
                }
              >
                <h3 className='font-body text-center uppercase text-lg'>
                  zodd
                </h3>
                <div className='w-12 h-1 bg-gray-900 mx-auto mb-3' />

                {/* Image and caption  */}
                <figure className='md:mx-auto bg-[#d9d9d9] md:w-[70%] aspect-square rounded-full flex items-center justify-center overflow-hidden flex-col '>
                  <img
                    src={ai}
                    className='w-4/5 mx-auto border-xl'
                    loading='lazy'
                  />
                </figure>
                <p className='font-body text-xs text-center'>
                  Check AI description
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
