import './Contact.css'
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import { styled } from '@mui/material/styles';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


//SEND MUI
const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#D89619',
    // backgroundColor: '#DC3545',

    color: '#fff',
    '&:hover': {
      backgroundColor: '#b37714',
    },
    padding: '10px 20px',
    borderRadius: '8px',
    fontWeight: 'bold',
    textTransform: 'none',
  }));
  // baCK
  const LowEmphasisButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#F4F1F1',
    color: '#000',
    '&:hover': {
      backgroundColor: '#c0c0c0',
    },
    padding: '8px 16px',
    borderRadius: '8px ',
    fontWeight: 'normal',
    textTransform: 'none',
    color: '#D89619',
    border:'1px solid #D89619'
  }));
  
  
  
  
export default () => {
    return <>
    {/* style={{border:"2px solid black"}} */}
        <div className="first-div" >
        {/* style={{border:"2px solid red"}} */}
            <div className='second-div'>
            <p className="text-blk heading" style={{ textAlign: 'center' }}>
            Contact Us
            </p>
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
                                <LowEmphasisButton
                                variant="contained mt-4 mr-5"
                                startIcon={<ArrowBackIcon />}
                                >
                                Back
                                </LowEmphasisButton>

                                {/* <GradientButton>Back</GradientButton> */}
                                <CustomButton
                                    variant="contained mt-4"
                                endIcon={<SendIcon />}
                            >
                            Send Message
                            </CustomButton>

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