import React from "react";

const Carousel = () => {
  return (
    <>
      <div className="Carousel">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://media.istockphoto.com/id/1435086833/photo/movie-theater-grey-seats-in-a-modern-cinema.jpg?b=1&s=170667a&w=0&k=20&c=6Yw8rTcdLKNmUZgN07czeB7bL2nTMSqvBYHDUksWuPs="
                className="d-block Img img-fluid"
                alt="no show image"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Your Seat Calls you</h5>
                <p>Spend Quiality time With you loveonce.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://media.istockphoto.com/id/1409271522/photo/the-mans-hands-are-holding-black-with-yellow-clapper-board-or-movie-slate-on-yellow-background.jpg?b=1&s=170667a&w=0&k=20&c=vb-Ae8pOyZ3VwIJjqj5mv1gud1bWrntZxAsMFOIlEpc="
                className="d-block Img img-fluid"
                alt="no show image"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Break Free shows</h5>
                <p>Don't Wait for end.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://media.istockphoto.com/id/1458636702/photo/mature-female-friends-watching-3d-movie-at-cinema.jpg?b=1&s=170667a&w=0&k=20&c=ydZAF2Pej8YGxHC9mkFZI_lnj623zpR-_lkAY9VRgKM="
                className="d-block Img img-fluid"
                alt="no show image"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>SSSShhhhhhhhhhh</h5>
                <p>No Extra Sound.</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
