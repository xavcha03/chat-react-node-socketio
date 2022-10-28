import io from 'socket.io-client';

import MessageForm from './components/form';
import AllChatMessages from './components/AllChatMessages';
import { useEffect } from 'react';



const socket = io.connect('http://192.168.0.10:4000');


function App() {

  useEffect(() => {

  })

  const sumbitMessageOnServer = (datas) => {
    console.log("Envoie au serveur de : " + datas);
    socket.emit("room1", datas);
  }




  return < main className='chat-container'>
    <AllChatMessages socket={socket} />
    <MessageForm sumbitMessageOnServer={sumbitMessageOnServer.bind(this)} />

  </main >
}

export default App;