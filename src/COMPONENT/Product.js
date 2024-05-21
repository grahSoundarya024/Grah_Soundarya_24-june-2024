import { Link } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
// import {ProductList} from './ProductList.css'
import Product from "./Product.css"

export default () => {
    const [file, setFile] = useState()

    function handleChange(event) {
        setFile(event.target.files[0])
    }
    console.log(file);
    return <>
     <div className="header">
      <div className="header-main">
        <div className="header-logo">
          <div className="logo"></div>
        </div>
        <div className="header-content">
          <div className="header-list">
            <span>Home</span>
            <span>About</span>
            <span>Services</span>
            <span>Contact Us</span>
          </div>
          <div className="header-search">
            <div><input className='search' type="text " placeholder="Search"  ></input></div>
          
         
          <div className='search-icon'>
               <i class="fa-solid fa-magnifying-glass search-icon" ></i> 
          </div>
           
          </div>
           
          <div className="header-login">
          <i class = "fa fa-user"></i>
            <span>Login</span>
          </div>
          

          <div className="header-cart">
          <i class = "fa fa-shopping-cart"></i>
            <span>Cart</span>
          </div>
        </div>
      </div>
    </div>
        <div className='container ' >
            
            <div className='Main-Content'>
                <p1>Product Details</p1>
                <div className='row mt-3'>

                    <div className='col-md-8 fields'>
                        <input type='text' placeholder='Enter name' className='ms-5 form-control flex-grow-1 flex-basis-0 ' />
                        <input type='text' placeholder='price' className='mt-4 ms-5 form-control flex-grow-1 flex-basis-0' />
                        <input type='text' placeholder='discription' className='mt-4 ms-5 form-control flex-grow-1 flex-basis-0' />
                        <input type='text' placeholder='status' className='mt-4 ms-5 form-control flex-grow-1 flex-basis-0' />
                        <input type='text' placeholder='stock quantity' className='ms-5 mt-3 form-control flex-grow-1 flex-basis-0' />
                        {/* <input type='text' placeholder='stock quantity' className='ms-5 mt-3 form-control flex-grow-1 flex-basis-0'> */}
                        <input type='file' placeholder='add image' onChange={handleChange} accept='image/*' className='form-control-file mt-2' />
                    {/* </div> */}
                    <div className='form-group row m-2'>
                        <button className='col-md-2 btn btn-outline-primary first-button me-5'>Back</button>
                        <button className='col-md-2 btn btn-danger'>Add</button>
                    </div>
                    </div>

                </div>

            </div>
        </div>
    </>
}