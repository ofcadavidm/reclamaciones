export const Button = props => (
    <button
      type={props.type ? props.type : "button"}
      {...props}
      className={`${props.className}`}
    >
      {props.children}
    </button>
  )