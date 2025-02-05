const express = require('express')
const app = express()
const port = 3001;

const postsRouter = require('./routers/posts');

// middleware ass static
app.use(express.static('public'))

// middleware per dati da passare i json
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server dei posts')
})

app.use('/posts', postsRouter)

app.listen(port, () => {
    console.log(`Sono in ascolto sulla porta ${port}`);

})