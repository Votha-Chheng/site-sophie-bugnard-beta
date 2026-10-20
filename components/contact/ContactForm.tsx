"use client"

import { useActionState, useState } from 'react'
import { Card, CardTitle } from '../ui/card';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { lato, ysabeau } from '@/utils/fonts';
import { sendEmailAction } from '@/actions/sendEmailAction';
import InputForm from './InputForm';
import { Textarea } from '../ui/textarea';
import { captureErrorByField } from '@/utils/captureErrorByField';
import { Switch } from '../ui/switch';
import SubmitButton from './SubmitButton';
import { AtSign, Phone, X } from 'lucide-react';

type Props = {}

const ContactForm = (props: Props) => {
  const [state, formAction] = useActionState(sendEmailAction, {})
  const [raison, setRaison] = useState<string>("Demande de rendez-vous")
  const [contactByEmail, setContactByEmail] = useState<boolean>(true)
  
  return (
    <Card className={`py-7.5 px-5 border-green-logo ${ysabeau.className} w-280 mx-auto mt-12`}>
      {/* {
        state.success && state.data
        ?
        <div className='flex flex-col gap-y-3 items-center justify-center min-h-112.5'>
          <span className='text-center'>Votre demande a bien été envoyée. Nous y répondrons dans les plus brefs délais.</span><CircleCheck className='text-green-700'/>
        </div>
        : */}
        <>
          <CardTitle className='text-main-theme text-center text-2xl mt-5 mb-10 text-white bg-blue-logo py-3 rounded-2xl'>Remplissez les champs demandés. Tous les champs sont obligatoires.</CardTitle>
          <Card className='pt-3 pb-5 px-5 border-blue-logo'>
            {
              raison === "Demande de rendez-vous" &&
              <p className='text-center text-lg mt-5 mb-10'>
                Si vous souhaitez prendre un rendez-vous, veuillez préciser la date et l'heure souhaitées. Je vous contacterai dans les 48 heures pour confirmer le rendez-vous ou le modifier. <span className='font-bold underline underline-offset-2 italic'>Veuillez attendre une confirmation de ma part pour noter la date dans votre agenda.</span>
              </p>
            }
            <form>
              <input type='hidden' name='raison' value={raison} />
              <input type='hidden' name='contactByEmail' value={JSON.stringify(contactByEmail)} />
              <div className='mt-5 mb-10 flex flex-wrap items-center'>
                <Label className=' whitespace-nowrap text-lg'>Choisissez la nature de votre demande :</Label>
                <Select value={raison} onValueChange={(value: string)=> setRaison(value)}>
                  <SelectTrigger className="ml-2 text-base mt-0 font-lato font-bold">
                    <SelectValue/>
                  </SelectTrigger>
                  <SelectContent className={`${lato.className}`}>
                    <SelectItem className='text-base' value="Demande de rendez-vous">Demande de rendez-vous</SelectItem>
                    <SelectItem className='text-base' value="Demande de renseignements">Demande de renseignements</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <InputForm label='Nom' name='nom' placeholder='Ecrire votre nom de famille...' errorMessage={captureErrorByField(state?.errors, "nom")} />
              <InputForm label='Prénom' name='prenom' placeholder='Ecrire votre prénom...' errorMessage={captureErrorByField(state?.errors, "prenom")}/>
              <InputForm label='Adresse e-mail de contact' name='email' placeholder='exemple@example.com' type='email' errorMessage={captureErrorByField(state?.errors, "email")} />
              <InputForm label='N° de téléphone' name='telephone' type='tel' placeholder='0XXXXXXXXX' pattern='[0-9]{10}' errorMessage={captureErrorByField(state?.errors, "telephone")}/>
              <div className='mb-10'>
                <Label className={`mobile:px-2 mobile:whitespace-nowrap desktop:text-lg ${lato.className}`}>{raison === "Demande de rendez-vous" ? "Demande de rendez-vous (précisez la date et l'heure souhaitées, vous serez recontacté(e) dans les 48 heures) : " : "Demande de renseignements :"}</Label>
                <div className='relative max-h-96'>
                  <Textarea 
                    name='raison'
                    required 
                    aria-required 
                    className={`my-2.5 px-2 whitespace-nowrap text-xs desktop:text-base placeholder:text-sm desktop:placeholder:text-base placeholder:italic placeholder:opacity-50 ${lato.className}`} 
                    placeholder={raison === "Demande de rendez-vous" ? "Précisez votre date et heure souhaitées..." : "Décrivez-nous votre demande de renseignements..."}
                  />
                  {
                    captureErrorByField(state?.errors, "raison") &&
                    <p className="absolute left-2 -bottom-5 text-xs flex gap-x-1 text-red-700"><X size={15}/>{captureErrorByField(state?.errors, "raison")}</p>
                  }
                </div>
              </div>
              <div className={`mt-5 mb-10 px-2 whitespace-nowrap text-lg flex items-center gap-x-5 flex-col gap-y-1.5`}>
                <span >Je préfère être recontacté par :</span>
                <Card className='flex flex-row py-3 px-2 items-center w-120 justify-center gap-x-10 font-lato border-brown-logo'>
                  <p className={`flex items-center gap-x-1 text-lg text-main-theme ${contactByEmail ? "opacity-50" : "font-bold"}`}><Phone className='' size={17.5}/>
                    téléphone
                  </p>
                  <Switch className='cursor-pointer' checked={contactByEmail} onClick={()=> setContactByEmail(prev=> !prev)} />
                  <p className={`flex items-center text-lg text-main-theme gap-x-1 ${!contactByEmail ? "opacity-50" : "font-bold"}`}><span>e-mail</span><AtSign className='' size={17.5}/></p>
                </Card>
              </div> 
              <div className='flex justify-center mobile:justify-end'>
                <SubmitButton label='Envoyer la demande'/>
              </div> 
            </form>
          </Card>
        </>
      {/* } */}
    </Card>
  )
}

export default ContactForm