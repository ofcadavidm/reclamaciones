export const Comments = ({register,errors}) => {

    return (
        <>
            <div className="my-3">
               <textarea 
                    name="comments" 
                    placeholder="Escriba aquí"
                    rows="5" 
                    cols="50"
                    className={`form-control `} 
                    {...register("comments")}
               >                  
               </textarea>
            </div>
        </>
    )
}