import { NextFunction, Request, Response } from "express";
import { client } from "../database";
import { UserCourseResult } from "../interfaces";
import { AppError } from "../errors";

export const checkUserCourse = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const { userId } = req.params;

    const queryString: string = 'SELECT * FROM "userCourses" WHERE "userId" = $1';
    const queryResult: UserCourseResult = await client.query( queryString, [ userId ] );

    if ( queryResult.rows.length === 0 ) {
        throw new AppError( "No course found", 404 );
    }

    return next();
}