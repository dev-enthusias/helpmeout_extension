import video from '../assets/video.jpg';
import record from '../assets/record.svg';
import refresh from '../assets/refresh.svg';
import send from '../assets/send.svg';

export default function Features() {
  return (
    <section className='bg-white lg:px-[6.25rem] p-10 lg:py-20 mb-[4.375rem]'>
      <h2 className='text-[#141414] font-sora font-bold text-[2.5rem] leading-[3.15rem] text-center mb-2'>
        Features
      </h2>
      <p className='text-center font-work-sans text-[#616163] text-xl leading-[1.89125rem] mb-16'>
        Key Highlights of Our Extension
      </p>

      <div className='flex flex-col lg:flex-row gap-y-10 justify-between items-center '>
        <section className='w-full lg:w-[34.25rem] flex flex-col gap-12'>
          <article className='flex gap-4 items-start'>
            <div className='bg-[#413C6D] p-2 rounded-full w-12'>
              <img src={record} alt='A record icon' />
            </div>
            <div>
              <h3 className='font-inter font-semibold text-[1.75rem] leading-[2.118125rem] text-[#1B233D] mb-2'>
                Simple Screen Recording
              </h3>
              <p className='font-work-sans text-xl leading-[1.89125rem] text-[#616163]'>
                Effortless screen recording for everyone. Record with ease, no
                tech expertise required.
              </p>
            </div>
          </article>
          <article className='flex gap-4 items-start'>
            <div className='bg-[#413C6D] p-2 rounded-full w-12'>
              <img src={send} alt='A send icon' />
            </div>
            <div>
              <h3 className='font-inter font-semibold text-[1.75rem] leading-[2.118125rem] text-[#1B233D] mb-2'>
                Easy-to-Share URL
              </h3>
              <p className='font-work-sans text-xl leading-[1.89125rem] text-[#616163]'>
                Share your recordings instantly with a single link. No
                attachments, no downloads.
              </p>
            </div>
          </article>
          <article className='flex gap-4 items-start'>
            <div className='bg-[#413C6D] p-2 rounded-full w-12'>
              <img src={refresh} alt='A refresh icon' />
            </div>
            <div>
              <h3 className='font-inter font-semibold text-[1.75rem] leading-[2.118125rem] text-[#1B233D] mb-2'>
                Revisit Recordings
              </h3>
              <p className='font-work-sans text-xl leading-[1.89125rem] text-[#616163]'>
                Access and review your past content effortlessly. Your
                recordings, always at your fingertips.
              </p>
            </div>
          </article>
        </section>

        <section>
          <img src={video} alt='video of how helpmeout extension works' />
        </section>
      </div>
    </section>
  );
}
