import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import connectDB from './config/db.js'

import shopRoutes from './routes/shopRoutes.js'
import userRoutes from './routes/userRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.use('/api/shops', shopRoutes)
app.use('/api/users', userRoutes)
app.use('/api/categorys', categoryRoutes)

const __dirname = path.resolve()
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '/frontend/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) =>
    {
        res.send('API is running....')
    })
}

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(
        `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
    )
)