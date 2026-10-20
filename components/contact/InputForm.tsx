
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { X } from 'lucide-react';
import { lato } from '@/utils/fonts';


type Props = {
  label: string
  name: string
  placeholder?: string
  type?: string
  pattern?: string
  errorMessage: string|null
  className?: string
}

const InputForm = (props: Props) => {
  const { label, name, placeholder, type, pattern, errorMessage, className = "" } = props

  return (
    <div className={`flex flex-col desktop:flex-row items-baseline gap-2 mt-5 my-10`}>
      <Label htmlFor={name} className={`mobile:px-2 tablet:whitespace-nowrap desktop:text-lg ${lato.className}`} aria-label='Nom'>{label} :</Label>
      <div className='w-full relative'>
        <Input 
          type={type} 
          name={name} 
          pattern={pattern} 
          className={`placeholder:text-xs tablet:placeholder:text-sm placeholder:italic placeholder:opacity-50 text-xs tablet:text-base laptop:text-lg ${className}`} 
          aria-required 
          required 
          placeholder={placeholder}
        />
        {
          errorMessage &&
          <p className="absolute left-2 -bottom-5 text-xs flex gap-x-1 text-red-700"><X size={15}/>{errorMessage}</p>
        }
      </div>
    </div>
  )
}

export default InputForm