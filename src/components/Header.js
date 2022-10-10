function Header() {
  return (
    <header>
      <video src="/video.mp4" loop autoPlay muted></video>
      {/* <h1>ПОСЕТИ БЪЛГАРИЯ</h1> */}
      <div className="container">
        <div className="col">
          {/* <div className="row"> */}
          <button className="btn" style={{ cursor: "pointer" }} >
            Sign up
          </button>

          <button className="btn" style={{ cursor: "pointer" }}>
            Log in
          </button>
        </div>
      </div>
      <div className="headerbg"></div>
      {/* </div> */}
    </header>
  );
}
export default Header;
