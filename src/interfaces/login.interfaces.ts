import { z } from "zod";
import { reqLoginSchema, resLoginSchema } from "../schemas";

type ReqLogin = z.infer<typeof reqLoginSchema>;
type ResLogin = z.infer<typeof resLoginSchema>;

export { ReqLogin, ResLogin };
