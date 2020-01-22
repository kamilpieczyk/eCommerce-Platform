import { Request, Response } from 'express'

export default (req: Request, res: Response) => {
  const { hello } = req.body
  console.log( hello )
  let status
  let response

  if(hello){
    status = 200
    response = hello
  }
  else{
    status = 404
    response = "no message recived"
  }

  res.status(status)
  res.json({
    status,
    response
  })
}