import { z } from "zod";

export const SendEmailSchema = z.object({
  email: z
    .string({
      message: "E-mail obrigatório",
    })
    .email({
      message: "E-mail inválido",
    })
    .trim(),
});

export type SendEmail = z.infer<typeof SendEmailSchema>;
