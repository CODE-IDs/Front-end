import { useEffect, useState } from "react";
import getRecommendation from "../../../DB/CalculatorLogic";
import { Progress } from '@chakra-ui/react'


const CardResult = (dataSave) => {
  const [tip, setTip] = useState();
  const [percentExpense, setPercentExpense] = useState();
  const [percent, setPercent] = useState();

  useEffect(() => {
    if (dataSave) {
      setTip(getRecommendation(dataSave.data.income, dataSave.data.expense));
      let percent = (Number(dataSave.data.expense) / Number(dataSave.data.income)) * 100;
      setPercentExpense((percent));
    }
  }, [dataSave]);

  useEffect(()=> {
    if(tip){
        setPercent(tip.match(/\d+(\.\d+)?/g));
    }
  },[tip])


  return (
    <>
      {dataSave.data.income > 0 && (
        <div className="flex flex-col gap-4">
          <div className="flex w-full flex-col gap-8 bg-white px-4 py-10 items-center rounded-lg  shadow-sm ">
            <h2 className="text-greenM  font-semibold text-3xl">Resultado</h2>
            <h3 className="text-4xl text-greenM font-bold">{percent}%</h3>
            <p className="text-sm">{tip}</p>
          </div>
          <div className="flex w-full flex-col gap-8 bg-white px-4 py-10 items-center rounded-lg  shadow-sm ">
            
            <div className="flex gap-4 justify-center items-center w-full">
              <p className="font-medium">Gastos</p>
              <div className="w-full h-4  rounded-lg">
              <Progress value={percentExpense} colorScheme={"red"} className="rounded-lg mt-1" />
              </div>
            </div>
            <p className="-mt-8">{dataSave.data.expense} / {dataSave.data.income} </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CardResult;
