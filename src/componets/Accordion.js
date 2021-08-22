import '../Accordion.css';
export const Accordion = (props) =>{
    const {id,children}=props
    return(
        <div className="accordion" id={id}>
            {children}
        </div>
      )
}
