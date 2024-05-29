// import React from 'react';
// import ChatBot from "react-simple-chatbot";
// import { Segment } from 'semantic-ui-react';
// import './ChatBot.css'

// export default () => {
//     const steps = [
//         {
//             id: "Greet",
//             message: "Hello! Welcome to our Interior design chatbot! Please enter your name.",
//             trigger: "GetName",
//         },
//         {
//             id: "GetName",
//             user: true,
//             trigger: "Welcome",
//         },
//         {
//             id: "Welcome",
//             message: "Hi {previousValue}! How can we assist you today?",
//             trigger: "Options",
//         },
//         {
//             id: "Options",
//             options: [
//                 { value: "Design", label: "Design Inquiry", trigger: "Design" },
//                 { value: "Product", label: "Product Inquiry", trigger: "Product" },
//                 { value: "Cost", label: "Cost and Budget", trigger: "Cost" },
//                 { value: "Portfolio", label: "Portfolio and Past Work", trigger: "Portfolio" },
//                 { value: "Timeline", label: "Process and Timeline", trigger: "Timeline" },
//                 { value: "Appointment", label: "Appointment Scheduling", trigger: "Appointment" },
//                 { value: "Testimonials", label: "Customer Testimonials", trigger: "Testimonials" },
//             ],
//         },
//         {
//             id: "Design",
//             message: "Of course! We'd love to help you with your living room design. Could you provide some details about your preferences, style, and any specific requirements you have?",
//             trigger: "MoreHelp",
//         },
//         {
//             id: "Product",
//             message: "Yes, we offer customizable furniture options to suit your unique needs and style preferences. Would you like to discuss specific customization options or explore our catalog?",
//             trigger: "MoreHelp",
//         },
//         {
//             id: "Cost",
//             message: "Our pricing varies depending on the scope of the project and your specific requirements. We offer personalized quotes based on factors such as room size, design complexity, and desired materials. Would you like to discuss your project in more detail to provide a tailored estimate?",
//             trigger: "MoreHelp",
//         },
//         {
//             id: "Portfolio",
//             message: "Certainly! We have a portfolio showcasing our past projects across various styles and themes. Would you like us to send you a link to view our portfolio?",
//             trigger: "MoreHelp",
//         },
//         {
//             id: "Timeline",
//             message: "The timeline for completing an interior design project can vary depending on factors such as project scope, complexity, and availability of materials. We typically work closely with our clients to establish a timeline that meets their needs and expectations. Would you like to discuss your project timeline in more detail?",
//             trigger: "MoreHelp",
//         },
//         {
//             id: "Appointment",
//             message: "We offer complimentary consultations with our experienced designers to discuss your project goals and vision. Would you like to schedule an appointment for a consultation? If so, please provide your preferred date and time, and we'll get back to you to confirm.",
//             trigger: "MoreHelp",
//         },
//         {
//             id: "Testimonials",
//             message: "Yes, we value feedback from our clients, and we have a collection of testimonials and reviews from satisfied customers. Would you like us to share some testimonials with you?",
//             trigger: "MoreHelp",
//         },
//         {
//             id: "MoreHelp",
//             message: "Is there anything else I can help you with?",
//             trigger: "Options",
//         }
//     ];

//     return (
//         <Segment className="float-end">
//             <ChatBot
//                 steps={steps}
//                 floating={true}
//                 botAvatar={"https://avatars.dicebear.com/api/male/bot.svg"} // You can change the avatar image
//             />
//         </Segment>
//     );
// }

// // import React from 'react';
// // import ChatBot from "react-simple-chatbot";
// // import { Segment } from 'semantic-ui-react';
// // import './ChatBot.css';

// // export default () => {
// //     const steps = [
// //         {
// //             id: "Greet",
// //             message: "Hello! Welcome to our Interior design chatbot! Please enter your name.",
// //             trigger: "GetName",
// //         },
// //         {
// //             id: "GetName",
// //             user: true,
// //             trigger: "Welcome",
// //         },
// //         {
// //             id: "Welcome",
// //             message: "Hi {previousValue}! How can we assist you today?",
// //             trigger: "Options",
// //         },
// //         {
// //             id: "Options",
// //             options: [
// //                 { value: "Design", label: "Design Inquiry", trigger: "Design" },
// //                 { value: "Product", label: "Product Inquiry", trigger: "Product" },
// //                 { value: "Cost", label: "Cost and Budget", trigger: "Cost" },
// //                 { value: "Portfolio", label: "Portfolio and Past Work", trigger: "Portfolio" },
// //                 { value: "Timeline", label: "Process and Timeline", trigger: "Timeline" },
// //                 { value: "Appointment", label: "Appointment Scheduling", trigger: "Appointment" },
// //                 { value: "Testimonials", label: "Customer Testimonials", trigger: "Testimonials" },
// //             ],
// //         },
// //         {
// //             id: "Design",
// //             message: "Of course! We'd love to help you with your living room design. Could you provide some details about your preferences, style, and any specific requirements you have?",
// //             trigger: "MoreHelp",
// //         },
// //         {
// //             id: "Product",
// //             message: "Yes, we offer customizable furniture options to suit your unique needs and style preferences. Would you like to discuss specific customization options or explore our catalog?",
// //             trigger: "MoreHelp",
// //         },
// //         {
// //             id: "Cost",
// //             message: "Our pricing varies depending on the scope of the project and your specific requirements. We offer personalized quotes based on factors such as room size, design complexity, and desired materials. Would you like to discuss your project in more detail to provide a tailored estimate?",
// //             trigger: "MoreHelp",
// //         },
// //         {
// //             id: "Portfolio",
// //             message: "Certainly! We have a portfolio showcasing our past projects across various styles and themes. Would you like us to send you a link to view our portfolio?",
// //             trigger: "MoreHelp",
// //         },
// //         {
// //             id: "Timeline",
// //             message: "The timeline for completing an interior design project can vary depending on factors such as project scope, complexity, and availability of materials. We typically work closely with our clients to establish a timeline that meets their needs and expectations. Would you like to discuss your project timeline in more detail?",
// //             trigger: "MoreHelp",
// //         },
// //         {
// //             id: "Appointment",
// //             message: "We offer complimentary consultations with our experienced designers to discuss your project goals and vision. Would you like to schedule an appointment for a consultation? If so, please provide your preferred date and time, and we'll get back to you to confirm.",
// //             trigger: "MoreHelp",
// //         },
// //         {
// //             id: "Testimonials",
// //             message: "Yes, we value feedback from our clients, and we have a collection of testimonials and reviews from satisfied customers. Would you like us to share some testimonials with you?",
// //             trigger: "MoreHelp",
// //         },
// //         {
// //             id: "MoreHelp",
// //             message: "Is there anything else I can help you with?",
// //             trigger: "Options",
// //         }
// //     ];

// //     return (
// //         <Segment className="float-end">
// //             <ChatBot
// //                 steps={steps}
// //                 floating={true}
// //                 botAvatar={"https://avatars.dicebear.com/api/male/bot.svg"}
// //                 customStyle={{ backgroundColor: '#D89619' }}
// //                 customClass="rsc-ts-bubble"
// //                 userBubbleStyle={{ backgroundColor: '#ffffff' }}
// //                 userBubbleClass="rsc-ts-bubble-user"
// //             />
// //         </Segment>
// //     );
// // }
