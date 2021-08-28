
import Event from '@ioc:Adonis/Core/Event'

 import Ws from 'providers/SocketProvider'
 Ws.boot()
 
 /**
  * Listen for incoming socket connections
  */
 Ws.io.on('connection', (socket) => {
   socket.emit('news', { hello: 'world' })
    
   socket.on('roomJoin', (data) => {
        const roomId = data.roomId || data['roomId']
        const userToken = data.userToken || data['userToken']
    
        if(!userToken || !roomId){
            socket.emit('invalidJoin', {
                message: 'incorrect data to join. Make sure you are logged in and joining a good room.'
            })
        }

        socket.emit('updateRooms')


    })

   socket.on('roomCreate', (data)=>{
       Event.emit('new:room', {
           roomName: data.roomName
       })

   })
 })