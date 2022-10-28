import { useEffect } from 'react';
import { useState } from 'react';
import io from 'socket.io-client';

import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'

const socket = io.connect('http://localhost:4000');


function App() {

  let [userMessage, setUserMessage] = useState('');
  let [user, setUser] = useState({
    pseudo: "Xav",
    ip: "4564654654"
  })


  useEffect(() => {
  })


  const handleInputChange = (e) => {
    setUserMessage(e.target.value);
  }

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    socket.emit("room1", user, userMessage);
    setUserMessage('');

  }

  return < main >
    <h1>test socket io</h1>
    <div>
      <TextField value={userMessage} onChange={handleInputChange} id="outlined-basic" label="Message" />
      <Button onClick={handleMessageSubmit} variant="contained">Submit</Button>
    </div>
  </main >
}

export default App;