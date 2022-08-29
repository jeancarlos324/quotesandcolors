import React from "react";
import RandomIcon from "./icons/RandomIcon";
import ReactIcon from "./icons/ReactIcon";
import Quote from "./content/Quote";

const QuoteBox = ({author,quoteText,color,changeValues,...otherProps}) => {

  return (
    <div className='flex flex-col rounded-xl p-8 md:w-1/3 items-end gap-5 md: m-0  border-2 bg-gray-200 shadow-xl sm:w-full sm:mx-5 '>
      <div className="flex gap-5 w-full">
        <ReactIcon fill={color}/>
        <Quote text={quoteText} style={color} />
      </div>
      <Quote text={author} style={color}/>
      <button  onClick={changeValues} className={`flex p-2 justify-center items-center gap-4 rounded-lg text-gray-200 hover:scale-105`} style={{backgroundColor:`${color}`}}>
        <RandomIcon className="fill-gray-200" />
        Refresh
      </button>
    </div>
  );
};

export default QuoteBox;
