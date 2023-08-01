const express=require('express')
const app=express()
const socket=require('socket.io')
const cors = require('cors')
app.use(cors())

const server=app.listen(8443,()=>{
    console.log("server running at 8443")
})
const io = socket(server, {
   
    cors: {
      origin:  "http://localhost:3000",
      method:["GET","POST"],
      
    }
  })

  
io.on("connection",(socket)=>{
     
    console.log(`User connected ${socket.id}`)
    socket.on("send_message",(data)=>{
      console.log(data,"data")
      // then we want to emit the data even connected with event
      // the below line specify that sending the  response to frontend
       
      socket.broadcast.emit("receive_message",data)

    })
  

})
