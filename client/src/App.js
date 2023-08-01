 import io  from 'socket.io-client'
 import {useEffect,useState} from 'react'
 const socket=io.connect("http://localhost:8443")
  

function App() {
  const [messag,setMessage]=useState("")
  const [messagerecieve,setMessagerecieve]=useState("")
  const sendmsg=()=>{
    // sending message to backend
    socket.emit("send_message",{message: messag})

  }
  // useeffect specify that listeneing to the socket also whenever we see the message
  // whenever the  event is emmitted then the function will run again
  // so the event we listening is 
  useEffect(()=>{
socket.on("receive_message",(data)=>{
  setMessagerecieve(data.message)
  console.log(data,"6666")
  // alert(data.message)

})
  },[socket])
  return (
     
   <div>
  
    <input placeholder="Messages...." onChange={(event)=>{
      setMessage(event.target.value)
    }}/>
    <button onClick={sendmsg}>Send message</button>
    <h1>Messages</h1>
    {messagerecieve}
    

   </div>
  );
}

export default App;
