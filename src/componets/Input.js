export const Input = (props) => {
    console.log("props INPUT",props)
    return(
   
      <input
        type={props.type ? props.type : "number"}
        name={props.name}
        id={props.id}
        className={props.class}
        placeholder={props.placeholder}
        defaultValue={props.value}
        register={props.register}
      />
  )
}