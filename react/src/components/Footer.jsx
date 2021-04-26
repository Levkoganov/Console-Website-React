function Footer() {
  return (
    <footer>
      <div className="footer-wrap">
        <div className="d-flex justify-content-center footer-img">
          <img
            src="https://droidjournal.com/wp-content/uploads/2020/05/Headerx30-5.png"
            alt="DroidJournal"
            data-rjs="2"
          />
        </div>

        <div className="d-flex justify-content-center footer-icon">
          <i className="fab fa-facebook fa-2"></i>
          <i className="fab fa-twitter fa-2"></i>
          <i className="fab fa-instagram fa-2"></i>
        </div>

        <div className="d-flex justify-content-center footer-paragraph footer-text">
          <p>ABOUT US</p>
          <p>CONTACT US</p>
          <p>EDITORITAL POLICY</p>
          <p>DISCLAIMER</p>
          <p>PRIVACY POLICY</p>
          <p>SITEMAP</p>
        </div>
      </div>

      <div className="copyright text-center credit">
        <p>
          Copyright &copy; 2020/2021 | React & NodeJS Project | Designed by
          Lev.k
        </p>
      </div>
    </footer>
  );
}

export default Footer;
