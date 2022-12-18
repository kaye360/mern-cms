

export default function Icon(props) {
  return(
    <span className={`material-icons-outlined ${ props.css } `}>
      { props.children }
    </span>
  )
}