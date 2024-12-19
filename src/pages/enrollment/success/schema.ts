import { z } from "zod";

export const AddressSchema = z.object({
  email: z
    .string({
      message: "E-mail obrigatório",
    })
    .trim()
    .email({
      message: "E-mail inválido",
    })
    .optional(),
  cep: z
    .string({
      message: "CEP obrigatório",
    })
    .min(1, { message: "CEP obrigatório" }),
  uf: z
    .string({
      message: "UF obrigatório",
    })
    .min(1, { message: "UF obrigatório" }),
  city: z
    .string({
      message: "Cidade obrigatória",
    })
    .min(1, { message: "Cidade obrigatória" }),
  number: z
    .string({ message: "Número obrigatório" })
    .min(1, { message: "Número obrigatório" }),
  neighborhood: z
    .string({
      message: "Bairro obrigatório",
    })
    .min(1, { message: "Bairro obrigatório" }),
  logradouro: z
    .string({
      message: "Logradouro obrigatório",
    })
    .min(1, { message: "Logradouro obrigatório" }),
  complement: z
    .string({
      message: "Complemento obrigatório",
    })
    .optional(),
  locality: z
    .string({
      message: "Localidade obrigatória",
    })
    // .min(1, { message: 'Localidade obrigatória' })
    .optional(),
});

export const Schema = z.object({
  address: AddressSchema,
});

export type Address = z.infer<typeof Schema>;
