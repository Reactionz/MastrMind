const express = require('express')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/fakeAndNotRealDatabase',{useNewUrlParser: true})

const app = new express()
const ejs = require('ejs')
const { resourceUsage } = require('process')

const fileUpload = require('express-fileupload')
const validateMiddleWare = require('./middleware/validationMiddleware')
const expressSession = require('express-session')
const authMiddleware = require('./middleware/authMiddleware')
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware')

app.set('view engine','ejs')

global.loggedIn = null;


app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded())
app.use(fileUpload())
app.use('/posts/store',validateMiddleWare)
app.use(expressSession({
    secret: 'keyboard cat'
}))
app.use("*",(req,res,next)=>{
    loggedIn = req.session.userId
    next()
})

app.listen(4000,()=>{
    console.log('App listening on port 4000')
})

const newPostController = require('./controllers/newPost')
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')
const newUserController = require('./controllers/newUser')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const logoutController = require('./controllers/logout')

app.get('/', homeController)

app.get('/post/:id',getPostController)

app.get('/posts/new',authMiddleware, newPostController)

app.post('/posts/store',authMiddleware, storePostController)

app.get('/auth/register',redirectIfAuthenticatedMiddleware,newUserController)

app.post('/users/register',redirectIfAuthenticatedMiddleware,storeUserController)

app.get('/auth/login',redirectIfAuthenticatedMiddleware, loginController)

app.post('/users/login',redirectIfAuthenticatedMiddleware,loginUserController)

app.get('/auth/logout', logoutController)

app.use((req,res)=>{
    res.render('notfound')
})