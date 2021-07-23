// const http = require('http')

// const { readFileSync } = require('fs')

// // get all files
// const homePage = readFileSync("./navbar-app/index.html");
// const homeStyle = readFileSync("./navbar-app/styles.css");
// const homeImage = readFileSync("./navbar-app/logo.svg");
// const homeLogic = readFileSync("./navbar-app/browser-app.js");

// const server = http.createServer((req, res) => {

//     const url = req.url
//     console.log(req.url)
//     // HTML
//     if (url === '/') {
//         res.writeHead(200, {'content-type':'text/html'})
//         res.write(homePage)
//         // res.write('<h1>Home page</h1>')
//         console.log('User hit the server for HTML')
//     } 
//     // Style
//     else if (url === '/styles.css') {
//         res.writeHead(200, {'content-type':'text/css'})
//         res.write(homeStyle)
//         console.log('User hit the server for CSS styles')
//     } 
//     // Logo
//     else if (url === '/logo.svg') {
//         res.writeHead(200, {'content-type':'image/svg+xml'})
//         res.write(homeImage)
//         console.log('User hit the server for svg Image')
//     } 
//     // JS 
//     else if (url === '/browser-app.js') {
//         res.writeHead(200, {'content-type':'text/javascript'})
//         res.write(homeLogic)
//         console.log('User hit the server for JS')
//     } else {

//     }
    

//     res.end()
//     // res.end('home page')
// })

// server.listen(7000)



















// working with express

const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const { products } = require('./data')


// app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.json([
        { name: 'john' },
        { name: 'susan' }
    ])
})

// if we put index.html inside public folder we will not need to serve it as a separate
// file as done below
// app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, './navbar-app/index.html')))
app.all('*', (req, res) => {
    res.status(404).send('resource not found')
})


app.listen(port, () => console.log(`Example app listening on port  !`))


