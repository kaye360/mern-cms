import { useContext } from "react"
import { FlashContext } from "../App"


export default function Flash() {

  const [flash, setFlash] = useContext(FlashContext)

  if( flash !== false) {
    setTimeout( () => { setFlash(false) }, 5000)
  }

  return(
    <div
      className="
        pointer-events-none
        fixed left-1/2 bottom-3
        w-full max-w-5xl -translate-x-1/2
        flex flex-col items-end gap-4 font-medium"
    >
      {
      flash &&
        <div
          className={`
            pointer-events-auto animate-flash
            w-full max-w-md px-4 py-2
            bg-white border border-l-8 border-slate-600
            ${ flash.type === 'fail' && 'border-l-red-500' }
          `}
        >
          <div>{ flash.message }</div>
          
          <button 
            onClick={ () => setFlash(false)}
            className="underline text-red-400"
          >
            Close
          </button>
        </div>
      }
    </div>
  )
}