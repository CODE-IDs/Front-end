
const Index = () => {


   
  return (
    <div className="flex flex-col items-center justify-center text-sm  bg-gray-100 md:text-lg min-h-screen ">
      <p className="font-sans hover:font-serif mb-4 text-[40px]">{"ZUMA"}</p>
      <a href="/calculadora"><button 
          className="bg-greenM hover:bg-Emerald-700 text-white font-bold py-2 px-4 rounded m-2 w-48">
          Calculadora Ahorros
      </button></a>
      <a href="/educacion"><button 
          className="bg-greenM hover:bg-Emerald-700 text-white font-bold py-2 px-4 rounded m-2 w-48">
          Educación Laboral
      </button></a>
      <a href="/empleabilidad"><button
          className="bg-greenM hover:bg-Emeraldy-700 text-white font-bold py-2 px-4 rounded m-2 w-48">
          Empleabilidad
      </button></a>
     
    </div>

  )
}

export default Index;