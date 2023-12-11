import { Request, Response } from "express";
import { UserCreate, UserRead, UserReturn } from "../interfaces";
import { userServices } from "../services";
import { boolean } from "zod";

const create = async ( req: Request, res: Response ): Promise<Response> => {
  const userBody: UserCreate = req.body
  const user: UserReturn = await userServices.create( userBody );
  
  return res.status(201).json(user);
};

const read = async ( req: Request, res: Response ): Promise<Response> => {
  const { admin } = res.locals.decoded;
  const users: UserRead = await userServices.read( admin );

  return res.status(200).json( users );
};

const readCoursesByUser = async ( req: Request, res: Response ): Promise<Response> => {
  const { userId } = req.params;
  const { admin } = res.locals.decoded;
  const coursesByUser = await userServices.coursesReadByUser( userId, admin );

  return res.status(200).json(coursesByUser);
};

export default {
  create,
  read,
  readCoursesByUser
}