import { z } from 'zod';

export const SignUpSchema = z.object({
  email: z.string().email(),
  phone: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  birthday: z.date(),
  password: z
    .string()
    .min(3)
    .max(128),
  confirm_password: z
    .string()
    .min(3)
    .max(128)
}).superRefine(({ confirm_password, password }, ctx) => {
  if (confirm_password !== password) {
    ctx.addIssue({
      code: "custom",
      message: "The passwords did not match",
      path: ['confirmPassword']
    });
  }
});

export type SignUpSchemaType = z.infer<typeof SignUpSchema>;
