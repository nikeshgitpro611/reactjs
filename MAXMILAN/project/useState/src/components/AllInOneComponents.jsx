import { useEffect, useState } from "react";
import logo from "../../public/investment-calculator-logo.png";
import { calculateInvestmentResults, formatter } from "../util/investment";
export const Header = () => {
  return (
    <header id="header">
      <img src={logo} alt="logo" />
      <h1>React Investment Calculator</h1>
    </header>
  );
};

export const UserInput = ({ commonFunction }) => {
  const { userInput, onChange } = commonFunction();
  console.log("userInput15Onchnagetest : ", userInput);

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            id="current-savings"
            required
            onChange={(e) => onChange("initialInvestment", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Annual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            id="yearly-contribution"
            required
            onChange={(e) => onChange("annualInvestment", e.target.value)}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">Expected Interest</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            id="expected-return"
            required
            onChange={(e) => onChange("expectedReturn", e.target.value)}
          />
        </p>
        <p>
          <label htmlFor="duration"> Investment Duration (years)</label>
          <input
            type="number"
            value={userInput.duration}
            id="duration"
            required
            onChange={(e) => onChange("duration", e.target.value)}
          />
        </p>
      </div>
      <Result userInput={userInput} />
      {/* <pre>{JSON.stringify(userInput)}</pre> */}
    </section>
  );
};

export const Result = ({ userInput }) => {
  const annualData = calculateInvestmentResults(userInput);

  console.log("annualData : ", annualData);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((data) => {
          const { year, valueEndOfYear, interest, annualInvestment } = data;

          const totalSavings = valueEndOfYear - annualInvestment * year;
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{formatter.format(data.valueEndOfYear)}</td>
              <td>{formatter.format(totalSavings)}</td>
              <td>{formatter.format(data.interest)}</td>
              <td>{data.annualInvestment}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
