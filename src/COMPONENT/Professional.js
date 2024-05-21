import { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import Portfolio from "./Portfolio";
import { useDispatch, useSelector } from "react-redux";
import { subscribedList } from "../redux-config/Professionalslice";
import Header from "./Header";


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

    const movetoPortfolio = (professional_id) => {
        alert(professional_id);
        navigate(`/home/professional_id/${professional_id}`);
    }

    const emailGoPortfolio = (professional_id) => {
        alert(professional_id);
        // navigate(`/portfolio/${professional_id}`, { state: { professionalData: selectedProfessional } });
        console.log('State to be sent:', { professionalData: professional });
        navigate(`/portfolio/${professional_id}`, { state: { professionalData: professional } });
        };
        return (
        <>
        <Header/>
            <div className="container mt-3">
                <div className="row border border-dark ">
                    {professional.map((professional, index) => <div className="col-md-4 p-5" key={index}>
                        <div className="d-flex flex-column align-items-center mt-2  " style={{ height: "380px", boxShadow: '0 0 5px grey', width: '230px', borderRadius: '50px', backgroundColor: '#EDECE9' }}>
                            <img src={professional.profileImg_URL} style={{ height: "290px", boxShadow: '0 10 5px grey', width: '100% ', borderRadius: '50px', left: '72px', bottom: '72px', borderRadius: '50px' }} />
                            <p className="text-center mb-1" style={{ fontWeight: 'bold',fontSize:'20px' }}> {professional.professional_name}</p>
                            {/* <Link to={`/portfolio/${professional.professional_id}`} className="text-center mb-1" onClick={() => emailGoPortfolio(professional.professional_id)}>Email: {professional.email}</Link> */}
                            {/* <Link to={{
               pathname: `/portfolio/${professional.professional_id}`, state:{professionalData: professional},
            }}
             className="text-center mb-1" onClick={() => emailGoPortfolio(professional.professional_id)}>Email: {professional.email}</Link> */}
                            <Link
                                to={`/portfolio/${professional.professional_id}`}
                                className="text-center mb-1"
                                onClick={() => emailGoPortfolio(professional.professional_id)}
                                state={{ professionalData: professional }}
                            >
                                Email: {professional.email}
                            </Link>

            <button onClick={() => movetoPortfolio(professional.professional_id)} className="btn btn-primary mt-3">View Profile</button>
                        </div>
                    </div>)}
                </div>
            </div>
        </>

    );
}
export default Professional;