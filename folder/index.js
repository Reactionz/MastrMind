//node, express, and mongoDB development
/*
const express = require('express')
const http = require('http')
const fs = require('fs')

const homePage = fs.readFileSync('index.html')
const aboutPage = fs.readFileSync('about.html')
const contactPage = fs.readFileSync('contact.html')
const notFoundPage = fs.readFileSync('notfound.html')
const server = http.createServer((req, res) => {
  //console.log(req.url)
  //res.end('Hello Node.js')
  if(req.url === '/about')
    res.end(aboutPage)
  else if(req.url === '/contact')
    res.end(contactPage)
  else if(req.url === '/')
    res.end(homePage)
  else {
    res.writeHead(404)
    res.end(notFoundPage)
  }
})

server.listen(3000)
*/
