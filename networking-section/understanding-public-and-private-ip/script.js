import http from 'http';

const server = http.createServer((req, res)=>{
    req.send("hello world")
})

// server.listen(4000, '0.0.0.0', ()=>{
//     console.log(`Server is running in port number 4000`)
// })

// By default the value is always 0.0.0.0 
// This means all available ip that this device has
server.listen(4000, ()=>{
    console.log(`Server is running in port number 4000`)
})