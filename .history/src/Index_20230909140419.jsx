
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
    <div className="columns-3xs align-content: normal text-sm md:text-lg lg: ">
    <p className="font-sans hover:font-serif">CODE_ID'S</p>
    <button 
        onClick={handleAhorrosClick} 
        className="bg-fourty hover:bg-Emerald-700 text-white font-bold py-2 px-4 rounded m-2 columns-3xs  relative h-32 w-32 absolute inset-y-0 right-0 w-16 ">
        Calculadora Ahorros
    </button>
    <button 
        onClick={handleEducacionClick} 
        className="bg-fourty hover:bg-Emerald-700 text-white font-bold py-2 px-4 rounded m-2  relative h-32 w-32 absolute inset-y-0 right-0 w-16 columns-3xs ">
        Educación Laboral
    </button>
    <button 
        onClick={handleEmpleabilidadClick} 
        className="bg-fourty hover:bg-Emeraldy-700 text-white font-bold py-2 px-4 rounded m-2 columns-3xs  relative h-32 w-32 absolute inset-y-0 right-0 w-16 ">
        Empleabilidad
    </button>
</div>
  )
}

export default Index;