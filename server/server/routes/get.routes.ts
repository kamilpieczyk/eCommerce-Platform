import helloWorld from './get/hello'

export default app => {
  app.get("/hello", (req, res) => helloWorld(req, res))
}