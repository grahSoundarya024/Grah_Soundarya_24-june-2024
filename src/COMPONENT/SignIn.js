import '../App.css';
import React, { useState } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import { TextField } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GoogleSign from './GoogleSign';
import { useNavigate } from 'react-router-dom';

export default () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const validate = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(username)) {
      toast.error("Invalid email format.");
      return false;
    }
    return true;
  }
  const signIn = async () => {
    if (validate()) {
      try {
        const response = await axios.post(`http://localhost:3001/user/signIn?username=${username}&password=${password}`);
      console.log(response);
        if (response.status === 200) {
          toast.success("Sign In success");
          setTimeout(() => {

            const userId = response.data.user.user_id;             //for fav = name
            const userName = response.data.user.name;
            // //isProActive = username
            // const username = response.data.user.email;

            sessionStorage.setItem("current_user_id", userId);
            sessionStorage.setItem("user_name", userName);
            // sessionStorage.setItem("username",username);
            sessionStorage.setItem("isLoggedIn", "true");

            navigate("/home")
          }, 1500)
        }
      } catch (err) {
        console.log(err.response);
        if (err.response.status === 401) {
          toast.error("Password is Inavlid");
        } else {
          toast.error("Sign In failed");
        }
      };
    }
  }
  return (
    <>
      <ToastContainer />
      <div className='main-container'>
        <div className='signUp-box'>
          <div className='signUp-img' style={{ position: 'relative', textAlign: 'center' }}>
            <img src="sign-in-img.jpg" alt="sign-in-img" height={450} width={340} />
            <div className="signUp-img-txt">
              <h3>Welcome Back!</h3>
              <h6>Enter your personal details to use all of<br />the site features</h6>
            </div>
          </div>
          <div className='signUp-form'>
            <div className='top-sign-in-line'></div>
            <Navbar style={{ display: 'flex', justifyContent: 'center' }}>
              <h4><strong><u>Login</u></strong></h4>
            </Navbar>
            <TextField
              label="Enter Username" type="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              InputProps={{
                sx: { height: '40px', width: '300px', borderRadius: '12px', marginBottom: '25px', background: '#F4F1F1' },
              }}
              InputLabelProps={{
                sx: { background: '#F4F1F1', paddingRight: '5px', paddingLeft: '5px' },
              }}
            />
            <TextField
              label="Enter Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                sx: { height: '40px', width: '300px', borderRadius: '12px', marginBottom: '20px', background: '#F4F1F1', paddingLeft: '5px' },
              }}
              InputLabelProps={{
                sx: { background: '#F4F1F1', paddingRight: '5px', paddingLeft: '5px' },
              }}
            />
            <Button className="button-class" onClick={signIn} type="submit" style={{ width: '300px', marginBottom: '20px', borderRadius: '12px', height: '40px', backgroundColor: '#B5918C', border: '#B5918C' }}>Sign In</Button>

            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
              <h6 style={{ margin: 0, textAlign: 'center', color: '#555' }}>
                <strong>or sign in with</strong>
              </h6>
            </div>
            <GoogleSign />
            <div className="ml-4">
              Don't have an account? <Link to="/signup" style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }}>Sign Up</Link>
            </div>

            <Link to="/forgotpassword" style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
              <u>Forgot Password</u>
            </Link>

          </div>
        </div>
      </div>
    </>
  );
}
