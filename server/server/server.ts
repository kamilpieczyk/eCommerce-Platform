import * as express from 'express'
import * as bodyparser from 'body-parser'
import postRoutes from './routes/post.routes'
import getRoutes from './routes/get.routes'

const app = express()

class Server {
  constructor(){
    this.init()
    this.middleware()
    this.routes()
  }

  init(){
    const port = "3030"
    app.listen(port, () => {
      console.log(`app listen on port ${port}`)
    })
  }

  middleware(){
    app.use(bodyparser.json())
  }

  routes(){
    getRoutes(app)
    postRoutes(app)
  }
}

new Server()