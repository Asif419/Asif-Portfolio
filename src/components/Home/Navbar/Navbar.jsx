import './Navbar.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiBook, BiMessageDetail } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BsBagCheck } from 'react-icons/bs';
import { useState } from 'react';

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  
  return (
    <nav>
      <a href="#" className={`a-icon ${activeNav === '#' ? 'active' : ''}`} onClick={() => setActiveNav('#')}><AiOutlineHome /></a>
      <a href="#about" className={`a-icon ${activeNav === 'about' ? 'active' : ''}`} onClick={() => setActiveNav('about')}><AiOutlineUser /></a>
      <a href="#experience" className={`a-icon ${activeNav === 'experience' ? 'active' : ''}`} onClick={() => setActiveNav('experience')}><BiBook /></a>
      <a href="#services" className={`a-icon ${activeNav === 'services' ? 'active' : ''}`} onClick={() => setActiveNav('services')}><RiServiceLine /></a>
      <a href="#portfolio" className={`a-icon ${activeNav === 'portfolio' ? 'active' : ''}`} onClick={() => setActiveNav('portfolio')}><BsBagCheck /></a>
      <a href="#contact" className={`a-icon ${activeNav === 'contact' ? 'active' : ''}`} onClick={() => setActiveNav('contact')}><BiMessageDetail /></a>
    </nav>
  );
};

export default Navbar;