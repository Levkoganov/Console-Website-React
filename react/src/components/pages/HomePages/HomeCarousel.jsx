import { Link } from 'react-router-dom';

function HomeCarousel() {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="/images/playstation pics/ps-home.png"
            className="d-block w-100"
            alt="playstation_logo"
          />

          <div className="carousel-caption text-top">
            <h6>
              Experience lightning-fast loading with an ultra-high speed SSD
              <br />
              deeper immersion with support for haptic feedback adaptive
              triggers and 3D Audio, <br />
              and an all-new generation of incredible PlayStation®
            </h6>
          </div>

          <div className="carousel-caption PS-carousel-caption">
            <h6 className="d-none d-md-block">View PlayStation® Page</h6>
            <Link className="PSbutton" to="/playStation">
              PlayStation
            </Link>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="images/xbox pics/xbox-home.jpg"
            className="d-block w-100"
            alt="xbox_logo"
          />

          <div className="carousel-caption text-top">
            <h6>
              New generation console. New generation games. <br />
              Embark on new adventures the way they’re meant to be experienced
              on
              <br />
              Xbox Series X.
            </h6>
          </div>

          <div className="carousel-caption xbox-carousel-caption">
            <h6 className="d-none d-md-block">View Page Xbox Series X.</h6>
            <Link className="XBOXbutton" to="/xbox">
              XBOX
            </Link>
          </div>
        </div>
      </div>

      <a
        className="carousel-control-prev"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleCaptions"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default HomeCarousel;
