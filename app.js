const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()

app.use(cors())

app.get('/users', async (req, res) => {
    const url = 'https://api-books-ac3j.onrender.com/users'
    try {
        const response = await axios.get(url)
        res.json(response.data)
    } catch (error) {
        res.status(404).json({mensaje: 'Imposible acceder a los usuarios'})
    }
})

app.get('/books', async (req, res) => {
    const url = 'https://api-books-ac3j.onrender.com/books'
    try {
        const response = await axios.get(url)
        res.json(response.data)
    } catch (error) {
        res.status(404).json({mensaje: 'Imposible acceder a los libros'})
    }
})

app.listen(3000, () => {
    console.log('Server active on http://localhost:3000')
})