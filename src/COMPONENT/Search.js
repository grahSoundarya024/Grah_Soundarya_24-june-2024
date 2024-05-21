import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";

const Search = () => {
  const [homedesign, setHomeDesigns] = useState([]);
  const { roomType } = useParams();
  console.log(roomType);

  const fetchDesignsByRoomType = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/design/DesignByRoomType/${roomType}`);
      console.log("design category:", response.data);
      setHomeDesigns(response.data.data);
    } catch (error) {
      console.log("error:", error);
    }
  };

  useEffect(() => {
    fetchDesignsByRoomType();
  }, [roomType]);

  return (
   
    <>
       <Header />
       
      <div className="container-fulid mt-3 d-flex flex-raw">
          <div className="row ms-5">
            <h1 className="heading mt-3 text-center">{roomType}</h1>
            {homedesign.map((product, index) => (
              <div className="col-md-4 p-3" key={index}>
                <div className="d-flex flex-column align-items-center div mt-3" style={{ height: "450px", width: "410px", boxShadow: '0 0 5px grey' }}>
                  <div className="designs-img mt-1 d-flex" style={{ height: "400px", width: '98%' }}>
                    <img src={product[ "designs.design_images.image_url"]} style={{ height: "398px", width: '100%' }} />
                    <div className="overlay">
                      <div className='fav'>
                        
                      </div>
                      <button  className="viewmore2">viewmore</button>
                    </div>
                  </div>
                  <div className="uptown">
                    {/* <img className="pro-img mt-1 ms-2" src={product["design.professional.profileImg_URL"]} style={{ height: "35px", width: "35px" }} alt="Professional" />
                    <p className="text-center mt-2">{product["design.professional.professional_name"]}</p> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </>
  );
};

export default Search;
