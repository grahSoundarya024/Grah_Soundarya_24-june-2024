import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Portfolio from "./Portfolio";
import { subscribedList } from "../redux-config/Professionalslice";
import Header from "./Header";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";


const CustomButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#D89619',
    // backgroundColor: '#DC3545',

    color: '#fff',
    '&:hover': {
      backgroundColor: '#b37714',
    },
    padding: '8px 18px',
    borderRadius: '8px',
    fontWeight: 'bolder',
    textTransform: 'none',
  }));



const Professional = () => {
    const navigate = useNavigate();
    const [professional, setProfessional] = useState([]);
    const { professionalList, isLoading, error } = useSelector((store) => store.Professionals);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(subscribedList())
            .then(() => console.log('Data fetched successfully'))
            .catch((err) => console.error('Error fetching data:', err));

    }, [dispatch]);

    useEffect(() => {
        if (!isLoading && !error && professionalList.designers) {
            setProfessional(professionalList.designers);
        }
    }, [professionalList, isLoading, error]);

    const emailGoPortfolio = (professional_id) => {
        // alert(professional_id);
        // navigate(`/portfolio/${professional_id}`, { state: { professionalData: selectedProfessional } });
        console.log('State to be sent:', { professionalData: professional });
        navigate(`/portfolio/${professional_id}`, { state: { professionalData: professional } });
        };
        return (
        <>
        <Header/>
        <p style={{ textAlign: 'center',marginTop:'100px' }}className="text-blk heading ">OUR DESIGNER</p>


                <div className="container mt-3">
                <div className="row  ">
                    {professional.map((professional, index) => <div className="col-md-4 p-5" key={index}>
                        <div className="d-flex flex-column align-items-center mt-2  " style={{ height: "380px", boxShadow: '0 0 5px grey', width: '230px', borderRadius: '50px', backgroundColor: '#EDECE9' }}>
                            <img src={professional.profileImg_URL} style={{ height: "290px", boxShadow: '0 10 5px grey', width: '100% ', borderRadius: '50px', left: '72px', bottom: '72px', borderRadius: '50px' }} />
                            <p className="text-center mb-1" style={{ fontWeight: 'bold',fontSize:'20px' }}> {professional.professional_name}</p>
                            <Link
                                to={`/portfolio/${professional.professional_id}`}
                                className="text-center mb-1"
                                onClick={() => emailGoPortfolio(professional.professional_id)}
                                state={{ professionalData: professional }}
                            > Email: {professional.email}
                            </Link>

                <div className='form-group text-center'>
                <Link to={`/portfolio/${professional.professional_id}`} 
               onClick={() => emailGoPortfolio(professional.professional_id)} 
              state={{ professionalData: professional }} 
              > <CustomButton variant="contained mt-3">View Profile</CustomButton>
             </Link> </div> 

                    </div>
                    </div>)}
                </div>
            </div>
        </>

    );
}
export default Professional;