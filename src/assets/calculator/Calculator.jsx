const Calculator = () => {
  return (
    <dive className="w-screen  h-auto">
      <div className="p-10 w-full m-auto flex flex-col ">
        <h1 className="text-[150px] font-bold text-third mb-20">Calculadora</h1>
        {/* <button className="rounded-lg p-6 bg-fourty text-white font-medium">
          get ready
        </button> */}
        <div className="flex flex-col gap-8 bg-white p-4 rounded-lg max-w-max shadow-sm ">
            
          <div className="flex items-center  justify-between gap-5">
            <p className="text-fourty font-semibold text-3xl">
              Ingresos Mensuales:
            </p>
            <input
              type="number"
              className="p-3 rounded-lg outline-none border-gray-300 border focus:border-third focus:border duration-300 transition-all"
            />  
          </div>
          <div className="flex items-center justify-between gap-5">
            <p className="text-fourty font-semibold text-3xl">
              Gastos Mensuales:
            </p>
            <input
              type="number"
              className="p-3 rounded-lg outline-none border-gray-300 border focus:border-third focus:border duration-300  transition-all"
            />   
          </div>

          <button className="rounded-lg p-4 bg-fourty max-w-min text-white text-2xl font-medium" >Save</button>
        </div>
      </div>
    </dive>
  );
};

export default Calculator;
