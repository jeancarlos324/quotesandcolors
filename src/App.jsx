import React, { useState } from "react";
import QuoteBox from './Components/QuoteBox ';
import quotes from "./data/quotes.json";
import colors from "./data/colors.json";

function App() {
  const randomIndex = (item) => (
    Math.floor(Math.random() * item.length)
  );
  const [index, setIndex] = useState(randomIndex(quotes));
  const [color, setColor] = useState(randomIndex(colors));
  const changeValues = () => {
      setIndex(randomIndex(quotes));
      setColor(randomIndex(colors));
    };
  return (
    <div className="flex w-screen h-screen items-center justify-center" style={{backgroundColor:`${colors[color].color}`}}>
      <QuoteBox changeValues={changeValues} author={quotes[index].author} quoteText={quotes[index].quote} color={colors[color].color}/>
      <div className="absolute right-10 bottom-2 text-xl bg-slate-200 p-3 rounded-md" style={{color:`${colors[color].color}`}}>JeanTicona dev</div>
    </div>
  )
}

export default App
