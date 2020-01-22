import { Request, Response } from 'express'

export default (req: Request, res: Response) => {
  let status = 200
  res.status(status)
  res.json({
    status,
    response: "HELLO WORLD"
  })
}