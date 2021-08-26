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
      alert("Mensaje enviado");
  }
  const  InsertarClaims = async (data,event) => {
      const urlBase="https://localhost:44317/"
      const endpoint="api​/Claim"
      const url=urlBase.concat(endpoint)
      console.log(`url`, url)
      const config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }
    try {
      const response = await fetch(url, config)
      console.log("response ",response)
      //const data = await response.json();
      if (response.ok) {
        console.log(`SendEmail`)
        SendEmail(event)
        message(
          "success",
          "Su declaración ha sido registrada",
          "Por favor revise su buzón de correo "+ data.email,
          event
       )
        return response
      } 
    }catch (error) {
      console.log('Fetch error: ', error);
      message("error","Su declaración no ha sido registrada","Por favor contacte un asesor ",event)
    }
  }

  const message = async (tipo,title,text,e) =>{
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
        console.log(`data`, data)
        console.log("data.dateaccident",data.dateaccident)
        console.log("data.dateaccident",data.formatdate)
        console.log(`JSON.stringify(data)`, JSON.stringify(data))
        InsertarClaims(data,e)
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
