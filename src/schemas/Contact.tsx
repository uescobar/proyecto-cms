import { z } from "zod";

export const contactTypeOptions = [
  "Familiar",
  "Trabajo",
  "Amigo",
  "Otro",
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, { message: "El nombre es requerido" })
    .min(3, { message: "Longitud mínima de 3 caracteres" }),
  lastname: z
    .string()
    .min(1, { message: "El Apellido es requerido" })
    .min(3, { message: "Longitud mínima de 3 caracteres" }),
  email: z
    .string()
    .min(1, { message: "El correo es requerido" })
    .email({ message: "El correo no es válido" }),
  type: z.enum(contactTypeOptions, {
    errorMap: () => ({ message: "Seleccione tipo" }),
  }),
});

export type Contact = z.infer<typeof contactSchema> & { id: string };
