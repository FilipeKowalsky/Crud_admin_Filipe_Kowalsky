import { z } from "zod";
import { userSchema, createUserSchema, readUserSchema, returnUserSchema } from "../schemas";
import { QueryResult } from "pg";

type User = z.infer<typeof userSchema>;
type UserCreate = z.infer<typeof createUserSchema>;
type UserRead = z.infer<typeof readUserSchema>
type UserReturn = z.infer<typeof returnUserSchema>
type UserResult = QueryResult<User>;

export { User, UserCreate, UserRead, UserResult,UserReturn };
