import http from 'http'
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cors from 'cors'
import compression from 'compression'
import routes from './routes'

const app = express()
app.use(cors())
app.use(compression())
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(routes)
const server = http.createServer(app)
const port = process.env.PORT || 3030

setImmediate(() => {
  server.listen(port, () => {
    console.log('Express server listening on %d', port)
  })
})

export default app