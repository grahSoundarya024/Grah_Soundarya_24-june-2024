import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import './Design.css';
import Header from './Header';
const Design = () => {
  const [designs, setDesigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { roomType_id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios.get(`http://localhost:3001/design/getCategoryone`, { params: { roomType_id } })
      .then(response => {
        console.log("designcategory::", response.data);
        if (response.data && Array.isArray(response.data.designs)) {
          const allImages = [];
          response.data.designs.forEach(design => {
            design.design_images.forEach(image => {
              allImages.push({
                image_url: image.image_url,
                professional_name: design.professional.professional_name,
                professional_profile_url: design.professional.profileImg_URL,
                // design_id: design.design_id fine
                designImg_id: image.designImg_id,  
                description: image.description  


              });
            });
          });
          setDesigns(allImages);
          setError(null);
        } else {
          console.log("smth went wrong", response.data);
          setError("Internal Server Problem");
        }
      })
      .catch(err => {
        console.error("Error fetching data", err);
        setError("Error fetching data");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [roomType_id]);

return (
    <>
      <Header />
      <div className="container-fluid mt-3 d-flex flex-wrap">
        {loading ? (
          <div className="loading-spinner">Loading...</div>
        ) : error ? (
          <div className="error-message">{error}</div>
        ) : (
          <div className="row ms-5">
            {designs.map((design, index) => (
              <div className="col-md-4 p-3" key={index}>
                <div className="d-flex flex-column align-items-center" style={{ height: '450px', width: '400px', boxShadow: '0 0 5px grey', backgroundColor: 'grey' }}>
                  <div className="designs-img d-flex m-0 " style={{ height: '400px', width: '100%' }}>
                    <img src={design.image_url} style={{ height: '100%', width: '100%', objectFit: 'cover' }} alt={`Design ${index}`} />

                    <div className="overlay">
                      {/* <button className="viewmore2" onClick={() => navigate(`/particular/${design.design_id}`, { state: { designs: designs, design: design } })
                  }>View More</button> */}

{/* <button className="viewmore2" onClick={() =>
  design.design_id ? navigate(`/particular/${design.design_id}`, { state: { designs, design } }) : alert('Design ID is undefined')
}>View More</button> */}

<button className="viewmore2" onClick={() =>
  design.designImg_id ? navigate(`/particular/${design.designImg_id}`, { state: { designs, design } }) : alert('Design ID is undefined'+design.designImg_id)
}>View More</button>


                    </div>
                </div>
        <div className="d-flex align-items-center mt-2" style={{ width: '100%', padding: '0 10px' }}>
          <img className="pro-img me-2" src={design.professional_profile_url} style={{ height: '35px', width: '35px', borderRadius: '50%' }} alt="Professional" />
                    <p className="mb-0">{design.professional_name}</p>
                    
                  </div>
                </div>

              </div>

              ))}
          </div>
        )}
      </div>
    </>
  );
};
export default Design;
