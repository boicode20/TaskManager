import React from 'react';
import './greeting.css';
import { randomGreet } from '../../utils/randomGreet.js';


const Greetings = ({ user}) => {
  const randomGreeting =  randomGreet(user?.name || "John Doe");

  return (
    <div className="greetings w-full h-24 flex items-center justify-start px-5 rounded-[0_0_10px_10px] text-white  shadow-lg">
      <h1 className="text-2xl font-bold">
        {randomGreeting}
      </h1>
    </div>
  );
};

export default Greetings