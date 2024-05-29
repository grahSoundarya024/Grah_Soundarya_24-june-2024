// {/* ================================================================================= */}
// <Route path="/design/:design_id" element={<Design/>} />
// <Route path='/particular/:design_id' element={<Particular/>}/>
// <Route path='/search/:roomType'element={<Search/>}/>
//       </Routes>
//       </Router>
//   );
// }
// export default App;
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './COMPONENT/SignUp.js'
import SignIn from './COMPONENT/SignIn.js';
import Footer from './COMPONENT/Footer.js';
import Home from './COMPONENT/Home.js';
import Professional from './COMPONENT/Professional.js'
import Portfolio from './COMPONENT/Portfolio.js';
import ByRoomType from './COMPONENT/ByRoomType.js';
import Product from './COMPONENT/Product.js';
import Header from './COMPONENT/Header.js';
import Design from './COMPONENT/Design.js';
import Particular from './COMPONENT/Perticuler.js';
import Search from './COMPONENT/Search.js';
import FavDesign from './COMPONENT/FavDesign.js';
import RoomTypePost from './COMPONENT/RoomTypePost.js';
import DesignPost from './COMPONENT/DesignPost.js';
import Videoget from './COMPONENT/Videoget.js';
// import ChatBot from './COMPONENT/ChatBot.js';
import ApplicationForm from './COMPONENT/ApplicationForm.js';
import Subscription from './COMPONENT/Subscription.js';
import About from './COMPONENT/About.js';
import Contact from './COMPONENT/Contact.js';
import IsProActive from './COMPONENT/IsProActive.js';
import FavDesignPost from './COMPONENT/FavDesignPost.js';
import ProfessionalDashboard from './COMPONENT/ProfessionalDashboard.js';
import Appp from './COMPONENT/Appp.js';
// import { Chat } from '@mui/icons-material';

function App() {
  return (
    <Router>

    <Routes>

       <Route path="/" element={<SignIn />} ></Route>
        <Route path="/signUp" element={<SignUp/>}></Route>
      <Route path="/home" element={<Home/>} />
        <Route path = "/footer" element = {<Footer/>}></Route>
         <Route path = "/home" element = {<Home/>}></Route> 
        <Route path = "/professionals" element = {<Professional/>}></Route>
        <Route path= "/product" element = {<Product/>}></Route>
        <Route path = "/header" element = {<Header/>}></Route>
      

        <Route path="/portfolio/:professional_id" element={<Portfolio />} />

  <Route path="/home/professional_id/:id" element={<Portfolio />} />
  {/* not working  */}
{/* viewMore button click */}
<Route path="/portfolio/:professional_id" element={<Portfolio />} />

  <Route path="/home/professional_id/:id/roomType_id/:roomType_id" element={<ByRoomType/>} />
  {/* <Route path="/home/designImg_id/:id" element={<FavDesign/>} /> */}
    <Route path="/home/designImg_id/:id" element={<FavDesignPost/>} />
    <Route path = "/favouritesd"  element = {<FavDesign/>}/>
  <Route path="/professionals" element={<Professional/>} />
  <Route path = "/RoomTypePost" element = {<RoomTypePost/>}></Route>
  <Route path = "/DesignPost/:id" element = {<DesignPost/>}></Route>
  <Route path="/RoomTypePost/DesignPost" element={<DesignPost/>} />
  <Route path = "/Videoget/:id" element = {<Videoget/>}></Route>
  {/* <Route path = "/chatbot" element = {<ChatBot/>}></Route> */}
  <Route path = '/about' element={<About/>}/>
  <Route path = "/subscription" element = {<Subscription/>}/>
    <Route path="/applicationForm" element = {<ApplicationForm/>} />
    <Route path = "/contact" element = {<Contact/>}></Route>
    <Route path = 'isProActive/:user_id' element = {<IsProActive/>}></Route>
    <Route path="/pro_dashboard/:professional_id" element={<ProfessionalDashboard/>} />



{/* ================================================================================= */}
<Route path="/design/:roomType_id" element={<Design/>} />
<Route path='/particular/:designImg_id' element={<Particular/>}/>
<Route path='/search/:roomType'element={<Search/>}/>

{/* <Route path='/react-chat'element={<Chat/>}/> */}
<Route path = "/Appp" element = {<Appp/>}></Route>
</Routes>
</Router>
  );
}
export default App;

