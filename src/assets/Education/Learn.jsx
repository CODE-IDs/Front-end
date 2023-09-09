import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import educationDB from "../../DB/EducationDB";

const Learn = () => {
    let { name } = useParams()
    const [ dB, setDB ] = useState([])
    useEffect( () => {
        let list = educationDB()
        list = list.find( i => i.name == name )
        console.log( list );
        setDB( list )
    }, [])

    console.log( name );    

    return (
        <div className="p-6 flex flex-col justify-center items-center">
            <div className="principal-card border w-11/12 bg-white flex-col sm:flex-row">
                <img src="https://img.freepik.com/vector-premium/ilustracion-vector-luz-bombilla_516670-384.jpg?w=2000" alt="w" 
                className="w-[200px] h-[200px]"/>
                <div>
                    <h3 className="font-medium text-[30px]">{dB.name}</h3>
                    <p>{dB.content}</p>
                </div>
            </div>
        </div>
    )
}
  
export default Learn