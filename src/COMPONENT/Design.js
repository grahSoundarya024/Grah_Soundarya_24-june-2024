// Design.js
import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './Design.css';
import Header from './Header';

const Design = () => {
  const [homedesign, setHomeDesigns] = useState([]);
  const navigate = useNavigate();
  const { design_id } = useParams();
  
  useEffect(() => {
    axios.post("http://localhost:3001/design/getCategoryone", { design_id })
      .then(response => {
        console.log("designcategory::", response.data.data);
        setHomeDesigns(response.data.data);
      })
      .catch(err => {
        console.log("errorr");
        console.log(err);
      });
  }, []);

  return (
    <>
<Header/>
      <div className="container-fulid mt-3 d-flex flex-raw">
        <div className="row ms-5">
          {/* <h1 className="heading mt-3">Puja-Ghar Designs</h1> */}
          {homedesign.map((product, index) => (
            <div className="col-md-4 p-3" key={index}>
              <div className="d-flex flex-column align-items-center div mt-3" style={{ height: "450px", width: "410px", boxShadow: '0 0 5px grey' }}>
                <div className="designs-img mt-1 d-flex" style={{ height: "400px", width: '98%' }}>
                  <img src={product.image_url} style={{ height: "398px", width: '100%' }} alt={`Design ${index}`} />
                  <div className="overlay">
                    <div className='fav'></div>
                    <button className="viewmore2" onClick={() => navigate(`/particular/${product.design_id}`, { state: { homedesign: homedesign, product: product } })}>viewmore</button>
                  </div>
                </div>
                <div className="uptown">
                  <img className="pro-img mt-1 ms-2" src={product["design.professional.profileImg_URL"]} style={{ height: "35px", width: "35px" }} alt="Professional" />
                  <p className="text-center mt-2">{product["design.professional.professional_name"]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Design;
