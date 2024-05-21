import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const IsProActive = ()=>{
    const {user_id} = useParams();
    console.log("In isProActive component "+user_id);
    const [isActivePro, setIsActivePro] = useState(null);
    const navigate = useNavigate();

    useEffect(()=>{
        const proStatus = async () =>{
        try{
        const response = await axios.get("http://localhost:3001/professional/continueAsPro", {params:{user_id}})
            console.log(response.data);
            if(response.data.message.includes("Professional not found")){
                alert(response.data.message);
            }else if (response.data.message.includes("subscription is active")){
                // let professional = response.data.data.professional_id;
                //alert(response.data.message);
                setIsActivePro(response.data.data.professional_id);
                navigate('/RoomTypePost');
            }else{
            alert(response.data.message);
            }
        }catch(err){
                console.log(err);
                alert("Internal server Error");
                }
} 
proStatus();
    },[user_id]);
    
}
export default IsProActive;
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";

// const IsProActive = () => {
//   const { user_id } = useParams();
//   console.log("In isProActive component " + user_id);
//   const [isActivePro, setIsActivePro] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // const checkSubscription = async () => {
//       try {
//         const response =  axios.get("http://localhost:3001/professional/continueAsPro", { params: { user_id } });
//         console.log(response.data);

//         if (response.data.message.includes("Professional not found")) {
//           alert(response.data.message);
//         } else if (response.data.message.includes("subscription is active")) {
//         //   alert(response.data.message);
//           setIsActivePro(response.data.data.professional_id);
//           navigate('/RoomTypePost');
//         } else {
//           alert(response.data.message);
//         }
//       } catch (err) {
//         console.error(err);
//         alert('Failed to check subscription status.');
//       }
//     // };

//     // checkSubscription();
//   }, [user_id, navigate]);

//   return null; // Or return some meaningful UI if needed
// }

// export default IsProActive;
