
import { Link } from "react-router-dom"
import Logo from "./Logo"

export default function Nav () {


return(
<nav className="
  flex items-center justify-between border px-4 py-4
bg-slate-700 text-slate-200"
>

  <Logo />

  <ul className="flex align-center gap-4">
    <li><Link to="/">Home</Link></li>
    <li><Link to="/admin">Admin</Link></li>
  </ul>

</nav>

)

}