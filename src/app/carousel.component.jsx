import React, {Component} from 'react';
import slider01 from 'images/slider01.jpg';
import slider02 from 'images/slider02.jpg';
import slider03 from 'images/slider03.jpg';

const Carousel = () => {
  return (
    <carousel>
      <ol className="carousel-indicators">
        <li data-target="#slider" data-slide-to="0" className="active"></li>
        <li data-target="#slider" data-slide-to="1"></li>
        <li data-target="#slider" data-slide-to="2"></li>
      </ol>

      <div id="carousel-inner" className="carousel-inner">

        <div className="item active">
          <img src={slider01} alt="xyz" className="img-responsive"/>
          <div className="carousel-caption">
            <span>BEST COMPANY</span>
            <h1>Lorem ipsum dolor.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, repellat dolore ipsa. Ratione eligendi
              tempora praesentium suscipit voluptates, ipsam illo ad deleniti odio! Excepturi, voluptatibus!</p>
            <button type="submit" className="btn btn-default call_us_now" name="improve"><i className="fa fa-code"
                                                                                            aria-hidden="true"></i>Call
              us
              Now!
            </button>
          </div>
        </div>
        <div className="item">
          <img src={slider02} alt="" className="img-responsive"/>
          <div className="carousel-caption">
            <span>BEST COMPANY</span>
            <h1>Lorem ipsum dolor.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, repellat dolore ipsa. Ratione eligendi
              tempora praesentium suscipit voluptates, ipsam illo ad deleniti odio! Excepturi, voluptatibus!</p>
            <button type="submit" className="btn btn-default call_us_now" name="improve"><i className="fa fa-code"
                                                                                            aria-hidden="true"></i>Call
              us Now!
            </button>
          </div>
        </div>

        <div className="item">
          <img src={slider03} alt="" className="img-responsive"/>
          <div className="carousel-caption">
            <span>BEST COMPANY</span>
            <h1>Lorem ipsum dolor.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, repellat dolore ipsa. Ratione eligendi tempora praesentium suscipit voluptates, ipsam illo ad deleniti odio! Excepturi, voluptatibus!</p>
            <button type="submit" className="btn btn-default call_us_now" name="improve"><i className="fa fa-code" aria-hidden="true"></i>Call us Now!</button>
          </div>
        </div>
      </div>

      {/* Controls */}
      <a className="left carousel-control" href="#slider" role="button" data-slide="prev">
        <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="right carousel-control" href="#slider" role="button" data-slide="next">
        <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </carousel>
  )
}


export default Carousel;
