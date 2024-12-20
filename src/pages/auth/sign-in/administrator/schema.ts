import { z } from "zod";

export const AdminSignInSchema = z.object({
  email: z
    .string({
      message: "E-mail obrigatório",
    })
    .email({
      message: "E-mail inválido",
    })
    .trim(),
  password: z
    .string({
      message: "Senha obrigatória",
    })
    .min(8, { message: "Senha deve ter no mínimo de 8 caracteres" }),
  remember_me: z.boolean().default(false),
});

export type AdminSignIn = z.infer<typeof AdminSignInSchema>;
