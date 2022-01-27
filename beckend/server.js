//NPM REQUIRES
const express = require('express')
const cors = require('cors') 
// const res = require('express/lib/response')
const path = require('path')
const expressSession = require('express-session')



//GET toy SERVICE
// const toyService = require('./api/toy/toy.service')
// const userService=require('./services/user.service')

// APPP REQUIRES START()
const app = express()
const http = require('http').createServer(app)

const session = expressSession({
    secret: 'coding is amazing',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
})
// app.use(cors()); 
app.use(session)
app.use(express.json())


if (process.env.NODE_ENV === 'production') {
    // Express serve static files on production environment
    app.use(express.static(path.resolve(__dirname, 'public')))
} else {
    // Configuring CORS
    const corsOptions = {
        // Make sure origin contains the url your frontend is running on
        origin: ['http://127.0.0.1:8080', 'http://localhost:8080','http://127.0.0.1:3000', 'http://localhost:3000'],
        credentials: true
    }
    app.use(cors(corsOptions))
    // app.use(cors())
}
//  const app.use(session({
//     secret: 'some secret token',
//     resave: false,
//     originalMaxAge:600000,
//     saveUninitialized: true,
//     cookie: { secure: false}
// }))

//LISTEN TO 
// app.listen(3030, () => console.log('Server ready at port 3030!'))


const authRoutes = require('./api/auth/auth.routes')
const userRoutes = require('./api/user/user.routes')
const stayRoutes = require('./api/stay/stay.routes')
const orderRoutes = require('./api/order/order.routes')
// const hostOrderRoutes = require('./api/hostOrder/hostOrder.routes')
// const hostRoutes = require('./api/host/host.routes')
const {connectSockets} = require('./services/socket.service')




// routes

const setupAsyncLocalStorage = require('./middlewares/setupAls.middleware')
app.all('*', setupAsyncLocalStorage)

app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/stay', stayRoutes)
app.use('/api/order', orderRoutes)
// app.use('/api/host', hostRoutes)
// connectSockets(http, session)




app.get('/**', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const logger = require('./services/logger.service')
const port = process.env.PORT || 3030
http.listen(port, () => {
    logger.info('Server is running on port: ' + port)
})










//LOGIN USER AND LOGOUT
// app.post('/api/user/login', (req, res) => {
//     const { username, password } = req.body;
//       console.log('login server js ',req.body)
//     userService.checkLogin({ username, password })
//         .then(user => {
//             if (user) {
//                 req.session.theUser = user
//                 console.log(user)
//                 console.log(req.session.theUser)
//                 console.log('Save user to session');
//                 res.send(user)
//             } else {
//                 res.status(401).send('Invalid username / password')
//             }
//         })

// })

// app.delete('/api/user/logout', (req, res) => {
//     req.session.destroy();
//     res.end()

// })

// app.post('/api/user/signup', (req, res) => {
//     const user = req.body;

//     userService.add(user)
//         .then(user => {
//             req.session.theUser = user
//             console.log('Save user to session');
//             res.send(user)
//         })
// })










