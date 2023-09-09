import EducationCard from "./EducationCard"

const Education = () => {
    return (
        <div className="education">
            <h2 className="font-medium">Educación</h2>
            <div>
                <h3 className="font-medium">Aprende ahora</h3>
                <p>Aprende a ahorrar y manejar mejor tus finanzas</p>
            </div>

            <div className="flex flex-col items-center gap-1">
                <div className="principal-card border-greenM border w-5/6 bg-white">
                    <img src="https://img.freepik.com/vector-premium/ilustracion-vector-luz-bombilla_516670-384.jpg?w=2000" alt="w" 
                    className="w-[200px]"/>
                    <div>
                        <h3>title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rem, dolore aut alias fugiat vero expedita doloremque. Hic, quasi laudantium vitae, dolor placeat molestiae incidunt officiis ipsum nostrum odit sapiente.</p>
                        <div className="flex item-left justify-end ">
                            <button className="rounded-lg p-6 bg-greenM text-white font-medium">Leer</button>
                        </div>
                    </div>
                </div>
                <div className="w-5/6 flex gap-1">
                    <EducationCard title="Onomatopeya"/>
                    <EducationCard/>
                </div>
            </div>

        </div>
    )
}
  
export default Education