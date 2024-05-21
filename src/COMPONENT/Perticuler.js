import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { BiCommentEdit } from "react-icons/bi";
import { FaRegShareSquare } from "react-icons/fa";
import axios from "axios";
import Header from "./Header";

const Particular = () => {
  const location = useLocation();
  const { homedesign, product } = location.state;
  const [showCommentInput, setShowCommentInput] = useState(false);
  const [comment, setComment] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to keep track of current image index

  const handleCommentSubmit = () => {
    // Send comment data to the backend
    axios.post("http://localhost:3001/design/design_feedback", {
      design_id: product.design_id,
      user_id: 1, // Assuming you have user authentication and user_id is available
      feedback: comment
    })
    .then(response => {
      console.log('Comment submitted successfully:', response.data);
      // Optionally update UI or perform other actions upon successful submission
    })
    .catch(error => {
      console.error('Error submitting comment:', error);
      // Handle error
    });
  };

  const handleOtherDivClick = (index) => {
    setCurrentImageIndex(index); // Update the current image index when another div is clicked
  };

  return (
    <>
      <Header/>
      <div className="d-flex justify-content-center">
        <div className="main3-div" style={{ height: '120vh', width: '80%' }}>
          <div>
            <div className="d-flex gap-3 ">
              <img className="pro-img mt-1 ms-2" src={product["design.professional.profileImg_URL"]} style={{ height: "60px", width: "60px" }} alt="Professional" />
              <p className="fs-4 mt-3 text-uppercase font-weight-bold">{product["design.professional.professional_name"]}</p>
              <p className='mt-3'>{product['design.createdAt']}</p>
            </div>
            <button className='btn viewprofile'>View Profile</button>
            <div className='viewprofilebtn ms-5'>
              <button className='btn'><FaRegHeart />   Save</button>
              <button className='btn' onClick={() => setShowCommentInput(true)}>
              <BiCommentEdit />  Comment</button>
              <button className='btn'><FaRegShareSquare />  Share</button>
            </div>
            {/* Render comment input if showCommentInput is true */}
            {showCommentInput && (
              <div className='ms-5 mt-3'>
                <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} />
                <button onClick={handleCommentSubmit}>Submit</button>
              </div>
            )}
            {/* <p className='ms-5 mt-3'>{product.description}</p> */}
            <hr></hr>
          </div>
          <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
              {homedesign.map((design, index) => (
                <div key={index} className={index === currentImageIndex ? "carousel-item active" : "carousel-item"}>
                  <div className="img-bg-div ms-5 mt-3 d-flex justify-content-center">
                    <img className="mt-4" src={design.image_url} style={{ height: "700px", width: '80%' }} alt={`Design ${index}`} />
                  </div>
                  {/* Display description of the current image */}
                  {index === currentImageIndex && (
                    <div className="ms-5 mt-3">
                      <p>{design.description}</p>
                      <p>{ product["design.professional.professional_name"]}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
              <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
      {/* other div */}
      <div className='design-section mt-5'>
        <div className="home-particulardesign text-center">
          <span className=" heading text-center  fs-1 fw-bold border-bottom  border-1 pt-1 ps-4 pe-4 ">Designs</span>
          <div className="containerr mt-5 mb-3 d-flex align-items-center">
            <div className="containerr-inline d-flex align-items-center mb-3">
              {homedesign.map((design, index) => (
                <div key={index} onClick={() => handleOtherDivClick(index)}> {/* Call handleOtherDivClick onClick of other divs */}
                  <div className="particulardesign-box d-flex flex-column align-items-center justify-content-start">
                    <div className="particulardesign-img m-1"><img src={design.image_url} style={{ height: "100%", width: '100%' }} alt={`Design ${index}`} /></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Particular;
