import { z } from 'zod';

export const SignInSchema = z.object({
  username: z.string(),
  password: z
    .string()
    .max(128)
});

export type SignInSchemaType = z.infer<typeof SignInSchema>;
