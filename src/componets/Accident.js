import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import { Controller } from 'react-hook-form'

export const Accident = ({register,errors,control}) => {
    
    return (
        <>
            <div className="my-3">
                <label htmlFor="startDate" className="form-label">
                    Fecha accidente
                </label>
                <Controller
                        control={control}
                        name='dateaccident'
                        render={({ field }) => (
                        <DatePicker
                            dateFormat="dd/MM/yyyy"
                            placeholderText='Seleccione una fecha'
                            onChange={(date) => field.onChange(date)}
                            selected={field.value}
                            className={"form-control"}
                        />
                    )}
                />
            </div>
             <div className="mb-3">
                <select name="country"  
                    className={`form-control ${errors.country ? 'is-invalid' : ''}`}
                    {...register("country", {
                        required: "País es obligatorio"
                    })}
                >
                    <option value="">Seleccione el pais</option>
                    <option value="Colombia">Colombia</option>
                    <option value="Venezuela">Venezuela</option>
                </select>
                <div className="invalid-feedback">{errors.country?.message}</div>
            </div>
            <div className="mb-3">
                <select name="region"  
                    className={`form-control ${errors.region ? 'is-invalid' : ''}`}
                    {...register("region", {
                        required: "Región es obligatorio"
                    })}
                >
                    <option value="">Seleccione la region</option>
                    <option value="Amazonas">Amazonas</option>
                    <option value="Antioquia">Antioquia</option>
                    <option value="Arauca">Arauca</option>
                    <option value="Atlántico">Atlántico</option>
                    <option value="Anzoátegui">Anzoátegui</option>
                    <option value="Apure">Apure</option>
                    <option value="Aragua">Aragua</option>
                    <option value="Barinas">Barinas</option>
                </select>
                <div className="invalid-feedback">{errors.region?.message}</div>
            </div>
            <div className="mb-3">
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