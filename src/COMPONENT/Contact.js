import './Contact.css'
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
export default () => {
    return <>
    {/* style={{border:"2px solid black"}} */}
        <div className="first-div" >
        {/* style={{border:"2px solid red"}} */}
            <div className='second-div'>
                <h1>Contact US!</h1>
                <div className='content mt-4'>If you have a question or want to give feedback to Grah Saundarya,<br />
                    please use the form below or contact us via email / social media directly!.
                </div>

                <div className=' contact-container'style={{width:"100%",height:"70vh"}}>
                    <div className='row ms-4'>

                        <div className='col-md-8'>
                            <input className=' mt-4 form-control' style={{ backgroundColor: 'white' }} type='text' placeholder='enter your name' />
                            <input className='mt-4 form-control' type='text' placeholder='Your email' />
                            <textarea className='mt-4 form-control h-50' type='text' placeholder='Message'></textarea>

                            <div className='form-group text-center'>
                                <button className='col-md-2 btn btn-primary me-5 buttonContact'>Back</button>
                                <button className='col-md-2 btn btn-danger first-button me-5 buttonContact'>Send Message</button>
                            </div>

                        </div>
                        <div className='col-md-4'>
                            <div className=' mt-4 ms-2 fs-5'>
                                 <BsFillTelephoneFill className='ms-2 fs-4 me-2 text-success'/> 8889990603
                            </div>
                            <div className='mt-4 ms-2 fs-5'>
                            <HiOutlineMail className='ms-2 me-2 fs-3 text-danger'/>
                                sachinprajapati02102018@gmail.com
                            </div>
                        </div>
                    </div>


                </div>
            </div>


        </div>
    </>
}