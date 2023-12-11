import { z } from "zod";
import { courseSchema, createCourseSchema, readCourseSchema } from "../schemas";
import { QueryResult } from "pg";

type Course = z.infer<typeof courseSchema>;
type CourseCreate = z.infer<typeof createCourseSchema>;
type CourseRead = z.infer<typeof readCourseSchema>;
type CourseResult = QueryResult<Course>;

export { Course, CourseCreate, CourseRead, CourseResult };