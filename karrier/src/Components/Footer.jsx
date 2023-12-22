export const Footer = () => {
  return (
    <section className="footer" style={{marginTop:'30px'}}>
    <div className="footer-icon">
      <h2 className="footer-cover">Karrier.id</h2>
      <p className="footer-font">Bangun Karier yang sukses bersama Karrier.id</p>
      <ul className="footer-icons">
        <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
          <i><img src="/image/instagram.png" style={{ height: '40px', width: '40px' }} alt="Instagram" /></i>
        </a>
        <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
          <i><img src="/image/facebook.png" style={{ height: '40px', width: '40px' }} alt="Facebook" /></i>
        </a>
        <a className="btn btn-link btn-floating btn-lg text-dark m-1" href="#!" role="button" data-mdb-ripple-color="dark">
          <i><img src="/image/telegram.png" style={{ height: '40px', width: '40px' }} alt="Telegram" /></i>
        </a>
      </ul>
      <span className="cpr">copyright@4keys</span>
    </div>
  </section>
);
};

export default Footer;