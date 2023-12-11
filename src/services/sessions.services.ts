import { compare } from "bcryptjs";
import { client } from "../database";
import { AppError } from "../errors";
import { ReqLogin, ResLogin, User, UserResult } from "../interfaces";
import { sign } from "jsonwebtoken";

const create = async ( payload: ReqLogin ): Promise<ResLogin> => {
  const queryString: string = 'SELECT * FROM "users" WHERE "email" = $1;';
  const queryFormat: UserResult = await client.query( queryString, [payload.email] );
  if ( !queryFormat.rowCount ) {
    throw new AppError("Wrong email/password", 401);
  }
  const user: User = queryFormat.rows[0];
  const password: boolean = await compare(payload.password, user.password);
  if ( !password ) {
    throw new AppError("Wrong email/password", 401);
  }
  const token: string = sign(
    { email: user.email, admin: user.admin },
    process.env.SECRET_KEY!,
    { subject: user.id.toString(), expiresIn: process.env.EXPIRES_IN! }
  );

  return { token };
};

export default { create };