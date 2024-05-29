import { addDoc, collection, onSnapshot, orderBy, query, serverTimestamp, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { auth, db } from "../firebase-config";
import '../styles/Chat.css'

export const Chat = (props)=>{
    const {room} = props;
   const [newMessage,setNewMessage]  = useState("");
   const [messages,setMessages] = useState ([])
   const messageRef = collection(db,"messages");

   useEffect(()=>{
    const queryMessages = query(messageRef,where("room","==",room),orderBy("createdAt"))
    const unsubsscribe = onSnapshot(queryMessages,(snapshot)=>{
        let messages = []
        // console.log("New Message")
        snapshot.forEach((doc)=>{
            messages.push({...doc.data(),id:doc.id});
        });
        console.log(messages);
        setMessages(messages)
    });
    return () => unsubsscribe();//cleanup function
   },[])

    const handleSubmit = async(e)=>{
        e.preventDefault();
        // console.log(newMessage);
        if(newMessage === "") return ;

        await addDoc(messageRef,{
            text:newMessage,
            createdAt:serverTimestamp(),
            user:auth.currentUser.displayName,
            room,
        });

     setNewMessage("")
    }
return (
    <div className="chat-app">
        <div className="header">
            <h1>Welcome To: {room.toUpperCase()}</h1>
            </div>

            <div className="messages">
                {messages.map((message) => (
                    // <h1 key={message.id}>{message.text}</h1>
                    <div className="message" key = {message.id}>
                        <span className="user">{message.user}</span>
                        {message.text}
                        {/* {message.createdAt} */}

                    </div>
                    
                ))}
            </div>
    <form onSubmit = {handleSubmit}className="new-message-form">
        <input  className="new-message-input"
        placeholder="Type your message here..."
        onChange={(e)=>setNewMessage(e.target.value)}
        value = {newMessage}
        />
        <button type = "submit" className="send-button">Send</button>
    </form>
</div>
)
}