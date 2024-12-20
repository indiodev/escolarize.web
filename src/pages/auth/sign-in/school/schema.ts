import { z } from "zod";

export const SchoolSignInSchema = z.object({
  cnpj: z
    .string({
      message: "E-mail obrigatório",
    })
    .trim(),
  password: z
    .string({
      message: "Senha obrigatória",
    })
    .min(8, { message: "Senha deve ter no mínimo de 8 caracteres" }),
  remember_me: z.boolean().default(false),
});

export type SchoolSignIn = z.infer<typeof SchoolSignInSchema>;
