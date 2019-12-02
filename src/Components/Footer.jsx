import React from "react"
import shuffle from '../img/Shuffle.png';
import next from '../img/Next.png';
import previous from '../img/Previous.png';
import repeat from '../img/Repeat.png';
import play from '../img/Play.png';
class Footer extends React.Component {
    state = {  }
    render() { 
        return (
            <div class="container-fluid fixed-bottom bg-container">
      <div class="row">
        <div class="col-12 playerControls text-center">
          <a href="#">
            <img src={shuffle} alt="shuffle" />
          </a>
          <a href="#">
            <img src={previous} alt="shuffle" />
          </a>
          <a href="#">
            <img src={play} alt="shuffle" />
          </a>
          <a href="#">
            <img src={next} alt="shuffle" />
          </a>
          <a href="#">
            <img src={repeat} alt="shuffle" />
          </a>
        </div>
      </div>
      <div class="row justify-content-center playBar py-3">
        <div class="progress">
          <div
            class="progress-bar"
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    </div>
          );
    }
}
 
export default Footer;