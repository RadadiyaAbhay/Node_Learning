import { useEffect, useState } from 'react';
import './App.css'
import io from 'socket.io-client';
let socket = io.connect("http://localhost:3000");

function App() {
  let [input, setInput] = useState('');
  const [messages, setMessages] = useState('');

  const handleClick = () => {
    socket.emit("send_message", { msg: input });
  }
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages(data)
    })
  }, [socket])
  return (
    <>
      <div>
        <input type="text" value={input} onChange={(e) => { setInput(e.target.value) }} placeholder='Enter Msg...' />
        <button type='button' onClick={handleClick}>send</button>
      </div>
      {<p>{messages.msg}</p>}
    </>
  )
}

export default App
