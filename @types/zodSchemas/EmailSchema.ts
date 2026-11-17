import { z } from "zod";

export const EmailSchema = z.object({
  nom: z.string().min(1, "Le nom est nécessaire."),
  prenom: z.string().min(1, "Le prénom est nécessaire."),
  // Utilisation du validateur global z.email() avec personnalisation de l'erreur
  email: z.email({ error: "L'e-mail doit être de la forme exemple@xyz.com" }),
  raison: z.enum(["demande de rendez-vous", "demande de renseignements"], {
    error: "Veuillez sélectionner une raison valide.",
  }),
  message: z.string().min(1, "Un message est nécessaire."),
  telephone: z
    .string()
    .refine((val) => {
      console.log(val);
      return /^\d{10}$/.test(val);
    }, 'Le numéro de téléphone doit comporter 10 chiffres.'),
  contactByEmail: z.coerce.boolean(),
})
