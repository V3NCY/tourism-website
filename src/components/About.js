function About() {
  return (
    <>
      <div style={{ marginTop: '15rem', width: '100%', height: '10px' }} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src="../img/img1.png" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">КОИ СМЕ НИЕ?</h2>
            <p className="main-p">
              Ние сме тези, които искаме да направим Вашият престой в България незабравим! Докоснете се до най-красивото, до традициите и културите на различните региони, опитайте различните вкусове и опитайте от най-пивките ни вина!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
