import "../Footer/Footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
        <div className="footer__contact">
          <p className="footer_text">English Cards - helps you to learn new words easely</p>
          <p className="contact__item">
            <a
              href="https://github.com/271090"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__link"
            >
              2023 OLGA MALYSHEVA
            </a>
          </p> 
        </div>
      </div>
  );
};

export default Footer;