export const Form = props => (
    <form  
        {...props} 
        className={`${props.className}`}> 
        {props.children}
    </form>
  )