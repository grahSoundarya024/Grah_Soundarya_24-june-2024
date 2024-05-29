

  import React, { useEffect, useState } from "react";
  import axios from "axios";
  import "./ProfessionalDashboard.css";
  import { Link, useLocation, useNavigate } from "react-router-dom";
  import Header from "./Header";


  function ProfessionalDashboard() {
    const [professional_name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contact_no, setContact] = useState('');
    const [address, setLocation] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    console.log('recive in Pro_dash_comp:', location);
    const { professionalData } = location.state || {};
    const professional_id = professionalData?.professional_id ;


    const changeName = (e)=>{
      const professional_name = e.target.value;
      console.log(professional_name);
      setName(professional_name)
    }
    const changeEmail = (e)=>{
      const email = e.target.value;
      console.log(email);
      setEmail(email)
    }
    const changeContact = (e)=>{
      const contact_no = e.target.value;
      console.log(contact_no);
      setContact(contact_no);
    }
    const changeLocation = (e)=>{
      const address = e.target.value;
      console.log(address);
      setLocation(address)
    }


    const handleButtonClick = () => {
    }
    const handleSubmit = (e) => {
      e.preventDefault();

      if(!professional_name && !email && !contact_no && !address){
      setErrorMessage("Please select atlease one field before submit ");
      return;
      }
      setErrorMessage('');

      const updatedData = {};
      if (professional_name) updatedData.professional_name = professional_name;
      if (email) updatedData.email = email;
      if (contact_no) updatedData.contact_no = contact_no;
      if (address) updatedData.address = address;
      updatedData.professional_id = professional_id;
  
      //professional_id, professional_name, address, email, contact_no
      // axios.post("http://localhost:3001/professional/updatePro",{professional_name,email,contact_no,address,professional_id})
      axios.post("http://localhost:3001/professional/updatePro",updatedData)

      .then((response) =>{
        console.log(response.data);
      }).catch(err => {
        console.log(err);
    })
  }
  const goToPortfolio = (id)=>{
    console.log("in Pro_dash_comp"+id)
    navigate(`/portfolio/${id}`, { state: { professionalData } });
    // porfolio aayi state send req otherwise undefined.

    //  <Route path="/portfolio/:professional_id" element={<Portfolio />} />
  }


  return (
      <>
        <Header/>

      <section className="container-fluid d-flex" >
        <div className="contain" style={{ border: "2px solid black", marginLeft: '0px' }}>
          <div  className="header">
            <div className="logo">Logo</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe68c010723c1b892dc3c41036931fff77610b3df7aa865804aa94c604279436?apiKey=ec8f119356ee46e58c201639c392cbea&"
              className="logo-img"
              alt="Logo"
            />
          </div>
          <div className="menu">
            <button className="menu-item" onClick={() => handleButtonClick("Dashboard")}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e526c9bff1adfba813404633009b8da2a73d78615c816b721fd82361ba97ddf?apiKey=ec8f119356ee46e58c201639c392cbea&"
                className="menu-icon"
                alt="My profile"
              />
              <div className="menu-label" style ={{ color: '#D89619' }}>My profile</div>
            </button>
            <button className="menu-item" onClick={() => handleButtonClick("User")}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/81224096299ca4181dbf046544134cad51d0bf4f70451ed2d9c48fd5be9d691b?apiKey=ec8f119356ee46e58c201639c392cbea&"
                className="menu-icon"
                alt="Admin"
              />
              {/*    onClick={() => emailGoPortfolio(professional.professional_id)}
 */}
 {/*                             <Link
                                to={`/portfolio/${professional.professional_id}`}
                                className="text-center mb-1"
                                onClick={() => emailGoPortfolio(professional.professional_id)}
                                state={{ professionalData: professional }}
                            >
                                Email: {professional.email}
                            </Link>
 */}
              <div onClick={()=>goToPortfolio(professional_id)}className="menu-label">Portfolio</div>

              
            </button>
            <button className="menu-item" onClick={() => handleButtonClick("Messages")}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f0f0a9807df87dbd228da722c2690b3d10175f68c16ac8abd64ecb12600a462?apiKey=ec8f119356ee46e58c201639c392cbea&"
                className="menu-icon"
                alt="Messages"
              />
              <div className="menu-label" onClick={()=>navigate("/chatbot")}>Messages</div>
            </button>
            <button className="menu-item" onClick={() => handleButtonClick("Order")}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f7276744ca6b39e2c042954a806ef4483a390f07f0a5c964d629f05f4398605?apiKey=ec8f119356ee46e58c201639c392cbea&"
                className="menu-icon"
                alt="Order"
              />
              <div className="menu-label" onClick = {()=>navigate("/RoomTypePost")}>Upload Design</div>
            </button>
            <button className="menu-item" onClick={() => handleButtonClick("Saved")}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf2f263812eb300619017b1d1b999ec6e5cae47354425852f19d80514497e4d1?apiKey=ec8f119356ee46e58c201639c392cbea&"
                className="menu-icon"
                alt="Saved"
              />
              <div className="menu-label">Saved</div>
            </button>
            <button className="menu-item" onClick={() => handleButtonClick("SubscriptionList")}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f7276744ca6b39e2c042954a806ef4483a390f07f0a5c964d629f05f4398605?apiKey=ec8f119356ee46e58c201639c392cbea&"
                className="menu-icon"
                alt="SubscriptionList"
              />
              <div className="menu-label">SubscriptionList</div>
            </button>
            <button className="menu-item" onClick={() => handleButtonClick("Setting")}>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6b2b888e332fc2a478c037b682c6e3144939e99cfb600b4e0dae5e98603294e?apiKey=ec8f119356ee46e58c201639c392cbea&"
                className="menu-icon"
                alt="Feedback"
              />
              <div className="menu-label">Feedback</div>
            </button>
            <div className="footer">
              <div className="profile" style={{ marginTop: "-100px" ,marginLeft:"-30px" }}>
                <img
                  loading="lazy"
                  src={professionalData?.profileImg_URL}
                  style={{ width: "6vh", height: "6vh", borderRadius: "50%", boxShadow: "0px 0px 0px 5px gray" }}

                  className="profile-pic"
                  alt="Profile"
                />
                <div className="profile-info">
                  <div className="profile-name">{professionalData?.professional_name}</div>
                  <div className="profile-role"></div>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/93984d34e1bb5b80b4bbd4d2f066ce8fc3f938a13a171e1dc3ea803da726e4e2?apiKey=ec8f119356ee46e58c201639c392cbea&"
                  className="profile-settings"
                  alt="Settings"
                />
              </div>
            </div>
          </div>
        </div>
        <div  className="container-fluid d-flex justify-content-center mt-3" style={{ width: "80%", height: "700px", alignItems: "center", flexDirection: "column"}}>
          <header className="main-header mt-5">
            <div className="profile-img">
              <img
                src={professionalData?.profileImg_URL}
                style={{ width: "23vh", height: "23vh", borderRadius: "50%", boxShadow: "0px 0px 0px 5px gray" }}
                alt="Profile"
              />
            </div>
            <div className="profile-detail d-flex flex-column justify-content-center">
            <p style={{ fontSize: "20px" }}>
              Name : <span>{professionalData?.professional_name}</span>
              </p>
              <p style={{ fontSize: "20px" }}>
              Email : <span>{professionalData?.email}</span>
              </p>
              <p style={{ fontSize: "20px" }}>
              Contact : <span>{professionalData?.contact_no}</span>
              </p>
              <p style={{ fontSize: "20px" }}>
              Location : <span >{professionalData?.address}</span>
              </p>
              <p style={{ fontSize: "20px" }}>
              Gender : <span>{professionalData?.gender}</span>
              </p>
            </div>
          </header>
          <div className="input-field-box" style={{ width: "80%", height: "400px", marginTop: "20px", borderRadius: "10px", boxShadow: "-2px 10px 0px 0px rgb(16, 15, 15)", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            <header className="Input-header" style={{ width: "35%", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", color: "black" }}>
              <h2 style={{ fontSize: "40px" }}>Edit Profile</h2>
            </header>
            <div className="main-input-box" style={{ width: "80%", height: "150px", display: "flex" }}>
              <div className="left-input" style={{ width: "50%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>

              {/* .................inputs................................................... */}
                <input type="text" className="input" placeholder = {professionalData?.professional_name} value={professional_name} onChange = {changeName} />
                <input type="email" className="input" placeholder={professionalData?.email} value={email} onChange = {changeEmail}/>
              </div>
              <div className="left-input" style={{ width: "50%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                <input type="text" className="input" placeholder = {professionalData?.contact_no} value={contact_no} onChange = {changeContact} />
                <input type="text" className="input" placeholder = {professionalData?.address} value={address} onChange = {changeLocation}/>
              </div>
            </div>
            <div className="button1" style={{ width: "100%", height: "100px", display: 'flex', justifyContent: "center", alignItems: 'center' }}>
              <button className="b1" onClick={handleSubmit}>Save & Continue<span></span></button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProfessionalDashboard;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./ProfessionalDashboard.css";
// import { useLocation } from "react-router-dom";

// function ProfessionalDashboard() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [contact, setContact] = useState('');
//   const [locations, setLocation] = useState('');
//   const location = useLocation();
//   console.log('Location object Pro_dash:', location);
//   const { professionalData } = location.state || {};

//   const handleButtonClick = () => {

//   }
//   const handleSubmit = () => { }

//   const changeName = (e)=>{
//     const name = e.target.value;
//     console.log(name);
//     setName(name)
//   }
//   const changeEmail = (e)=>{
//     const email = e.target.value;
//     console.log(email);
//     setEmail(email)
//   }
//   const changeContact = (e)=>{
//     const contact = e.target.value;
//     console.log(contact);
//     setContact(contact);
//   }
//   const changeLocation = (e)=>{
//     const locations = e.target.value;
//     console.log(locations);
//     setLocation(locations)
//   }


//   return (
//     <>
//         {/* Print Redux data here */}
//             {/* <div> 
//             <h1>Professional Data:</h1>
//             <pre>{JSON.stringify(professionalData, null, 2)}</pre>
//         </div> */}

//       <section className="container-fluid d-flex">
//         <div className="contain" style={{ border: "2px solid black", marginLeft: '0px' }}>
//           <div className="header">
//             <div className="logo">Logo</div>
//             <img
//               loading="lazy"
//               src="https://cdn.builder.io/api/v1/image/assets/TEMP/fe68c010723c1b892dc3c41036931fff77610b3df7aa865804aa94c604279436?apiKey=ec8f119356ee46e58c201639c392cbea&"
//               className="logo-img"
//               alt="Logo"
//             />
//           </div>
//           <div className="menu">
//             <button className="menu-item" onClick={() => handleButtonClick("Dashboard")}>
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e526c9bff1adfba813404633009b8da2a73d78615c816b721fd82361ba97ddf?apiKey=ec8f119356ee46e58c201639c392cbea&"
//                 className="menu-icon"
//                 alt="My profile"
//               />
//               <div className="menu-label">My profile</div>
//             </button>
//             <button className="menu-item" onClick={() => handleButtonClick("User")}>
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/81224096299ca4181dbf046544134cad51d0bf4f70451ed2d9c48fd5be9d691b?apiKey=ec8f119356ee46e58c201639c392cbea&"
//                 className="menu-icon"
//                 alt="Admin"
//               />
//               <div className="menu-label">Admin</div>
//             </button>
//             <button className="menu-item" onClick={() => handleButtonClick("Messages")}>
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f0f0a9807df87dbd228da722c2690b3d10175f68c16ac8abd64ecb12600a462?apiKey=ec8f119356ee46e58c201639c392cbea&"
//                 className="menu-icon"
//                 alt="Messages"
//               />
//               <div className="menu-label">Messages</div>
//             </button>
//             <button className="menu-item" onClick={() => handleButtonClick("Order")}>
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f7276744ca6b39e2c042954a806ef4483a390f07f0a5c964d629f05f4398605?apiKey=ec8f119356ee46e58c201639c392cbea&"
//                 className="menu-icon"
//                 alt="Order"
//               />
//               <div className="menu-label">Order</div>
//             </button>
//             <button className="menu-item" onClick={() => handleButtonClick("Saved")}>
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf2f263812eb300619017b1d1b999ec6e5cae47354425852f19d80514497e4d1?apiKey=ec8f119356ee46e58c201639c392cbea&"
//                 className="menu-icon"
//                 alt="Saved"
//               />
//               <div className="menu-label">Saved</div>
//             </button>
//             <button className="menu-item" onClick={() => handleButtonClick("SubscriptionList")}>
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/1f7276744ca6b39e2c042954a806ef4483a390f07f0a5c964d629f05f4398605?apiKey=ec8f119356ee46e58c201639c392cbea&"
//                 className="menu-icon"
//                 alt="SubscriptionList"
//               />
//               <div className="menu-label">SubscriptionList</div>
//             </button>
//             <button className="menu-item" onClick={() => handleButtonClick("Setting")}>
//               <img
//                 loading="lazy"
//                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/e6b2b888e332fc2a478c037b682c6e3144939e99cfb600b4e0dae5e98603294e?apiKey=ec8f119356ee46e58c201639c392cbea&"
//                 className="menu-icon"
//                 alt="Feedback"
//               />
//               <div className="menu-label">Feedback</div>
//             </button>
//             <div className="footer">
//               <div className="profile" style={{ marginTop: "-100px" }}>
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/4676fda71aba8fe5849d41684b58d7f1a5c704e55095a80e485236571d734acb?apiKey=ec8f119356ee46e58c201639c392cbea&"
//                   className="profile-pic"
//                   alt="Profile"
//                 />
//                 <div className="profile-info">
//                   <div className="profile-name">Rohit</div>
//                   <div className="profile-role"></div>
//                 </div>
//                 <img
//                   loading="lazy"
//                   src="https://cdn.builder.io/api/v1/image/assets/TEMP/93984d34e1bb5b80b4bbd4d2f066ce8fc3f938a13a171e1dc3ea803da726e4e2?apiKey=ec8f119356ee46e58c201639c392cbea&"
//                   className="profile-settings"
//                   alt="Settings"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="container-fluid d-flex justify-content-center mt-5" style={{ width: "80%", height: "700px", alignItems: "center", flexDirection: "column" }}>
//           <header className="main-header mt-5">
//             <div className="profile-img">
//               <img
//                 src={professionalData?.profileImg_URL}
//                 style={{ width: "23vh", height: "23vh", borderRadius: "50%", boxShadow: "0px 0px 0px 5px gray" }}
//                 alt="Profile"
//               />
//             </div>
//             <div className="profile-detail d-flex flex-column justify-content-center">
//             <p style={{ fontSize: "20px" }}>
//               Name : <span>{professionalData?.professional_name}</span>
//               </p>
//               <p style={{ fontSize: "20px" }}>
//               Email : <span>{professionalData?.email}</span>
//               </p>
//               <p style={{ fontSize: "20px" }}>
//               Contact : <span>{professionalData?.contact_no}</span>
//               </p>
//               <p style={{ fontSize: "20px" }}>
//               Location : <span >{professionalData?.address}</span>
//               </p>
//               <p style={{ fontSize: "20px" }}>
//               Gender : <span>{professionalData?.gender}</span>
//               </p>
//             </div>
//           </header>
//           <div className="input-field-box" style={{ width: "80%", height: "400px", marginTop: "20px", borderRadius: "10px", boxShadow: "-2px 10px 0px 0px rgb(16, 15, 15)", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
//             <header className="Input-header" style={{ width: "35%", height: "100px", display: "flex", justifyContent: "center", alignItems: "center", color: "black" }}>
//               <h2 style={{ fontSize: "40px" }}>Edit Profile</h2>
//             </header>
//             <div className="main-input-box" style={{ width: "80%", height: "150px", display: "flex" }}>
//               <div className="left-input" style={{ width: "50%", display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>

//               {/* .................inputs................................................... */}
//                 <input type="text" className="input" placeholder="Professional Name" value={name} onChange = {changeName} />
//                 <input type="text" className="input" placeholder="Email" value={email} onChange = {changeEmail}/>
//               </div>
//               <div className="left-input" style={{ width: "50%", display: "flex", flexDirection: "column", alignItems: "center" }}>
//                 <input type="text" className="input" placeholder="Contact" value={contact} onChange = {changeContact} />
//                 <input type="text" className="input" placeholder="Location" value={locations} onChange = {changeLocation}/>
//               </div>
//             </div>
//             <div className="button1" style={{ width: "100%", height: "100px", display: 'flex', justifyContent: "center", alignItems: 'center' }}>
//               <button className="b1" onClick={handleSubmit}>Save & Continue<span></span></button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default ProfessionalDashboard;