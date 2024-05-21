// import './Home.css';

// import axios from "axios";
// import { useEffect, useState} from 'react';

// import { useNavigate } from 'react-router-dom';
// import Header from './Header';
// import About from './About';
// import Footer from './Footer';
// import Contact from './Contact';

// const Home = () => {
    
//     const [homedesign, sethomdesigns] = useState([]);
//     const navigate= useNavigate();
//     useEffect(() => {
//         axios.get("http://localhost:3001/design/viewAllRoomType")
//             .then(response => {
//                 console.log(response.data.data)
//                 sethomdesigns(response.data.data)
//             }).catch(err => {
//                 console.log("errorr")
//                 console.log(err);
//             })
//     }, []);
//     const [homeproduct, sethomeproduct] = useState([]);
//     useEffect(() => {
//             axios.get("http://localhost:3001/product/getCategory")
//             .then(response => {
//                 console.log("products:",response.data.products)
//                 sethomeproduct(response.data.products)
//             }).catch(err => {
//                 console.log("errorr",err)
//                 console.log(err);
//             })
//     }, []);
//     const [homedesigner, sethomedesigner] = useState([]);
//     useEffect(() => {
//         axios.get("http://localhost:3001/admin/professionalList")
//             .then(response => {
//                 console.log("product:", response.data.data)
//                 sethomedesigner(response.data.data)
//             }).catch(err => {
//                 console.log("errorr")
//                 console.log(err);
//             })
//     }, []);
//     const handleViewMore = (design_id) => {
//         console.log("jiya::",design_id);
//         navigate(`/design/${design_id}`);
       
//     };
//     return <>
//         <Header/>
//         <div className="home mt-3">
//             <div className="home-container">
//                 <div className="home-banner">
//                     <div className="home-video">
//                         <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
//                             <div className="carousel-indicators">
//                                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active slider" aria-current="true" aria-label="Slide 1" ></button>
//                                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className='slider' aria-label="Slide 2"></button>
//                                 <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className='slider' aria-label="Slide 3"></button>
//                             </div>
//                             <div className="carousel-inner">
//                                 <div className="carousel-item active">
//                                     <img src="./image.png" className="d-block w-100" alt="..." ></img>
//                                     <div className="carousel-caption ">
//                                         <h1>Making Your Personal Gateway To Dreamland </h1>
//                                         <h1 className='color'>, A Reality</h1>

//                                         {/* <p>Some representative placeholder content for the first slide.</p> */}
//                                     </div>
//                                 </div>
//                                 <div className="carousel-item">
//                                     <img src="./Slider-5-Living.jpg" className="d-block w-100 h-100" alt="..." />
//                                     <div className="carousel-caption d-none d-md-block">
//                                         <h1>Entertain In Limited Edition Encusivity  </h1>
//                                         <h1 className='color'>A Reality</h1>
//                                     </div>
//                                 </div>
//                                 <div className="carousel-item">
//                                     <img src="./Slider-1-Bedroom.jpg" className="d-block w-100 h-100" alt="..." />
//                                     <div className="carousel-caption d-none d-md-block">
//                                         <h1>Get Inspinrd With Top Interior </h1>
//                                         <h1 className='color'> Style</h1>
//                                     </div>
//                                 </div>
//                             </div>
//                             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
//                                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                                 <span className="visually-hidden">Previous</span>
//                             </button>
//                             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
//                                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                                 <span className="visually-hidden">Next</span>
//                             </button>
//                         </div>
//                     </div>

//                 </div>
//         <div className='design-section mt-5'>

//             <div className="home-homeproduct text-center">
//                 {<h1><span className=" heading text-center  fs-1 fw-bold border-bottom  border-1 pt-1 ps-4 pe-4 ">Designs</span></h1>}
//                 <div className="containerr mt-5 mb-3 d-flex align-items-center">
//                     <div className="containerr-inline d-flex align-items-center mb-3">
//                         {homedesign.map((design, index) => <div key={index}>
//                             {<div className="product-box d-flex flex-column align-items-center">
//                                 <div className="product-img m-1"><img src={design.image_url} style={{ height: "440px", width: '100%' }} />

//                                     <div className="overlay">
//                                         <div className='fav'>
//                                             <h4 className="text-white">{design.roomType}</h4>
//                                             <i className="fa-solid fa-heart fa-xl" ></i>
//                                         </div>
//                                         <button className='viewmore'onClick={() => handleViewMore(design.roomType_id)}>View more</button>
//                                     </div>

//                                 </div>


//                             </div>}
//                         </div>)}
//                     </div>

//                 </div>

//             </div>

//         </div>
//         <div className='design-section mt-5'>

//             <div className="home-homeproduct text-center">
//                 {<h1><span className=" heading text-center  fs-1 fw-bold border-bottom  border-1 pt-1 ps-4 pe-4 ">The Product Market</span></h1>}

//                 <div className="containerr mt-5 mb-3 d-flex align-items-center">
//                     <div className="containerr-inline d-flex align-items-center mb-3">
//                         {homeproduct.map((product, index) => <div key={index}>
//                             {<div className="product-box d-flex flex-column align-items-center justify-content-start">
//                                 <div className="product-img m-1"><img src={product.category_image} style={{ height: "440px", width: '100%' }} />

//                                     <div className="overlay">
//                                         <div className='fav'>
//                                             <h4 className="text-white">{product.category_name}</h4>
//                                             <i className="fa-solid fa-heart fa-xl" ></i>
//                                         </div>
//                                         <button className='viewmore '>View more</button>
//                                     </div>

//                                 </div>
//                             </div>}
//                         </div>)}
//                     </div>

//                 </div>

//             </div>

//         </div>
//         <div className="m-2 homedesigners-div " style={{height:"580px"}}>
//             <div className="row mb-5 ms-2 home-homedesigner text-center"style={{height:"550px"}}>
//                 <div className="col-md-8 mx-auto text-center">
//                     {/* <h6 className="text-primary">TEAM</h6> */}
//                     <h1 className='heading text-center  fs-1 fw-bold border-bottom  border-1 pt-1 ps-4 pe-4'>Our Designers</h1>
//                     <p>Lorem ipsum dolor sit amet consectetur nisi necessitatibus repellat distinctio eveniet eaque fuga
//                         in cumque optio consectetur harum vitae debitis sapiente praesentium aperiam aut</p>
//                 </div>
//                 <div className="row text-center g-4 container-homedesigner d-flex align-items-center">
//                 {/* <marquee  direction="left"> */}
//                     <div className="col-lg-3 col-sm-6 gap-5 d-flex ms-4">

//                         {homedesigner.map((designer, index) => <div key={index}>
//                             <div className="team-member designer-div card-effect mb-4 designer-box">
//                                 <img className=' designer-img mt-4' src={designer.profileImg_URL} />
//                                 <h5 className="mb-0 mt-4">{designer.professional_name}</h5>
//                                 <p>Location:{designer.city}</p>
//                                 <button className=' btn veiwmored'>View More</button>
//                             </div>
//                         </div>)}
//                     </div>
//                   {/* </marquee> */}
//                 </div>
//             </div>
//         </div>
//          <About/>
//           <Contact/>
//          <Footer/> 
//         </div>
//         </div>
       
        
//     </>
// }
// export default Home;
import './Home.css';

import axios from "axios";
import { useEffect, useState} from 'react';

import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Footer from './Footer';
import Contact from './Contact';
import Portfolio from "./Portfolio";
import { useDispatch, useSelector } from "react-redux";
import { subscribedList } from "../redux-config/Professionalslice";
import SubHeader from './subHeader';


const Home = () => {
    
    const [homedesign, sethomdesigns] = useState([]);
    const navigate= useNavigate();
    useEffect(() => {
        axios.get("http://localhost:3001/design/viewAllRoomType")
            .then(response => {
                console.log(response.data.data)
                sethomdesigns(response.data.data)
            }).catch(err => {
                console.log("errorr")
                console.log(err);
            })
    }, []);
    const [homeproduct, sethomeproduct] = useState([]);
    useEffect(() => {
            axios.get("http://localhost:3001/product/getCategory")
            .then(response => {
                console.log("products:",response.data.products)
                sethomeproduct(response.data.products)
            }).catch(err => {
                console.log("errorr",err)
                console.log(err);
            })
    }, []); 

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
        alert(professional_id);
        console.log('State to be sent:', { professionalData: professional });
        navigate(`/portfolio/${professional_id}`, { state: { professionalData: professional } });
        };


    const handleViewMore = (design_id) => {
        console.log("jiya::",design_id);
        navigate(`/design/${design_id}`);
       
    };
    return <>
        <Header/>
        <SubHeader/>
        <div className="home mt-3">
            <div className="home-container">
                <div className="home-banner">
                    <div className="home-video">
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active slider" aria-current="true" aria-label="Slide 1" ></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" className='slider' aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" className='slider' aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="./image.png" className="d-block w-100" alt="..." ></img>
                                    <div className="carousel-caption ">
                                        <h1>Making Your Personal Gateway To Dreamland </h1>
                                        <h1 className='color'>, A Reality</h1>

                                        {/* <p>Some representative placeholder content for the first slide.</p> */}
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="./Slider-5-Living.jpg" className="d-block w-100 h-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h1>Entertain In Limited Edition Encusivity  </h1>
                                        <h1 className='color'>A Reality</h1>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="./Slider-1-Bedroom.jpg" className="d-block w-100 h-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h1>Get Inspinrd With Top Interior </h1>
                                        <h1 className='color'> Style</h1>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

                </div>
        <div className='design-section mt-5'>

            <div className="home-homeproduct text-center">
                {<h1><span className=" heading text-center  fs-1 fw-bold border-bottom  border-1 pt-1 ps-4 pe-4 ">Designs</span></h1>}
                <div className="containerr mt-5 mb-3 d-flex align-items-center">
                    <div className="containerr-inline d-flex align-items-center mb-3">
                        {homedesign.map((design, index) => <div key={index}>
                            {<div className="product-box d-flex flex-column align-items-center">
                                <div className="product-img m-1"><img src={design.image_url} style={{ height: "440px", width: '100%' }} />

                                    <div className="overlay">
                                        <div className='fav'>
                                            <h4 className="text-white">{design.roomType}</h4>
                                            <i className="fa-solid fa-heart fa-xl" ></i>
                                        </div>
                                        <button className='viewmore'onClick={() => handleViewMore(design.roomType_id)}>View more</button>
                                    </div>

                                </div>


                            </div>}
                        </div>)}
                    </div>

                </div>

            </div>

        </div>
        <div className='design-section mt-5'>

            <div className="home-homeproduct text-center">
                {<h1><span className=" heading text-center  fs-1 fw-bold border-bottom  border-1 pt-1 ps-4 pe-4 ">The Product Market</span></h1>}

                <div className="containerr mt-5 mb-3 d-flex align-items-center">
                    <div className="containerr-inline d-flex align-items-center mb-3">
                        {homeproduct.map((product, index) => <div key={index}>
                            {<div className="product-box d-flex flex-column align-items-center justify-content-start">
                                <div className="product-img m-1"><img src={product.category_image} style={{ height: "440px", width: '100%' }} />

                                    <div className="overlay">
                                        <div className='fav'>
                                            <h4 className="text-white">{product.category_name}</h4>
                                            <i className="fa-solid fa-heart fa-xl" ></i>
                                        </div>
                                        <button className='viewmore '>View more</button>
                                    </div>
                                </div>
                            </div>}
                        </div>)}
                    </div>

                </div>
        </div>

        </div>
        <div className="m-2 homedesigners-div " style={{height:"580px"}}>
            <div className="row mb-5 ms-2 home-homedesigner text-center"style={{height:"550px"}}>
                <div className="col-md-8 mx-auto text-center">
                    {/* <h6 className="text-primary">TEAM</h6> */}
                    <h1 className='heading text-center  fs-1 fw-bold border-bottom  border-1 pt-1 ps-4 pe-4'>Our Designers</h1>
                </div>
                <div className="row text-center g-4 container-homedesigner d-flex align-items-center">
                {/* <marquee  direction="left"> */}
                    <div className="col-lg-3 col-sm-6 gap-5 d-flex ms-4">

                        {professional.map((professional, index) => <div key={index}>
                            <div className="team-member designer-div card-effect mb-4 designer-box">
                                <img className=' designer-img mt-4' src={professional.profileImg_URL} />
                                <h5 className="mb-0 mt-4">{professional.professional_name}</h5>
                                <p>Location:{professional.city}</p>
                                {/* <button  to={`/portfolio/${professional.professional_id}`}
                                 onClick={() => emailGoPortfolio(professional.professional_id)}   state={{ professionalData: professional }} className=' btn veiwmored' 
                                
                            >View Profile</button> */}
                            <button className='btn veiwmored'>
  <Link
    to={`/portfolio/${professional.professional_id}`}
    onClick={() => emailGoPortfolio(professional.professional_id)}
    style={{ textDecoration: 'none', color: 'inherit' }}
    state={{ professionalData: professional }}
  >
    View Profile
  </Link>
</button>
</div>
                        </div>)}
                    </div>
                  {/* </marquee> */}
                </div>
            </div>
        </div>
         <About/>
          <Contact/>
         <Footer/> 
        </div>
        </div>
       
        
    </>
}
export default Home;











