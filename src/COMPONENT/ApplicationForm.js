// import React, { useState } from "react";
// import axios from "axios"; // Import axios
// import "./ApplicationForm.css";
// import Header from "./Header";


// const INPUT_CLASS = "form-control bg-zinc-700 rounded";
// const SELECT_CLASS = "form-select bg-zinc-700 rounded";

// const ApplicationForm = () => {

//   const [formData, setFormData] = useState({
//     professional_name: "",
//     email: "",
//     city: "",
//     address: "",
//     gender: "",
//     contact_no: "",
//     profileImg_URL: "",
//     pincode: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     console.log("form Data", formData);
//     try {
//       const response = await axios.post(
//         "http://localhost:3001/professional/saveProfile",
//         formData
//       );
//       console.log(response);
//       alert("Form submited");
//     } catch (error) {
//       console.log(error);
//       alert("Form cancelled..");
//     }
//   };

//   const checkoutHandler = async (amount) => {
//     try {
//       // Fetching payment key
//       const {
//         data: { key },
//       } = await axios.get("http://localhost:3001/payment/getkey");

//       // Initiating payment checkout
//       console.log(key);
//       const {
//         data: { order },
//       } = await axios.post("http://localhost:3001/payment/checkout", {
//         amount,
//       });

//       // Configuring Razorpay options
//       const options = {
//         key,
//         amount: order.amount,
//         currency: "INR",
//         name: "Grah Soundarya",
//         description: "Tutorial of RazorPay",
//         image: "https://www.pngarts.com/files/1/Gift-PNG-Transparent-Image.png",
//         order_id: order.id,
//         callback_url: "http://localhost:3001/payment/paymentverification",
//         prefill: {
//           // name: ${formData.professional_name},
//           // contact: formData.contact_no,
//           // email: "example@example.com", // Assuming you have user's email
//         },
//         notes: {
//           address: formData.address,
//         },
//         theme: {
//           color: "blue",
//         },
//         // Handler function to be executed after payment is completed
//         handler: async function (response) {
//           try {
//             // Verify payment status
//             console.log(response);
//             const paymentVerificationResponse = await axios.post(
//               "http://localhost:3001/payment/paymentverification",
//               {
//                 razorpay_order_id: order.id,
//                 razorpay_payment_id: response.razorpay_payment_id,
//                 razorpay_signature: response.razorpay_signature,
//                 amount: amount,
//               }
//             );

//             if (paymentVerificationResponse.data.success) {
//               // Payment verified, now call placeOrder API
//               const myOrder = await axios.post(
//                 "http://localhost:3001/professional/saveProfile",
//                 formData
//               );
//               alert("Order placed successfully..");
//               // navigate("/cart");
//               console.log("PlaceOrder API response:", myOrder.data);
//             } else {
//               // Payment verification failed
//               console.error(
//                 "Payment verification failed:",
//                 paymentVerificationResponse.data.error
//               );
//             }
//           } catch (error) {
//             console.error("Error during payment verification:", error);
//           }
//         },
//       };
//       const razor = new window.Razorpay(options);
//       razor.open();
//     } catch (error) {
//       console.error("Error during payment checkout:", error);
//     }
//   };

//   const handleChange = (name, value) => {
//     console.log(name, value);
//     setFormData({ ...formData, [name]: value });
//   };
  
//   return (
//     <>
//       <Header />
//       <section>
//         <div
//           className="container mt-5 shadow-lg p-3 mb-5 bg-body rounded"
//           style={{
//             marginRight: "10px",
//             width: "50%",
//             height: "600px",
//             marginLeft: "400px",
//           }}
//         >
//           <div className="row">
//             <div className="col-md-12 ">
//               <h2
//                 className="text-center font-bolder mb-4"
//                 style={{ color: "black" }}
//               >
//                 Fill the Application
//               </h2>
//               <div className="mb-3">
//                 <input
//                   name="professional_name"
//                   type="text"
//                   placeholder="Full Name"
//                   className={INPUT_CLASS}
//                   onChange={(e) => handleChange(e.target.name, e.target.value)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   name="email"
//                   type="email"
//                   placeholder="Enter Email Address"
//                   className={INPUT_CLASS}
//                   onChange={(e) => handleChange(e.target.name, e.target.value)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   name="contact_no"
//                   type="tel"
//                   placeholder="Phone Number"
//                   className={INPUT_CLASS}
//                   onChange={(e) => handleChange(e.target.name, e.target.value)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   name="address"
//                   type="text"
//                   placeholder="Street Address"
//                   className={INPUT_CLASS}
//                   onChange={(e) => handleChange(e.target.name, e.target.value)}
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   name="profileImg_URL"
//                   type="url"
//                   placeholder="Profile Url"
//                   className={INPUT_CLASS}
//                   onChange={(e) => handleChange(e.target.name, e.target.value)}
//                   // value = {profileLink} onChange={handleprofile}
//                 />
//               </div>
//               <div className="row g-3">
//                 <div className="col">
//                   <select
//                     name="gender"
//                     className={SELECT_CLASS}
//                     onChange={(e) =>
//                       handleChange(e.target.name, e.target.value)
//                     }
//                   >
//                     <option>Select Gender</option>
//                     <option>Male</option>
//                     <option>Female</option>
//                     <option>Other</option>
//                   </select>
//                 </div>
//               </div>

//               <div className="row g-3 mt-1">
//                 <div className="col">
//                   <select
//                     name="city"
//                     className={SELECT_CLASS}
//                     onChange={(e) =>
//                       handleChange(e.target.name, e.target.value)
//                     }
//                   >
//                     <option>City</option>
//                     <option>indore</option>
//                   </select>
//                 </div>
//                 {/* <div className="col">
//                 <select name='' className={SELECT_CLASS} onChange={(e) => handleChange(e.target.name, e.target.value) }>
//                 <option>State</option>
//                 <option>MP</option>
//                 </select>
//               </div> */}
//               </div>
//               <div className="row g-3 mt-3">
//                 {/* <div className="col">
//                 <select  className={SELECT_CLASS} onChange={(e) => handleChange(e.target.name, e.target.value) }>
//                 <option>Country</option>
//                 <option>INDIA</option>
//                 </select>
//               </div> */}
//                 <div className="col">
//                   <input
//                     name="pincode"
//                     type="text"
//                     placeholder="Pin Code"
//                     className={INPUT_CLASS}
//                     onChange={(e) =>
//                       handleChange(e.target.name, e.target.value)
//                     }
//                   />
//                 </div>
//               </div>
//               <div className="d-flex justify-content-around mt-4">
//                 <button className="btn btn-secondary me-5">Cancel</button>
//                 <button
//                   style={{
//                     backgroundColor: "#edbe66",
//                     color: "black",
//                     borderRadius: "5px",
//                     border: "none",
//                   }}
//                   onClick={() => checkoutHandler(999)}
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ApplicationForm;
import React, { useState } from "react";
import axios from "axios";
import "./ApplicationForm.css";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const INPUT_CLASS = "form-control bg-zinc-700 rounded";
const SELECT_CLASS = "form-select bg-zinc-700 rounded";


const ApplicationForm = () => {
  const [formData, setFormData] = useState({
    professional_name: "",
    email: "",
    city: "",
    address: "",
    gender: "",
    contact_no: "",
    profileImg_URL: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};

    // Validate professional_name (only letters and spaces allowed)
    if (!formData.professional_name.match(/^[A-Za-z\s]+$/)) {
      newErrors.professional_name = "Name can only contain letters and spaces.";
    }

    // Validate email (basic email format)
    if (!formData.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
      newErrors.email = "Invalid email format.";
    }

    // Validate contact_no (10-digit phone number)
    if (!formData.contact_no.match(/^\d{10}$/)) {
      newErrors.contact_no = "Phone number must be 10 digits.";
    }

    // Validate profileImg_URL (basic URL format)
    if (!formData.profileImg_URL.match(/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/)) {
      newErrors.profileImg_URL = "Invalid URL format.";
    }

    // Validate pincode (6-digit number)
    if (!formData.pincode.match(/^\d{6}$/)) {
      newErrors.pincode = "Pincode must be 6 digits.";
    }

    // Validate gender (must be selected)
    if (!formData.gender) {
      newErrors.gender = "Please select a gender.";
    }

    // Validate city (must be selected)
    if (!formData.city) {
      newErrors.city = "Please select a city.";
    }

    // Validate address (must not be empty)
    if (!formData.address) {
      newErrors.address = "Address cannot be empty.";
    }

    setErrors(newErrors);

    // Return boolean indicating whether there are errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validate()) {
      try {
        const response = await axios.post(
          "http://localhost:3001/professional/saveProfile",
          formData
        );
        console.log(response);
        alert("Form submitted");
        navigate("/subscription");
      } catch (error) {
        console.log(error);
        alert("Form submission failed");
      }
    } else {
      alert("Please correct the errors in the form.");
    }
  };

  const checkoutHandler = async (amount) => {
    try {
      const {
        data: { key },
      } = await axios.get("http://localhost:3001/payment/getkey");

      const {
        data: { order },
      } = await axios.post("http://localhost:3001/payment/checkout", {
        amount,
      });

      const options = {
        key,
        amount: order.amount,
        currency: "INR",
        name: "Grah Soundarya",
        description: "Tutorial of RazorPay",
        image: "https://www.pngarts.com/files/1/Gift-PNG-Transparent-Image.png",
        order_id: order.id,
        callback_url: "http://localhost:3001/payment/paymentverification",
        prefill: {},
        notes: {
          address: formData.address,
        },
        theme: {
          color: "blue",
        },
        handler: async function (response) {
          try {
            const paymentVerificationResponse = await axios.post(
              "http://localhost:3001/payment/paymentverification",
              {
                razorpay_order_id: order.id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                amount: amount,
              }
            );

            if (paymentVerificationResponse.data.success) {
              const myOrder = await axios.post(
                "http://localhost:3001/professional/saveProfile",
                formData
              );
              alert("Order placed successfully.");
              console.log("PlaceOrder API response:", myOrder.data);
            } else {
              console.error(
                "Payment verification failed:",
                paymentVerificationResponse.data.error
              );
            }
          } catch (error) {
            console.error("Error during payment verification:", error);
          }
        },
      };
      const razor = new window.Razorpay(options);
      razor.open();
    } catch (error) {
      console.error("Error during payment checkout:", error);
    }
  };

  const handleChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <Header />
      <section>
        <div
          className="container mt-5 shadow-lg p-3 mb-5 bg-body rounded"
          style={{
            marginRight: "10px",
            width: "50%",
            height: "auto",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div className="row">
            <div className="col-md-12">
              <h2
                className="text-center font-bolder mb-4"
                style={{ color: "black" }}
              >
                Fill the Application
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    name="professional_name"
                    type="text"
                    placeholder="Full Name"
                    className={INPUT_CLASS}
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                  />
                  {errors.professional_name && (
                    <small className="text-danger">
                      {errors.professional_name}
                    </small>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    name="email"
                    type="email"
                    placeholder="Enter Email Address"
                    className={INPUT_CLASS}
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                  />
                  {errors.email && (
                    <small className="text-danger">{errors.email}</small>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    name="contact_no"
                    type="tel"
                    placeholder="Phone Number"
                    className={INPUT_CLASS}
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                  />
                  {errors.contact_no && (
                    <small className="text-danger">{errors.contact_no}</small>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    name="address"
                    type="text"
                    placeholder="Street Address"
                    className={INPUT_CLASS}
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                  />
                  {errors.address && (
                    <small className="text-danger">{errors.address}</small>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    name="profileImg_URL"
                    type="url"
                    placeholder="Profile Url"
                    className={INPUT_CLASS}
                    onChange={(e) =>
                      handleChange(e.target.name, e.target.value)
                    }
                  />
                  {errors.profileImg_URL && (
                    <small className="text-danger">
                      {errors.profileImg_URL}
                    </small>
                  )}
                </div>
                <div className="row g-3">
                  <div className="col">
                    <select
                      name="gender"
                      // className={SELECT_CLASS}
                      onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                      }
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.gender && (
                      <small className="text-danger">{errors.gender}</small>
                    )}
                  </div>
                  <div className="col">
                    <select
                      name="city"
                      // className={SELECT_CLASS}
                      onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                      }
                    >
                      <option value="">Select City</option>
                      <option value="indore">Indore</option>
                    </select>
                    {errors.city && (
                      <small className="text-danger">{errors.city}</small>
                    )}
                  </div>
                </div>
                <div className="row g-3 mt-3">
                  <div className="col">
                    <input
                      name="pincode"
                      type="text"
                      placeholder="Pin Code"
                      className={INPUT_CLASS}
                      onChange={(e) =>
                        handleChange(e.target.name, e.target.value)
                      }
                    />
                    {errors.pincode && (
                      <small className="text-danger">{errors.pincode}</small>
                    )}
                  </div>
                </div>
                <div className="d-flex justify-content-around mt-4">
                  <button type="button" className="btn btn-secondary me-5">
                    Cancel
                  </button>
                  <button 
                    type="submit"
                    style={{
                      backgroundColor: "#edbe66",
                      color: "black",
                      borderRadius: "5px",
                      border: "none",
                      padding: "10px 20px",
                      fontSize: "16px",
                      // fontWeight: "bolder",
                    }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ApplicationForm;
