import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
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
            <img src={require('./img/1.jpg')} className="d-block w-100" alt="inotebook" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Welcome to iNoteBook</h5>
              <p>
                Your NoteBook on Cloud. 
              </p>
              <Link className="btn btn-primary mx-1" role="button" to='/login'>Login</Link>
            <Link className="btn btn-success mx-1" role="button" to='/signup'>SignUp</Link>
            <Link className="btn btn-danger mx-1" role="button" to='/about'>About</Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src={require('./img/3.jpg')} className="d-block w-100" alt="inotebook" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Welcome to iNoteBook</h5>
              <p>
                Create, Read, Update Your Notes Anywhere, Anytime
              </p>
              <Link className="btn btn-primary mx-1" role="button" to='/login'>Login</Link>
            <Link className="btn btn-success mx-1" role="button" to='/signup'>SignUp</Link>
            <Link className="btn btn-danger mx-1" role="button" to='/about'>About</Link>
            </div>
          </div>
          <div className="carousel-item">
            <img src={require('./img/3.1.jpg')} className="d-block w-100" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Welcome to iNoteBook</h5>
              <p>
                Across devices. Download in txt , pdf form.
              </p>
              <Link className="btn btn-primary mx-1" role="button" to='/login'>Login</Link>
            <Link className="btn btn-success mx-1" role="button" to='/signup'>SignUp</Link>
            <Link className="btn btn-danger mx-1" role="button" to='/about'>About</Link>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
