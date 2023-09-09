import { useEffect, useState } from "react"
import educationDB from "../../DB/EducationDB"
import EducationCard from "./EducationCard"

const Education = () => {
    const [ dB, setDB ] = useState([])
    const [ first, setFirst ] = useState([])
    useEffect( () => {
        let list = educationDB()
        list.pop()
        setFirst( list[1] )
        setDB( list )
    }, [])

    return (
        <div className="flex flex-col gap-10 p-5">
            <h2 className="font-medium text-6xl font-bold">Educación</h2>
            <div className="flex flex-col items-center gap-1">
                <div className="principal-card border w-11/12 bg-white flex-col sm:flex-row">
                    <img src="https://img.freepik.com/vector-premium/ilustracion-vector-luz-bombilla_516670-384.jpg?w=2000" alt="w" 
                    className="w-[200px] h-[200px]"/>
                    <div>
                        <h3 className="font-medium text-[30px]">{first.name}</h3>
                        <p>{first.content}</p>
                        <div className="flex item-left justify-center sm:justify-end">
                            <a href={"educacion/"+first.name} >
                                <button className="rounded-lg p-4 bg-greenM text-white font-medium w-[120px] ">Leer</button>
                            </a>
                            
                        </div>
                    </div>
                </div>
                <div className="w-11/12 grid gap-1 grid-cols-1 sm:grid-cols-2">
                    {
                        dB.map( i => <EducationCard title={i.name} key={i}/> )
                    }
                </div>
            </div>

        </div>
    )
}
  
export default Education