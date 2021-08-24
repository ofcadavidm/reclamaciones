import { Button } from './componets/Button'
import { Accordion } from './componets/Accordion'
import { AccordionItem } from './componets/AccordionItem'
import { ClaimantData } from './componets/ClaimantData'
import { useForm } from 'react-hook-form'
import { Form } from './componets/Form'
import { useState } from 'react'
import { showModal } from './utils/AlertConfirm'
import { Comments } from './componets/Comments'
import { Accident } from './componets/Accident'
import { Causante } from './componets/Causante'
import {FileUpload} from './componets/FileUpload'


function App() {

  const { register, handleSubmit,reset, control, formState: { errors ,isValid } } = useForm({mode:"all"})
  const [result, setResult] = useState("")

  const onSubmit = async (data) => {
        setResult(JSON.stringify(data))
        console.log(`data`, data)
        const response = await showModal({
          tipo: "success",
          width: "25rem",
          title: "Su declaración ha sido registrada",
          text:  "Por favor revise su buzón de correo "+ data.email,
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
          console.log(`ProcesarDatos(data)`, data)
          console.log(`SendEmail(data)`, data)
        }
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
                <Button
                  className="btn btn-outline-success " 
                  id="btn-regresar" 
                  children="Regresar al panel de reclamaciones" 
                  onClick={() => { console.log("clic en boton regresar") }} 
                />
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

export default App
