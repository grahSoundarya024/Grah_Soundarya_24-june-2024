import { PaddingTwoTone } from '@mui/icons-material';
import './About.css'
import Header from './Header';

const About= ()=>{
    return<>
      <div style={{ marginTop: '75px' }}>
      <Header />
    </div>

      <div className="about responsive-container-block bigContainer">
  <div className="responsive-container-block ">
    <div className="imgContainer">
 
<img src="http://localhost:3000/ABOUT.jpg" alt="ABOUTjpg" style= {{width: '550px'}} />
    </div>
    <div className="responsive-container-block textSide">   
      <p className="text-blk heading">
        About Us
      </p>
      <p className="text-blk subHeading">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget purus lectus viverra in semper nec pretium mus.
      </p>
      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
        <div className="cardImgContainer">
          <img className="cardImg" src="./th (2).jpeg"/>
        </div>
      <div className="cardText">
          <p className="text-blk cardHeading">
            Value
          </p>
          <p className="text-blk cardSubHeading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
        <div className="cardImgContainer">
          <img className="cardImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg"/>
        </div>
        <div className="cardText">
          <p className="text-blk cardHeading">
            Value
          </p>
          <p className="text-blk cardSubHeading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
        <div className="cardImgContainer">
          <img className="cardImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg"/>
        </div>
        <div className="cardText">
          <p className="text-blk cardHeading">
            Value
          </p>
          <p className="text-blk cardSubHeading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
      {/* <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
        <div className="cardImgContainer">
          <img className="cardImg" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/id2.svg"/>
        </div>
        <div className="cardText">
          <p className="text-blk cardHeading">
            Value
          </p>
          <p className="text-blk cardSubHeading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div> */}
      {/* <a>
        <button className="explore">
          Explore our Services
        </button>
      </a> */}
    </div>
    {/* <img className="redDots" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/cw3.svg"/> */}
  </div>
</div>
    </>
}
export default About;