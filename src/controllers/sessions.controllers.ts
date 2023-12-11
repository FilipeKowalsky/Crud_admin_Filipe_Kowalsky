import { Request,Response } from "express";
import { ResLogin } from "../interfaces/login.interfaces";
import { sessionServices } from "../services";

const create = async (req:Request,res:Response):Promise<Response> => {
  const token:ResLogin = await sessionServices.create(req.body)
  return res.status(201).json(token)
}

export default { create }