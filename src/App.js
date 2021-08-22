import { Button } from './componets/Button';
import { Accordion } from './componets/Accordion';
import { AccordionItem } from './componets/AccordionItem';
import { ClaimantData } from './componets/ClaimantData';
import { useForm } from 'react-hook-form';
import { Form } from './componets/Form';
import { useState } from 'react';


function App() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [result, setResult] = useState("");
    const onSubmit = async (data,e) => {
        console.log("onSubmit",data,"event ",e)
        console.log("errors=",errors)
        setResult(JSON.stringify(data))

        // limpiar campos
        e.target.reset();
    }
  return (
    <div className="container">
        <header className="header">Solicitud de Información</header>
        <Form autocomplete = "off" onSubmit={handleSubmit(onSubmit)}>

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
                databody={`Agregar formulario de accidente` }
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
                <p>{result}</p>
                <Button
                  type="submit"
                  className="btn btn-success " 
                  id="btn-enviar" 
                  children="Enviar"
                  disabled={result}
                />
            </div>

        </Form>
    </div>
  );
}

export default App;
