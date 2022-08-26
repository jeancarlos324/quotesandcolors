import React, { useState } from "react";
import users from "../data/users.json";

const randomIndex = (item) => (
  Math.floor(Math.random() * item.length)
);

const Card = () => {
  const [index, setIndex] = useState(randomIndex(users));
  const changeUsers = () => {
    setIndex(randomIndex(users));
  };
  return (
    <div className=" flex flex-col rounded-xl p-3 w-fit items-center gap-2 m-0 justify-around border-2 bg-gray-300 shadow-md">
      <h2 className="text-[30px]">{`${users[index].name.title} ${users[index].name.first}  ${users[index].name.last} `}</h2>
      <div className="flex gap-3">
        <img className="rounded-md" src={`${users[index].picture.large}`} alt="" />
        <ul className="text-[15px] rounded-md bg-slate-200 p-2">
          <li><b>Email:</b> </li>
          <li>{`${users[index].email}`} </li>
          <li><b>Telf:</b></li>
          <li>{`${users[index].phone}`} </li>
          <li><b>Country: </b></li>
          <li>{`${users[index].location.city} ${users[index].location.country}`} </li>
        </ul>
      </div>
      <button className=" w-1/2 rounded-xl p-2 text-xl text-white bg-yellow-400" onClick={changeUsers}>Change</button>
    </div>
  );
};

export default Card;
