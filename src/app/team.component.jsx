import React, {Component} from 'react';
import team2 from 'images/team2.gif';
import team3 from 'images/team3.gif';

const Team = () => {
  return (
    <team>
      <div className="header">
        <h1 className="header-title">Our Team</h1>
        <p>Lorem ipsum dolor sit amet,<br /> consectetur adipisicing elit</p>
      </div>

      <div className="container">
        <div className="row">

          <div className="col-sm-6 col-md-6 col-lg-3 person">
            <img className="img-responsive center-block" src={team2} alt="" />
            <h4>John Doe</h4>
            <p>Pellentesque porttitor </p>
            <div className="team-social">
              <a href="#"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
              <a href="#"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
              <a href="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
              <a href="#"><i className="fa fa-google-plus-square" aria-hidden="true"></i></a>
            </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-3 person">
            <img className="img-responsive center-block" src={team3} alt="" />
              <h4>John Doe</h4>
              <p>Pellentesque porttitor </p>
              <div className="team-social">
                <a href="#"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-google-plus-square" aria-hidden="true"></i></a>
              </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-3 person">
            <img className="img-responsive center-block" src={team2} alt="" />
              <h4>John Doe</h4>
              <p>Pellentesque porttitor </p>
              <div className="team-social">
                <a href="#"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-google-plus-square" aria-hidden="true"></i></a>
              </div>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-3 person">
            <img className="img-responsive center-block" src={team3} alt="" />
              <h4>John Doe</h4>
              <p>Pellentesque porttitor </p>
              <div className="team-social">
                <a href="#"><i className="fa fa-facebook-square" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
                <a href="#"><i className="fa fa-google-plus-square" aria-hidden="true"></i></a>
              </div>
          </div>
        </div>
        {/* ===== /ROW/ ===== */}
      </div>
      {/* ===== /CONTAINER/ ===== */}

    </team>
  )
}


export default Team;
