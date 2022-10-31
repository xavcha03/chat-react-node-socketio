import MessageForm from "./MessageForm"
import AllChatMessages from "./AllChatMessages"

function Chat({ socket, sumbitMessageOnServer }) {
    return (<>
        <AllChatMessages socket={socket} />
        <MessageForm sumbitMessageOnServer={sumbitMessageOnServer} />
    </>
    )
}

export default Chat;