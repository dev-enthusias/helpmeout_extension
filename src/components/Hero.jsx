import lady from '../assets/lady.jpg';
import woman from '../assets/woman.jpg';
import father from '../assets/fatherson.png';
import arrow from '../assets/arrow-right.svg';

export default function Hero() {
  return (
    <header className='flex flex-col lg:flex-row gap-y-5 p-10 items-center justify-between lg:px-[6.25rem] lg:py-[10.125rem] bg-white mb-[3.5rem]'>
      <section className='lg:w-[34.25rem] w-full'>
        <h1 className='font-sora font-bold lg:text-[4rem] text-5xl leading-[4rem] text-[#141414] mb-5'>
          Show Them <br /> Dont Just Tell
        </h1>
        <p className='font-inter text-xl opacity-75 mb-12'>
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website.
        </p>
        <button className='rounded-lg py-[1.375rem] px-6 flex items-center gap-2.5 text-white bg-[#120B48] font-work-sans font-medium text-[1.125rem] leading-[1.319375rem]'>
          Install HelpMeOut{' '}
          <span>
            <img
              src={arrow}
              alt='right arrow'
              className='w-full h-full object-cover'
            />
          </span>
        </button>
      </section>

      <section className='grid grid-rows-2 grid-cols-2 gap-5 w-full lg:w-1/2'>
        <div className='border rounded-lg overflow-hidden'>
          <img
            src={woman}
            alt='An elderly woman watching a video on her laptop'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='row-start-2 rounded-lg overlow-hidden self-end'>
          <img src={father} alt='A man with his son watching a video happily' />
        </div>
        <div className='row-start-1 row-span-2 cols-start-2 overflow-hidden rounded-lg border'>
          <img
            src={lady}
            alt='A lady sitting on a sofa happily watching a video on her phone'
            className='w-full h-full object-cover'
          />
        </div>
      </section>
    </header>
  );
}
