export const Causante = ({register,errors}) => {
   
    return (
        <>
            <div className="my-3">
                <select name="category"  
                    className={`form-control ${errors.category ? 'is-invalid' : ''}`}
                    {...register("category", {
                        required: "Categoría es obligatorio"
                    })}
                >
                    <option value="">Seleccione una categoría</option>
                    <option value="AUTOMOVIL">Automovil</option>
                    <option value="BUS">BUS</option>
                    <option value="CAMION">Camión</option>
                    <option value="GRUA">Grua</option>
                    <option value="MOTOCICLETA">Motocicleta</option>
                </select>
                <div className="invalid-feedback">{errors.category?.message}</div>
            </div>
            <div className="mb-3">
                <select name="marca"  
                    className={`form-control ${errors.marca ? 'is-invalid' : ''}`}
                    {...register("marca", {
                        required: "Marca es obligatorio"
                    })}
                >
                    <option value="">Seleccione la marca</option>
                    <option value="ACCES">Acces</option>
                    <option value="ACURA">Acura</option>
                    <option value="ADLYMOTO">Adlymoto</option>
                    <option value="FORD">Ford</option>
                </select>
                <div className="invalid-feedback">{errors.marca?.message}</div>
            </div>
            <div className="mb-3">
                <input type="text" placeholder="Matrícula"  name="matricula" 
                    className={`form-control ${errors.matricula ? 'is-invalid' : ''}`} 
                    {...register("matricula", {
                        required: "Matrícula es obligatorio",
                        minLength: { value: 7, message: "Ingresa al menos 7 carácteres" },
                        maxLength: { value: 8, message: "No puedes ingresar mas de 8 carácteres" }
                    })} 
                />
                <div className="invalid-feedback">{errors.matricula?.message}</div>
            </div>
            <div className="mb-3">
                <input type="text" placeholder="Nro. poliza"  name="nropoliza" 
                    className={`form-control ${errors.nropoliza ? 'is-invalid' : ''}`} 
                    {...register("nropoliza", {
                        required: "Nro. poliza es obligatorio",
                        minLength: { value: 3, message: "Ingresa al menos 3 carácteres" },
                        maxLength: { value: 10, message: "No puedes ingresar mas de 10 carácteres" }
                    })} 
                />
                <div className="invalid-feedback">{errors.nropoliza?.message}</div>
            </div>
            
        </>
    )
}