export const Accident = ({register,errors}) => {

    const vardate=new Date().toJSON().slice(0,10);
    console.log(`fecha`, vardate)

    return (
        <>
            <div class="my-3">

                <label forHTML="start">Fecha accidente:</label>
                <input type="date" id="dateaccident" name="dateaccident"
                     value={vardate}
                     
                    className={`form-control ${errors.dateaccident ? 'is-invalid' : ''}`} 
                />               
            </div>

             <div class="mb-3">
                <select name="country"  
                    className={`form-control ${errors.country ? 'is-invalid' : ''}`}
                    {...register("country", {
                        required: "País es obligatorio"
                    })}
                >
                    <option value="">Seleccione el país</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Venezuela">Venezuela</option>
                </select>
                <div className="invalid-feedback">{errors.country?.message}</div>
            </div>
            <div class="mb-3">
                <select name="region"  
                    className={`form-control ${errors.region ? 'is-invalid' : ''}`}
                    {...register("region", {
                        required: "Región es obligatorio"
                    })}
                >
                    <option value="">Seleccione la región</option>
                    <option value="Amazonas">Amazonas</option>
                    <option value="Antioquia">Antioquia</option>
                    <option value="Arauca">Arauca</option>
                    <option value="Atlántico">Atlántico</option>
                </select>
                <div className="invalid-feedback">{errors.region?.message}</div>
            </div>
            <div class="mb-3">
               <textarea 
                    name="accidentdetails" 
                    placeholder="Versión accidente*"
                    rows="3" 
                    cols="50"
                    className={`form-control ${errors.accidentdetails ? 'is-invalid' : ''}`}
                    {...register("accidentdetails", {
                        required: "Versión es obligatorio"
                    })}
               >                  
               </textarea>
               <div className="invalid-feedback">{errors.accidentdetails?.message}</div>
            </div>
            
        </>
    )
}