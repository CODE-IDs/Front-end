const IMG = "https://img.freepik.com/vector-premium/ilustracion-vector-luz-bombilla_516670-384.jpg?w=2000"

const EducationCard = ({ title = "Mangos rosados", img = IMG }) => {
    return(
        <div className="principal-card border w-full bg-white">
            <img src={img} alt="w" 
            className="w-[100px]"/>
            <div className="w-full flex flex-col justify-between">
                <h3 className="font-medium break-all">{ title }</h3>
                <a href={"educacion/"+title} >
                    <button className="rounded-lg p-2 bg-greenM text-white font-medium w-full">Leer</button>
                </a>
                
            </div>
        </div>
    )
}
  
export default EducationCard