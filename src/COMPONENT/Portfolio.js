import Header from "./Header";
import "./Portfolio.css";
import { BsChatFill } from "react-icons/bs";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import ByCategory from "./ByRoomType";
import { useNavigate ,useLocation, Link } from "react-router-dom";
import SubHeader from "./subHeader";
import ChatBot from "./ChatBot";

const Portfolio = ()=> {
  // const {professionalData} = location.state || {};
const [roomTypeList, setRoomTypeList] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3001/design/viewAllRoomType")
      .then(response => {
        console.log(response.data.data);
        setRoomTypeList(response.data.data)
      }).catch(err => {
        console.log(err);
      })
  },[]);

const navigate = useNavigate();
const location = useLocation();

const reactChat=()=>{
 navigate('/react-chat'); 
}
console.log('Location object by btn link:', location);
 const {professionalData} = location.state || {};

 console.log('Received State by button link: ', professionalData);


 if (!professionalData) {
  console.error('Error: State not found in location',);
  return null; 
}
const professional_id = professionalData ? professionalData.professional_id : null;
// Portfolio perticuler pro_id for RoomTypePost
sessionStorage.setItem('professional_id', professional_id);
alert(professional_id);


const movetoByCategory = (roomType_id)=>{
    // navigate(`/home/professional_id/:id/roomType_id/${roomType_id}`);
    navigate(`/home/professional_id/${professional_id}/roomType_id/${roomType_id}`);

}
// curent url navigate(`/home/professional_id/${professional_id}`);
const GotoVideoget = (professional_id)=>{
  console.log(professional_id);
  navigate(`/Videoget/${professional_id}`)
}

return (
    <> 
    {/* Print Redux data here */}
            {/* <div> 
            <h1>Professional Data:</h1>
            <pre>{JSON.stringify(professionalData, null, 2)}</pre>
        </div> */}

      <Header />
      <SubHeader/>

           <section className="container-fluid px-0 main-section">
          <img src="http://localhost:3000//Slider-5-Living.jpg" alt="Slider-5-Living.jpg" width="1345px" />

          <div className="container mt-2">

          <div className="row">
          <div className="col-md-12 mx-auto">

<div className="second-section-outer d-flex justify-content-center align-items-center overflow-hidden" style={{ height: "550px",  overflowX: "hidden" }}>
      <div className="container  mt-5">

      <div className="row">
    <div className="col-md-10 mx-auto">

      <div className="second-section w-80 border border p-4" style={{ height: "450px", backgroundColor: "white", boxShadow: "10px 0px 20px 5px gray"}}>
      <h1 className="fw-bolder sans-serif ">
  Interior Designers & Decorators </h1>
        {/* <p className="text-blk heading">
        Interior Designers & Decorators
      </p> */}

  <div className="second-part d-flex justify-content-around align-items-center position-relative p-2">
      <img src = {professionalData?.profileImg_URL} alt="Professional Profile" />
      <div className="for-msgbutton d-flex flex-column justify-content-evenly align-items-center " >

      <div className="container">
      <div className="row">
      <div className="col-md-12 mx-auto">

      <div className="description text-center bg-white shadow-sm rounded bg-white shadow p-1 mb-2 boxShadow: 10px 0px 20px 5px gray"  >
      <p>
                    Name : <span>{professionalData?.professional_name}</span>
                  </p>
                  <p>
                    Email : <Link style={{ color: "blue" }}>{professionalData?.email}</Link>
                  </p>
                  <p>
                    Contact no : <span>{professionalData?.contact_no}</span>
                  </p>
                  <p>
                    Address : <span>{professionalData?.address}</span>
                  </p>
                  <p>
                    City : <span>{professionalData?.city}&nbsp;{professionalData?.pincode}</span>
                  </p>
  </div>
  {/* <button  className="chatbutton"style={{ color: '#F15922' }}>
  <span  className=" classCircle">
  <BsChatFill style={{ color: "white" }} /></span> 
  Chat with Designer
   
  </button> */}
 <button  className="chatbutton"style={{ color: '#F15922' }}>
  <span  className=" classCircle">
  {/* <BsChatFill onClick={()=>{reactChat()}} */}
  <BsChatFill onClick={()=>navigate("/Appp")}
       style={{ color: "white" }} /></span> 
  Chat with Designer
  {/* <a href='http://localhost:3003/' target="http://localhost:3003/">Chat with Designer</a> */}
   
  </button>


</div> </div> </div>
</div>

  </div>
  </div>
      </div> </div>
</div>
        </div>
        {/* <ChatBot/> */}

        <div className="Option-outer">
           <button className="favorite styled" type="button">Designs</button>
           <button  onClick =  {()=>GotoVideoget(professionalData.professional_id)}className="favorite styled" type="button">Videos</button>
           <button className="favorite styled" type="button">Products</button>
         </div>
</div> 
</div>

 </div>
{/* ============================================================================================ */}

    <div className="container mt-5">
            <div className="row p-5  " style = {{position:"relative",background:'#F0F1F1'//border:'2px solid black'
          }}>

              <h1 style = {{position:"absolute",display: 'inline-block',fontWeight:'700',marginLeft:'150px'}}>TABLE OF </h1>

              <h3 style={{position:"absolute", display: 'inline-block', inlineSize: 'auto', fontWeight: '600', marginLeft: '150px', marginTop: '60px'}}>CONTENTS</h3>

              {roomTypeList.map((blank, index) => (
                <div className="col-md-4 p-5  " key={index}
                style = {{position: 'relative', zIndex: '0', marginTop: index < 3 ? '100px' : '0'}}
                >
                  <div className="d-flex flex-column align-items-center mt-3   " style={{height:"290px", boxShadow: '0 0 5px grey',width: '230px', borderRadius:'50px',backgroundColor: '#466470' ,position: 'relative'}}> </div> 

              <img src={blank.image_url} style={{height:"290px", boxShadow: '0 10 5px grey',width: '220px',position:'absolute',
                left:'72px',bottom:'72px',borderRadius:'50px'}} onClick={()=>movetoByCategory(blank.roomType_id)}    />
                <h3 className="text-center p-3" style={{position:'absolute',color :'#466470', left: '0', right: '0' } }>{blank.roomType}</h3> 
                </div>))}
                </div>
  </div>
</section>

    </>
  );
}
export default  Portfolio ;




