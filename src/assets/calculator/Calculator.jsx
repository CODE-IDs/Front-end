import { useEffect, useState } from "react";
import CardResult from "./components/CardResult";

const Calculator = () => {
  const [income, setIncome] = useState();
  const [expense, setExpense] = useState();
  const [isDisabledButton, setIsDisabledButton] = useState(true);
  const [dataSave, setDataSave] = useState({
    income,
    expense
  });

  const Save = () => {
    setDataSave({
        income: Number(income),
        expense: Number(expense),
    });
  };

  useEffect(() => {
    if (income && income != 0 && expense) {
      setIsDisabledButton(false);
    } else {
      setIsDisabledButton(true);
    }
  }, [income, expense]);

  return (
    <div className="w-screen h-auto min-h-screen body">
      <div className="p-10 w-full m-auto flex flex-col ">
        <h1 className="lg:text-[150px] text-center text-6xl font-bold text-third mb-20">
          Calculadora
        </h1>
        {/* <button className="rounded-lg p-6 bg-fourty text-white font-medium">
          get ready
        </button> */}
        <section className="flex lg:flex-row flex-col gap-16 lg:gap-32 items-center lg:items-start lg:px-10">
          <div className="flex flex-col gap-8 w-full bg-white px-4 py-10 items-center rounded-lg  shadow-sm ">
            <div className="flex lg:flex-row flex-col items-center  justify-between gap-5">
              <p className="text-greenM  font-semibold text-3xl">
                Ingresos Mensuales:
              </p>
              <input
                type="number"
                className="p-3 rounded-lg outline-none border-gray-300 border focus:border-third focus:border duration-300 transition-all"
                value={income}
                onChange={(e) => setIncome(e.target.value)}
              />
            </div>
            <div className="flex items-center flex-col lg:flex-row justify-between gap-5">
              <p className="text-greenM font-semibold text-3xl">
                Gastos Mensuales:
              </p>
              <input
                type="number"
                className="p-3 rounded-lg outline-none border-gray-300 border focus:border-third focus:border duration-300  transition-all"
                value={expense}
                onChange={(e) => setExpense(e.target.value)}
              />
            </div>

            <button
              className={`rounded-lg p-4  min-w-[200px] text-white text-2xl font-medium ${
                isDisabledButton ? "bg-greenM/50" : "bg-greenM "
              }`}
              onClick={() => {
                Save();
              }}
              disabled={isDisabledButton}
            >
              Save
            </button>
          </div>
          <CardResult data={dataSave} />
        </section>
      </div>
    </div>
  );
};

export default Calculator;
