
import Logo from "./Logo"

export default function Nav () {


return(
<nav className="
  flex items-center justify-between border px-4 py-4
  border-blue-300 bg-blue-100"
>

  <Logo />

  <ul className="flex align-center gap-4">
    <li>Home</li>
    <li>Admin</li>
  </ul>

</nav>

)

}