import { Link } from "react-router-dom";
import Icon from "./Icon";


export default function Logo(){
  return(
    <Link to="/">
      <div className="flex items-center font-bold text-xl text-slate-200 tracking-wide">
        <Icon>rocket_launch</Icon>
        mernCMS
      </div>
    </Link>
  )
}