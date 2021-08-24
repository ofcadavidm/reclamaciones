
export const ClaimantData = ({register,errors}) => {

    return (
        <>
            <div className="my-3">
                <input type="text" placeholder="Nombre" name="firstname"
                    className={`form-control ${errors.firstname ? 'is-invalid' : ''}`} 
                    {...register("firstname", {
                        required: "Nombre es obligatorio",
                        minLength: { value: 3, message: "Ingresa al menos 3 carácteres" },
                        maxLength: { value: 20, message: "No puedes ingresar mas de 20 carácteres" }
                    })} 
                />
                <div className="invalid-feedback">{errors.firstname?.message}</div>
            </div>
            <div className="mb-3">
                <input type="text" placeholder="Apellido"  name="lastname" 
                    className={`form-control ${errors.lastname ? 'is-invalid' : ''}`} 
                    {...register("lastname", {
                        required: "Apellido es obligatorio",
                        minLength: { value: 3, message: "Ingresa al menos 3 carácteres" },
                        maxLength: { value: 20, message: "No puedes ingresar mas de 20 carácteres" }
                    })} 
                />
                <div className="invalid-feedback">{errors.lastname?.message}</div>
            </div>
            <div className="mb-3">
                <select name="documenttype"  
                    className={`form-control ${errors.documenttype ? 'is-invalid' : ''}`}
                    {...register("documenttype", {
                        required: "Tipo de documento es obligatorio"
                    })}
                >
                    <option value="">Seleccione el tipo de documento</option>
                    <option value="CC">Cédula Ciudadania</option>
                    <option value="CE">Cédula Extranjeria</option>
                    <option value="TI">Tarjeta de Identidad</option>
                    <option value="PA">Pasaporte</option>
                </select>
                <div className="invalid-feedback">{errors.documenttype?.message}</div>
            </div>
            <div className="mb-3">
                <input type="text" placeholder="Número de documento"  name="documentid" 
                    className={`form-control ${errors.documentid ? 'is-invalid' : ''}`} 
                    {...register("documentid", {
                        required: "Número de documento es obligatorio",
                        pattern: { value: /^([0-9])+$/, message: 'Número de documento debe ser númerico'},
                        minLength: { value: 5, message: "Ingresa al menos 5 carácteres númericos" }
                    })}
                />
                <div className="invalid-feedback">{errors.documentid?.message}</div>
            </div>
            <div className="mb-3">
                <input type="email" placeholder="email" name="email" 
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`} 
                
                    {...register("email", {
                        required: "email es obligatorio",
                        pattern: { value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/, message: 'El email no es valido'},
                        minLength: { value: 8, message: "email 8 caracteres minimos" }
                    })}
                />
                <div className="invalid-feedback">{errors.email?.message}</div>
            </div>
        </>
    )
}