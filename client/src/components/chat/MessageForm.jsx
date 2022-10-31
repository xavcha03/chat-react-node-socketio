import { useState } from "react";

function MessageForm({ sumbitMessageOnServer }) {

    let [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    }

    //Form submittqed
    const handleMessageSubmit = (e) => {
        e.preventDefault();
        //User console log
        console.log("The user try to send :  " + message);
        //sendMessageToServer
        sumbitMessageOnServer(message);
        //Message reset
        setMessage('');
    }

    return (
        <form className="form" onSubmit={handleMessageSubmit}>
            <input type="text" onChange={handleInputChange} className="form__input" value={message} />
            <button className="form__button">Send</button>
        </form>
    )
}

export default MessageForm;