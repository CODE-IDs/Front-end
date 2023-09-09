/*  Logica de calculadora   -< Retorna String con recomendacion segun parametros dados.
  Steps: importar funcion del componente -> import getRecommendation from "./CalculatorLogic.js";
  - Utilizar la funcion getRecommendation(i, e) con:
      - i = ingresos (income);
      - e = egresos (expenses);
      
  */

const getRecommendation = (income, expenses) => {
  let recommendation = [];
  let result = (income - expenses);
  let savingsRate = ((result / income) * 100).toFixed(2);
  let savingsNum = Number(savingsRate);

  if (savingsNum  <= 0) {
      recommendation.push(`En el momento tienes gastos ${-1 * savingsNum}% superiores a tus ingresos. Es importante conocer las posibles formas de sacar maximo provecho a tu economia. Tenemos una sección de apoyo educativo y de propuestas de nuestros aliados que te pueden interesar.`)
    } else if(0 < savingsNum && savingsNum <= 20){
      recommendation.push(`Tus disponible corresponden al ${savingsNum}% de tus ingresos. Es importante conocer estrategias de gestión de ingresos y gastos. En nuestra sección de educación puedes conocer los mejores tips financieros para tí.`);
    } else if(20 < savingsNum && savingsNum < 40){
      recommendation.push(`Tus disponible corresponden al ${savingsNum}% de tus ingresos. Existen estrategias como la famosa 50/30/20 que te ayudaran a mantener una salud financiera. Puedes conocer más en nuestra sección educativa.`);
    } else if (savingsNum > 40){
      recommendation.push(`Tus disponible corresponden al ${savingsNum}% de tus ingresos. Es un gran momento para pensar en invertir y potenciar tus rendimientos financieros. Conoce más en nuestra sección educativa.`);
    } else {
      recommendation.push('Valores invalidos');
    }
    return recommendation[0];
  };

export default getRecommendation;