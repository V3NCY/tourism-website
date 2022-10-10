function Contact() {
  return (
    <div className="container contact">
      <h2 className="main-title text-center">КОНТАКТИ</h2>
      <div className="col-md-4">
        <div className="row">
          <div className="col-md-4 mb-1">
            <input name="name" placeholder="Име..." className="contact-input" />
          </div>

          <div className="col-md-4 mb-1">
            <input name="email" placeholder="И-мейл..." className="contact-input" />
          </div>
          <div className="col-md-4 mb-1">
            <input
              name="subject"
              placeholder="Относно..."
              className="contact-input"
            />
          </div>
        </div>
      </div>
      <br />
      <div className="col-md-4">
        <textarea
          name="message"
          placeholder="Вашето съобщение..."
          className="contact-textarea"
        />
      </div>

      <br></br>
      <div className="row">
        <div className="col-md-8">
          <input className="form-btn" type="submit" value="Изпрати" />
        </div>
      </div>
      <br></br>
    </div>

  );
}
export default Contact;
