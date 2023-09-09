const Calculator = () => {
  return (
    <dive className="w-screen  h-auto">
      <div className="p-10 w-full m-auto flex flex-col items-center">
        <h1 className="text-[150px] font-bold text-third">Calculator</h1>
        {/* <button className="rounded-lg p-6 bg-fourty text-white font-medium">
          get ready
        </button> */}
        <input type="text" className="p-3 rounded-lg outline-none" />
      </div>
    </dive>
  );
};

export default Calculator;
