import { WebSocketServer } from 'ws'

const server = new WebSocketServer({ port: 5001 })

server.on('connection', (socket) => {
socket.on ('message', (message) => {
 const parsedMessage = JSON.parse(message)
    broadcast( parsedMessage.content)

})
})

function broadcast (content) {
    server.clients.forEach(client => {
     const sendable = JSON.stringify({
     "content":content
     })
      client.send(sendable)
    })
}