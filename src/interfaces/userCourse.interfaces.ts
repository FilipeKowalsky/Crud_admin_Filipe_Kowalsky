import { z } from "zod";
import { userCoursesSchema } from "../schemas";
import { QueryResult } from "pg";

type UserCourse = z.infer<typeof userCoursesSchema>;
type UserCourseResult = QueryResult<UserCourse>;

export {
    UserCourse,
    UserCourseResult
}