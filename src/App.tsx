import Header from './components/Header';
import Hero from './components/Hero';
import TopRobots from './components/TopRobots';
import AboutUs from './components/AboutUs';
import Variations from './components/Variations';
import Reviews from './components/Reviews';
import OtherAI from './components/OtherAI';

//!Add animation styles for variation before deployment
function App() {
  return (
    <main>
      <Header />
      <Hero />
      <TopRobots />
      <AboutUs />
      <Variations />
      <Reviews />
      <OtherAI />
      <h2 className='font-body w-max mx-auto my-2 text-center font-semibold text-2xl relative'>
        Appreciation
        <span className='absolute bottom-1 -left-1 w-16 bg-[#252525] h-1'></span>
      </h2>
      <p className='text-[#252525] font-body font-bold text-center mb-3'>
        OCULUS x100
      </p>
      <p className='text-center font-body mb-3'>
        Thanks for viewing our AI's, we’ll be sure to keep up with our creation
        of AIs that will make work <br /> easier and faster for everyone. Watch
        out for our new release.
      </p>
      <footer className='min-h-[20vh] bg-[#252525] text-center text-white p-3'>
        <h2 className='font-body text-2xl'>
          OCULUS X100 &copy; {new Date().getFullYear()}
        </h2>
        <a href='#' className='block underline font-body'>
          Join our discord
        </a>
        <a href='#' className='block underline font-body'>
          Follow us on Twitter
        </a>
      </footer>
    </main>
  );
}
export default App;
