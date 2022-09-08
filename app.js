const express = require("express")
const app = express()
const { WebSocketServer } = require("ws")
const wss = new WebSocketServer({ port: 8001 })

app.use(express.static("public"))

app.listen(8000, () => {
    console.log('test app')
})

wss.on("connection", (ws, request) => {
    ws.on("message", data => {
        console.log(`Received from user: ${data}`)
        ws.send(`Received: ${data}`)
    })
    ws.send(`Hello ${request.socket.remoteAddress}`)
})

