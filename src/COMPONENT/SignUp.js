
import { useState } from 'react';
import '../App.css';
import { Navbar, Button } from 'react-bootstrap';
import { TextField } from '@mui/material';
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export default () => {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [contact_no, setContact_no] = useState("");

    const validate = () => {
        const nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Minimum 8 characters, at least one letter and one number
        const phoneRegex = /^\d{10}$/;

        if (!nameRegex.test(name)) {
            toast.error("Invalid name. Please enter both first name and surname.");
            return false;
        }
        if (!emailRegex.test(username)) {
            toast.error("Invalid email format.");
            return false;
        }
        // if (!passwordRegex.test(password)) {
        //     toast.error("Password must be at least 8 characters long and include at least one letter and one number.");
        //     return false;
        // }
        if (!phoneRegex.test(contact_no)) {
            toast.error("phone number should be 10 digits.");
            return false;
        }
        return true;
    };

    const SignUp = () => {
        if (validate()) {

        axios.post("http://localhost:3001/user/signUp", { name, username, password, contact_no })
            .then(response => {
                console.log(response.data);
                if (response.status == 200) {
                    toast.success("sign Up success");
                }
            }).catch(err => {
                console.log(err);
                toast.error("signUp failed");
            })
        }
    }
    return <>
        <ToastContainer />
        <div className="main-container">
            <div className='signUp-box'>
                <div className='signUp-img' style={{ position: 'relative', textAlign: 'center' }}>
                    <img src="sign-up-img.jpg" alt="sign-up-img" height={450} width={340} />
                    <div className="signUp-img-txt" >
                        <h3>Welcome to Interior<br />Design Hub</h3>
                    </div>
                </div>
                <div className='signUp-form'>
                    <Navbar>
                        <h5 style={{ alignItems: "center", fontFamily: "sans-serif", color: "#B5918C" }}><strong><u>Create new account </u></strong></h5>
                    </Navbar>

                    <TextField
                        label="Enter Your Name" type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        InputProps={{
                            sx: { height: '40px', width: '300px', borderRadius: '12px', marginBottom: '25px', background: '#F4F1F1' },
                        }}
                        InputLabelProps={{
                            sx: { background: '#F4F1F1', paddingRight: '5px', paddingLeft: '5px' },
                        }}
                    />
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

                            sx: { height: '40px', width: '300px', borderRadius: '12px', marginBottom: '25px', background: '#F4F1F1' },
                        }}
                        InputLabelProps={{
                            sx: { background: '#F4F1F1', paddingRight: '5px', paddingLeft: '5px' },
                        }}
                    />
                    <TextField
                        label="Your Mobile number"
                        type="tel"
                        value={contact_no}

                        onChange={(e) => setContact_no(e.target.value)}
                        InputProps={{

                            sx: { height: '40px', width: '300px', borderRadius: '12px', marginBottom: '25px', background: '#F4F1F1' },
                        }}
                        InputLabelProps={{
                            sx: { background: '#F4F1F1', paddingRight: '5px', paddingLeft: '5px' },
                        }}
                    />
                    <Button className="button-class" onClick={SignUp} type="submit" style={{ width: '300px', marginBottom: '15px', borderRadius: '12px', height: '40px', backgroundColor: '#B5918C', border: '#B5918C' }}>Sign Up</Button>

                    <div className="ml-4">
                        Already have an account? <Link to="/" className="link-class" style={{ textDecoration: 'underline', color: 'blue', cursor: 'pointer' }}>Sign In</Link>
                    </div>
                </div>
            </div>
        </div>

    </>
}

