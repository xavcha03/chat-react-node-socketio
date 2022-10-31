import io from 'socket.io-client';

import Identifier from './components/identifier';
import Chat from "./components/chat/Chat"


import { useEffect, useState } from 'react';




const socket = io.connect('http://192.168.0.10:4000');







function App() {

  let [user, setUser] = useState('')




  const sumbitMessageOnServer = (datas) => {
    console.log("Envoie au serveur de : " + datas);
    socket.emit("room1", datas);
  }






  return (< main className='chat-container'>
    <Chat user={user} socket={socket} sumbitMessageOnServer={sumbitMessageOnServer} />


  </main >)
}

export default App;