import { Router } from "express";
import { userControllers } from "../controllers";
import { checkExistEmail, validateToken, validatedBody, checkId } from './../middlewares';
import { createUserSchema } from "../schemas/users.schemas";

export const userRouter:Router= Router()

userRouter.post("",validatedBody( createUserSchema ),checkExistEmail,userControllers.create);
userRouter.get("",validateToken,userControllers.read);
userRouter.get("/:userId/courses",validateToken,checkId,userControllers.readCoursesByUser)