const express = require('express')
const app = express()
const PORT = 3000

//Routers
const postsRouter = require('./routers/posts')

//Middlewares
const serverError = require('./middleware/serverError')
const notFoundError = require('./middleware/notFoundError')

app.use(express.json())

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})

//Use routers
app.use('/api/posts', postsRouter)



app.get("/", (req, res) => {
    res.send("Welcome in my Blog server")
})


//Error Middlewares
app.use(serverError)

app.use(notFoundError)