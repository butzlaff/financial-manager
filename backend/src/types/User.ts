import { z } from 'zod';

export const UserLoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const UserSchema = UserLoginSchema.extend({
  name: z.string(),
});

export const UserCreatedSchema = UserSchema.extend({
  id: z.number(),
});

export type UserLogin = z.infer<typeof UserLoginSchema>;

export type User = z.infer<typeof UserSchema>;

export type UserCreated = z.infer<typeof UserCreatedSchema>;
