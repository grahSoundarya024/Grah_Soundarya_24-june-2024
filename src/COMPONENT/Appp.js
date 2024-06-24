// import { useState,useRef } from 'react';
// // import '../Appp.css';
// import './Appp.css'
// // import { Auth } from './components/Auth.js';
// import {Auth} from "./Auth.js"
// import Cookies from "universal-cookie";
// // import { Chat } from './components/Chat.js';
// import {Chat} from "./Chat.js"
// import { signOut } from 'firebase/auth';
// // import { auth } from './firebase-config.js';
// import { auth } from '../firebase-config.js'
// import { useLocation, useNavigate } from 'react-router-dom';
// const cookies = new Cookies()

// function Appp() {
//   const [isAuth,setIsAuth] = useState(cookies.get("auth-token"));
//   const [room,setRoom] = useState(null);
//   const roomInputRef = useRef();
//   const navigate = useNavigate()
//   const location = useLocation();
//   const { professionalData } = location.state || {};

//   const professional_id = sessionStorage.getItem("professional_id");

//   // alert ("Inside apppp "+professional_id)

//   // const goToPortfolio = (id)=>{
//   //   console.log("in Pro_dash_comp"+id)
//   //   navigate(`/portfolio/${id}`, { state: { professionalData } });
//   //   // porfolio aayi state send req otherwise undefined.

//   const signUserOut = async(id)=>{
//   await signOut(auth);
//   cookies.remove("auth-token")
//   setIsAuth(false);
//   setRoom(null);
//     navigate(`/portfolio/${id}`, { state: { professionalData } });
// }
//   if(!isAuth){
//   return <div><Auth setIsAuth = {setIsAuth}/></div>
//   };
//   return ( 
//   <>  <div>  
//     {room ? (
//     <Chat room = {room}/>
//     ) : (
//     <div className="room">
//       <label>Enter Room Name:</label>
//   <input ref = {roomInputRef}/>
//   <button onClick={()=>setRoom(roomInputRef.current.value)}>Enter Chat</button>
//   </div>
// )}
// </div>
// <div className="sign-out">
//   <button onClick={signUserOut}>Sign Out</button>
// </div>

// </>
// );

  
// }

// export default Appp;

