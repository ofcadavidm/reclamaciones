import { Button } from './Button'
import { Accordion } from './Accordion'
import { AccordionItem } from './AccordionItem'
import { ClaimantData } from './ClaimantData'
import { useForm } from 'react-hook-form'
import { Form } from './Form'
import { useState } from 'react'
import { showModal } from '../utils/AlertConfirm'
import { Comments } from './Comments'
import { Accident } from './Accident'
import { Causante } from './Causante'
import {FileUpload} from './FileUpload'
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom'
import moment from 'moment'

export const Claims = () => {

  const { register, handleSubmit,reset, control, formState: { errors ,isValid } } = useForm({mode:"all"})
  const [result, setResult] = useState("")

  const SendEmail =  (e) =>{
    e.preventDefault();
    emailjs.sendForm('service_ehqnfoj', 'template_nd4fjsn', e.target, 'user_QijEGTy323FLpoCEdvfpN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
	    e.target.reset()
      console.log("correo enviado");
  }
  

  const message = async (tipo,title,text) =>{
      const response = await showModal({
      tipo: tipo,
      width: "25rem",
      title: title,
      text:  text,
      showCloseButton: false,
      showConfirmButton: true,
      confirmButtonText: 'Aceptar',
      confirmButtonColor: '#4fbc39',
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false
    })
    if (response.value) {
     
      reset(result)
      
    }
  }

  const onSubmit = async (data,e) => {
        setResult(JSON.stringify(data))
        const formatdate=moment(data.dateaccident).format()
        data.dateaccident=formatdate
        SendEmail(e)
        message(
          "success",
          "Su declaración ha sido registrada",
          "Por favor revise su buzón de correo "+ data.email
       )
  }

  

  return (
    <div className="container">
        <header className="header">Solicitud de Información</header>
        <Form autoComplete = "off" onSubmit={handleSubmit(onSubmit)}>

            <Accordion id="accordionExample">
              <AccordionItem 
                heading="headingOne" 
                databstarget="collapseOne" 
                databsparent="accordionExample"
                botontitle="Datos del reclamante*"
                databody={<ClaimantData register={register} errors={errors} /> }
              />
              <AccordionItem 
                heading="headingTwo" 
                databstarget="collapseTwo" 
                databsparent="accordionExample"
                botontitle="Datos del accidente*"
                databody={<Accident register={register} errors={errors}  control={control}/> }
              />
              <AccordionItem 
                heading="headingThree" 
                databstarget="collapseThree" 
                databsparent="accordionExample"
                botontitle="Datos del causante*"
                databody={<Causante register={register} errors={errors} /> }
              />
              <AccordionItem 
                heading="headingFour" 
                databstarget="collapseFour" 
                databsparent="accordionExample"
                botontitle="Documentación*"
                databody={<FileUpload /> }
              />
              <AccordionItem 
                heading="headingFive" 
                databstarget="collapseFive" 
                databsparent="accordionExample"
                botontitle="Comentarios"
                databody={<Comments register={register} errors={errors} /> }
              />
            </Accordion>
            <br />
            <div className="d-flex flex-row justify-content-around">
                <Link to="/main" className="btn btn-outline-success" role="button">&laquo;  Regresar al panel de reclamaciones</Link>
                <Button
                  type="submit"
                  className="btn btn-success " 
                  id="btn-enviar" 
                  children="Enviar"
                  disabled={!isValid}
                />
            </div>

        </Form>
    </div>
  );
}
