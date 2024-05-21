import * as React from "react";
import "./Subscription.css"
import Header from "./Header";
import { Link } from "react-router-dom";

    export default function Subscription() {
  return (
    <>
      <Header/>
      <div className="div ">
        <div className="div-3">Monthly Subscription Plan</div>
        <div className="Month"></div>
        <div className="div-4 mt-4">
          Choose the subscription plan that suits you and your buisness best.
        </div>
        <div className="div-5 ">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/25e3b940176746196cd0727abd433f7e384957f439d86ed29317816483004896?apiKey=19a238566d2f431da0ab2ef3453e467e&"
            className="img"
          />
          <div className="div-6 ">
            <div className="div-7">Being a professional</div>
            <div className="video">Upload video</div>
            <div className="div-8">Upload design & product </div>
            <div className="div-9">Sell product & design</div>  
          </div>
          <div className="div-child2">
            <h1>₹999</h1>
          </div>
        </div>
        <Link to={"/ApplicationForm"} style={{textDecoration : "none"}}><div className="div-13">Subscribe now</div></Link>
      </div>
      
</>
);
}