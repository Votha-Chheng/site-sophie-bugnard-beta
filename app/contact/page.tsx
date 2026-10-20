import ContactForm from "@/components/contact/ContactForm";

type Props = {}

const Contact = (props: Props) => {
  return (
    <>
      <h2 className='text-center text-3xl my-15 mb-10 font-bold'><span className='bg-green-logo text-white py-3 px-5 rounded-2xl'>Demande de rendez-vous/Contact</span></h2>
      <ContactForm />
    </>
  )
}

export default Contact