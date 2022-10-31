import { useEffect } from "react";
import { useState } from "react";

function Message({ message }) {
    return (
        <div key={message} className="message">
            <p className="message__user">User...</p>
            <p className="message__text">{message}</p>

        </div>
    )
}

function AllChatMessages({ socket }) {

    //Init an array of Messages
    const [messages, setMessages] = useState([]);




    //reception depuis le serveur
    socket.on("room1", (datas) => {
        console.log("From Server : " + datas);
        //Add message to arrayMessage
        setMessages([...messages, datas]);

    });


    return (
        <section className="msgContainer">
            {
                messages.map((message) => {
                    return <Message key={message} message={message} />
                })
            }

        </section>
    )
}

export default AllChatMessages;