import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='bg-base-200 text-base-content'>

    <footer className="footer p-10 max-w-5xl mx-auto">
      <aside>
        <div>
          <img className='ms-9' src={logo} width={100} alt="logo" />
          <h3 className="text-2xl font-bold text-green-400 -mt-4">Mozammal Haq</h3>
        </div>
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
    </div>
  );
};

export default Footer;