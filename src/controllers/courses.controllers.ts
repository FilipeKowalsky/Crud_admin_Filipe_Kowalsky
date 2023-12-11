import { Request, Response } from "express";
import { Course, CourseCreate, CourseRead } from "../interfaces";
import { courseServices } from "../services";

const create = async ( req: Request, res: Response ): Promise<Response> => {
    const { admin } = res.locals.decoded;
    const courseBody: CourseCreate = req.body;
    const course: Course = await courseServices.create( courseBody, admin );

    return res.status(201).json( course );
};

const read = async ( req: Request, res: Response ): Promise<Response> => {
    const course: CourseRead = await courseServices.read();

    return res.status(200).json(course);
}

const register = async ( req: Request, res: Response ): Promise<Response> => {
    const { admin } = res.locals.decoded;
    const { userId, courseId } = req.params;
    const registerUserInCourse: {message: string} = await courseServices.register( admin, courseId, userId );

    return res.status(201).json(registerUserInCourse);
}

const readByCourse = async ( req: Request, res: Response ): Promise<Response> => {
    const { courseId } = req.params;
    const { admin } = res.locals.decoded;
    const read = await courseServices.readByCourse( admin, courseId );

    return res.status(200).json(read);
}

const deactivate = async ( req: Request, res: Response ): Promise<Response> => {
    const { admin } = res.locals.decoded;
    const { userId, courseId } = req.params;
    await courseServices.deactivate( admin, courseId, userId );

    return res.status(204).json();
}

export default { create, read, register, readByCourse, deactivate };