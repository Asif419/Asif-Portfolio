import CV from '../../../assets/CV/Asif-Shahariar-CV.pdf'

const CTA = () => {
  return (
    <div className="cta flex gap-5 w-full justify-center">
      <a href={CV} download className='btn-as'>Download CV</a>
      <a href="#contact" className='btn-as btn-as-primary'>Let's Talk</a>
    </div>
  );
};

export default CTA;