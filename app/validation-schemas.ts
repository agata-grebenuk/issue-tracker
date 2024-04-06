import { z } from "zod";

export const creareIssueSchema = z.object({
    title: z.string({ required_error: "Title is required" }).min(1, "Title must contain at least  1 symbol").max(255),
    description: z.string({ required_error: "Description is required" }).min(1, "Description must contain at least  1 symbol")
});
export type IssueForm = z.infer<typeof creareIssueSchema>;