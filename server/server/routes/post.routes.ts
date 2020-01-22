import hello from './post/hello'

export default app => {
  app.post( "/hello-world", (req,res) => hello(req,res) )
}