import { FaGithub, FaFacebookSquare } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div className="header__socials flex mb-5 gap-2 justify-center">
      <a href="https://www.linkedin.com/in/asifshahariar419/" rel='noreferrer' target="_blank" className='a-icon'><BsLinkedin className='w-8 h-8 text-blue-400 hover:text-white transition-colors duration-400 ease-in' /></a>
      <a href="https://github.com/Asif419" rel='noreferrer' target="_blank" className='a-icon'><FaGithub className='w-8 h-8 text-blue-400 hover:text-white transition-colors duration-400 ease-in' /></a>
      <a href="https://www.facebook.com/asifshahariar419/" rel='noreferrer' target="_blank" className='a-icon'><FaFacebookSquare className='w-8 h-8 text-blue-400 hover:text-white transition-colors duration-400 ease-in' /></a>
    </div>
  );
};

export default HeaderSocials;