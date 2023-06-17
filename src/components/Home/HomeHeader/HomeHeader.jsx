import CTA from './CTA';
import './HomeHeader.css';
import asifImage from '../../../assets/image/asif.png';
import HeaderSocials from './HeaderSocials';

const HomeHeader = () => {
  return (
    <header className='min-h-[100vh]'>
      <div className="container header__container text-center">
        <div className='pt-10 md:pt-20 pb-7 md:pb-10'>
          <h5>Hello I'm</h5>
          <h1>Md <span className='text-blue-300'>A</span>sif <span className='text-blue-300'>S</span>hahariar</h1>
          <h5 className='text-light pb-2 md:pb-4'>Software Engineer</h5>
          <HeaderSocials></HeaderSocials>
        </div>
        <CTA></CTA>

        <div className="asif mx-auto">
          <img src={asifImage} alt="asif" />
        </div>

      </div>
    </header>
  );
};

export default HomeHeader;