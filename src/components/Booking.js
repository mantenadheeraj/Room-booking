import React from "react";
const Booking = props => {
   let { Name, Count } = props;
   return (
      <div className="App">
         <div className="flexy">
            <h1>{Name} </h1>
            <div className="Buttons">
               <button onClick={props.Decrease}> - </button>
               <h6>{Count}</h6>
               <button onClick={props.Increase}> + </button>
            </div>
         </div>
      </div>
   );
};

export default Booking;
