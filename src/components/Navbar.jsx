import logo from '../assets/logo.svg';

export default function Navbar() {
  return (
    <nav className='py-3 lg:px-[6.25rem] px-10 flex flex-col lg:flex-row justify-between items-center bg-white'>
      <div className='flex items-center gap-2 p-2.5 font-inter font-bold leading-[1.21rem] text-[#100A42]'>
        <img src={logo} alt='Logo' />
        <span>HelpMeOut</span>
      </div>

      <ul className='flex gap-[2.4375rem] capitalize font-work-sans font-medium leading-[1.173125rem] py-2.5 px-5'>
        <li>Features</li>
        <li>How it works</li>
      </ul>

      <button className='font-sora font-semibold text-[1.125rem] leading-[1.4175rem] py-3 px-2.5 text-[#120B48]'>
        Get Started
      </button>
    </nav>
  );
}
