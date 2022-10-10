import { Link, animateScroll as scroll } from 'react-scroll'

function Footer() {


  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">ПОСЕТИ БЪЛГАРИЯ</h1>
                <p className="footer-text">
                  Запознай се с природата и посети най-красивите обекти и природни явления в България.

                </p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Линкове</p>
                <ul>
                  <li>
                    <Link
                      spy={true}
                      smooth={true}
                      duration={1000}
                      to="headerbg"
                    > Начало </Link>
                  </li>
                  <li>
                    <Link to="services" spy={true} smooth={true} duration={1000} > Услуги </Link>
                  </li>
                  <li>
                    <Link to="about-scroll" spy={true} smooth={true} duration={1000}>За нас  </Link>
                  </li>
                  <li>
                    <Link to="contact" spy={true} smooth={true} duration={1000}> Контакти  </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Контакти</p>
                <ul>
                  <li>
                    <Link to="#" >Email: visitbulgaria@gmail.com</Link>
                  </li>
                  <li>
                    <Link to="#" > Plovdiv, Bulgaria</Link>
                  </li>
                  <li>
                    <Link to="#" >Phone: 0212 444 44 44</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Социални медии</p>
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/darkleas" > Github</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/burhankocadag0" > Twitter</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/burhan-kocada%C4%9F-49a3331a5/"> Linkedin</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>

    </footer>
  );
}
export default Footer;
