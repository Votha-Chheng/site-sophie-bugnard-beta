'use server'

import { IdForEmail } from "@/@types/IdForEmail"
import { ServiceResponse } from "@/@types/ServiceResponse"
import { validateWithZodSchema } from "@/utils/validateWithZodSchema"
import { EmailSchema } from "@/@types/zodSchemas/EmailSchema"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmailAction = async(prevState: ServiceResponse<any>, formData: FormData): Promise<ServiceResponse<string|null>> => {
  const rawData = Object.fromEntries(formData)
  const stringified = JSON.stringify(rawData)
  const parse = JSON.parse(stringified)

  const parsedData = validateWithZodSchema(EmailSchema, parse)

  if(!parsedData.success) {
    return {
      success: false,
      errors: parsedData.errors
    }
  }

  try {
    const data = parsedData.data as IdForEmail

    const res = await resend.emails.send({
      to: [process.env.EMAIL_TO_SEND as string],
      from: "sophie-bugnard-nutrition.fr <onboarding@resend.dev>",
      subject: `${data.raison} - ${data.nom} ${data.prenom}`,
      text: `Ci-joint, une ${data.raison} d'une personne nommée ${data.nom} ${data.prenom}.\nN° de téléphone : ${data.telephone}. \nAdresse e-mail : ${data.email}.\nLa personne souhaite être recontactée par ${data.contactByEmail ? "e-mail" : "téléphone"}.`,
      html: `<p>Veuillez trouvez ci-joint une ${data.raison} d'une personne nommée ${data.nom} ${data.prenom}</p>
      <p>N° de téléphone : ${data.telephone}.</p>
      <p>Adresse e-mail : ${data.email}.</p>
      <p>Raison du RDV : ${data.raison}.</p>
      <p>Message : ${data.message}.</p>
      <p>La personne souhaite être recontactée par ${data.contactByEmail ? "e-mail" : "téléphone"}.</p>
      `
    })

    console.log('line42 sendEmailAction', res)

    if(res.error) {
      return {
        success: false,
        message: `Problème de type "${res.error.name}" pour le serveur. Impossible d'envoyer la demande pour l'instant...`
      }
    }

    return {
      success: true,
      data: res.data!.id
    }
    
  } catch (error) {
    return {
      success: false,
      message: "Problème sur le serveur. Réessayez plus tard..."
     
    }
  }
}