import { z } from 'zod';

const SignUpSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(3)
    .max(128)
});

type SignUpSchemaType = z.infer<typeof SignUpSchema>;
