import { useEffect, useState } from "react"

const Navigator = () => {
    let isHome = window.location.pathname == "/"

    return (
        <nav className="absolute">
            {
                !isHome 
                &&
                <a href="/"><button className="p-4 text-fifty text-[30px] font-bold "> {"<"} </button></a>
            }
        </nav>
    )
}
  
export default Navigator