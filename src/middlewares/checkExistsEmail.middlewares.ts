import { NextFunction, Request, Response } from "express";
import { UserResult } from "../interfaces";
import { AppError } from "../errors";
import { client } from "../database";

export const checkExistEmail = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    const { email } = req.body;

    if ( !email ) return next();

    const queryString: string = 'SELECT * FROM "users" WHERE "email" = $1';
    const queryResult: UserResult = await client.query( queryString, [email] );

    if ( queryResult.rows.length > 0 ) {
        throw new AppError( "Email already registered", 409 );
    }

    return next();
};