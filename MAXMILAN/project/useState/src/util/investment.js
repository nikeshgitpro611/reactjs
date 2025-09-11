// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return

import { useState } from "react";

// - duration: The investment duration (time frame)
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];

   let investmentValue = Number(initialInvestment);
  const yearlyContribution = Number(annualInvestment);
  const returnRate = Number(expectedReturn) / 100; // convert % to decimal
  const years = Number(duration);

  for (let i = 0; i < years; i++) {
    const interestEarnedInYear = investmentValue * (returnRate / 100);
    investmentValue += (interestEarnedInYear + yearlyContribution);
    console.log("investmentValue24", investmentValue);

    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear.toFixed(2), // the amount of interest earned in this year
      valueEndOfYear: investmentValue.toFixed(2), // investment value at end of year
      annualInvestment: annualInvestment, // investment added in this year
    });
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export const commonFunction = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: "10000",
    annualInvestment: "1200",
    expectedReturn: "6",
    duration: "5",
  });

  const onChange = (inputType, newValue) => {
    console.log("newValue : ", newValue);

    setUserInput((prevInput) => ({
      ...prevInput,
      [inputType]: +newValue,
    }));
  };

  return { userInput, onChange };
};
