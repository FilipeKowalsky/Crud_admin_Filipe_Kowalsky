import { Router } from "express";
import { courseControllers } from "../controllers";
import { checkId, validateToken, validatedBody } from "../middlewares";
import { createCourseSchema } from "../schemas";

export const courseRouter: Router = Router();

courseRouter.post("",validateToken,validatedBody( createCourseSchema ),courseControllers.create);
courseRouter.get("",courseControllers.read)
courseRouter.post("/:courseId/users/:userId",validateToken,checkId,courseControllers.register)
courseRouter.get("/:courseId/users",validateToken,courseControllers.readByCourse);
courseRouter.delete("/:courseId/users/:userId",validateToken,checkId,courseControllers.deactivate);