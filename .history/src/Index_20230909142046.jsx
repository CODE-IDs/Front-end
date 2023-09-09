
const Index = () => {
    const handleAhorrosClick = () => {
        console.log("Hiciste clic en Calculadora Ahorros");
    };

    const handleEducacionClick = () => {
        console.log("Hiciste clic en Educación Laboral");
    };

    const handleEmpleabilidadClick = () => {
        console.log("Hiciste clic en Empleabilidad");
    };
  return (
  <div className="flex flex-col items-center justify-center text-sm md:text-lg min-h-screen bg-gray-100">
  <p className="font-sans hover:font-serif mb-4">CODE_ID'S</p>
  <button 
      onClick={handleAhorrosClick} 
      className="bg-fourty hover:bg-Emerald-700 text-white font-bold py-2 px-4 rounded m-2 w-full md:w-auto">
      Calculadora Ahorros
  </button>
  <button 
      onClick={handleEducacionClick} 
      className="bg-fourty hover:bg-Emerald-700 text-white font-bold py-2 px-4 rounded m-2 w-full md:w-auto">
      Educación Laboral
  </button>
  <button 
      onClick={handleEmpleabilidadClick} 
      className="bg-fourty hover:bg-Emeraldy-700 text-white font-bold py-2 px-4 rounded m-2 w-full md:w-auto">
      Empleabilidad
  </button>
</div>
  )
}

export default Index;