import Logo from '../components/logo';

export default function Footer() {
  return (
    <footer className='bg-[#120B48] lg:py-[6.125rem] py-[3rem] lg:px-[8.125rem] px-[4rem] flex flex-col lg:flex-row gap-5 justify-between items-start text-white'>
      <div className='flex items-center gap-2 p-2.5 font-inter font-bold leading-[1.21rem]'>
        <Logo />
        <span>HelpMeOut</span>
      </div>
      <div className='flex flex-col lg:flex-row justify-between gap-[5rem] lg:gap-[13.75rem] font-work-sans leading-[1.173125rem]'>
        <ul className='flex flex-col gap-[1.375rem]'>
          <li className='font-sora font-semibold leading-[1.26rem]'>Menu</li>
          <li>Home</li>
          <li>Converter</li>
          <li>How it Works</li>
        </ul>
        <ul className='flex flex-col gap-[1.375rem]'>
          <li className='font-sora font-semibold leading-[1.26rem]'>
            About Us
          </li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
        </ul>
        <ul className='flex flex-col gap-[1.375rem]'>
          <li className='font-sora font-semibold leading-[1.26rem]'>
            Screen Record
          </li>
          <li>Browser Window</li>
          <li>Desktop</li>
          <li>Application</li>
        </ul>
      </div>
    </footer>
  );
}
