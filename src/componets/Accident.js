import { useState } from "react";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";

export const Accident = ({register,errors,control}) => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <>
            <div class="my-3">
                <label htmlFor="startDate" className="form-label">
                    Fecha accidente
                </label>
                <DatePicker
                    id="startDate"
                    name="dateaccident"
                    className="form-control"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
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