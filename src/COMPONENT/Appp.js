import { useState,useRef } from 'react';
// import '../Appp.css';
import './Appp.css'
// import { Auth } from './components/Auth.js';
import {Auth} from "./Auth.js"
import Cookies from "universal-cookie";
// import { Chat } from './components/Chat.js';
import {Chat} from "./Chat.js"
import { signOut } from 'firebase/auth';
// import { auth } from './firebase-config.js';
import { auth } from '../firebase-config.js'
const cookies = new Cookies()

function Appp() {
  const [isAuth,setIsAuth] = useState(cookies.get("auth-token"));
  const [room,setRoom] = useState(null);
  const roomInputRef = useRef();

  const signUserOut = async()=>{
  await signOut(auth);
  cookies.remove("auth-token")
  setIsAuth(false);
  setRoom(null);
  }
  if(!isAuth){
  return <div><Auth setIsAuth = {setIsAuth}/></div>
  };
  return ( 
  <>  <div>  
    {room ? (
    <Chat room = {room}/>
    ) : (
    <div className="room">
      <label>Enter Room Name:</label>
  <input ref = {roomInputRef}/>
  <button onClick={()=>setRoom(roomInputRef.current.value)}>Enter Chat</button>
  </div>
)}
</div>
<div className="sign-out">
  <button onClick={signUserOut}>Sign Out</button>
</div>

</>
);

  
}

export default Appp;
