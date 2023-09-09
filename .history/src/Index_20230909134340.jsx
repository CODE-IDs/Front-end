
const Index = () => {

  return (
      <div className=" columns-3xs h-56 grid grid-cols-3 gap-4 content-start">
        <p className="font-sans hover:font-serif">CODE_ID'S</p >
          <button className="bg-fourty hover:bg-Emerald-700 text-white font-bold py-2 px-4 rounded m-2 columns-3xs align-content: normal">
            Calculadora Ahorros
          </button>
          <button className="bg-fourty hover:bg-Emerald-700 text-white font-bold py-2 px-4 rounded m-2 columns-3xs align-content: normal">
            Educación Laboral
          </button>
          <button className="bg-fourty hover:bg-Emeraldy-700 text-white font-bold py-2 px-4 rounded m-2 columns-3xs align-content: normal;">
            Empleabilidad
          </button>
      </div>
  )
}

export default Index;