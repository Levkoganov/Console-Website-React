function HomeSection() {
  return (
    <div className="home-section">
      <div className="home-title">
        <div className="d-flex justify-content-center">
          <h4>New Generation Console New Generation Games</h4>
        </div>
        <hr />
      </div>

      <div className="home-redirect">
        <div className="container d-flex justify-content-around warp">
          <div>
            <img
              src="/images/playstation pics/ps-redirect.png"
              alt=""
              height="100"
              width="333"
            />

            <div className="move-center">
              <h6>Playstation official site</h6>
              <a href="https://www.playstation.com/en-us/" target="_blank">
                <button type="button" className="main-ps-btn">
                  sony
                </button>
              </a>
            </div>
          </div>

          <div>
            <img
              src="/images/xbox pics/xbox-redirect.png"
              alt=""
              height="100"
              width="333"
            />
            <div className="move-center">
              <h6>Xbox official site</h6>
              <a
                href="https://www.microsoft.com/en-ww/microsoft-365"
                target="_blank"
              >
                <button type="button" className="main-xbox-btn">
                  microsoft
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
