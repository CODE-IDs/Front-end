import EducationCard from "./EducationCard"

const Education = () => {
    return (
        <div className="flex flex-col gap-10 p-5">
            <h2 className="font-medium text-6xl font-bold">Educación</h2>
            <div className="flex flex-col items-center gap-1">
                <div className="principal-card border w-11/12 bg-white flex-col sm:flex-row">
                    <img src="https://img.freepik.com/vector-premium/ilustracion-vector-luz-bombilla_516670-384.jpg?w=2000" alt="w" 
                    className="w-[200px] h-[200px]"/>
                    <div>
                        <h3 className="font-medium text-[30px]">title</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rem, dolore aut alias fugiat vero expedita doloremque. Hic, quasi laudantium vitae, dolor placeat molestiae incidunt officiis ipsum nostrum odit sapiente.</p>
                        <div className="flex item-left justify-end ">
                            <button className="rounded-lg p-4 bg-greenM text-white font-medium w-[120px] ">Leer</button>
                        </div>
                    </div>
                </div>
                <div className="w-11/12 flex gap-1">
                    <EducationCard title="Onomatopeya"/>
                    <EducationCard/>
                </div>
            </div>

        </div>
    )
}
  
export default Education