import { useEffect, useState } from "react"

const Navigator = () => {
    let isHome = window.location.pathname == "/"

    return (
        <nav className="">
            {
                !isHome 
                &&
                <a href="/"><button className="text-center bottom-0 left-0 absolute text-fifty text-[30px] font-bold bg-[#ffffffc9] rounded-lg w-[70px] h-[70px]"> {"<"} </button></a>
            }
        </nav>
    )
}
  
export default Navigator