export default ({className}: {className?: string}) => {
  return (
    <div className={'marquee-section bg-[#252525] absolute ' + className}>
      <div className='marquee-div '>
        <div className='marquee'>
          {Array.from({length: 30}).map((_, i) => (
            <span key={i} className='font-heading text-white'>
              oculus x100{' '}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
