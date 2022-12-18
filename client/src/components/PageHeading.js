

export default function PageHeading(props) {
  return(
    <h1 className="my-6 text-2xl font-medium text-slate-500">
      { props.children }
    </h1>
  )
}