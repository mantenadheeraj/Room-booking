import React, { Component } from "react";
import "./App.css";
import Booking from "./Booking";

class App extends Component {
   state = {
      reservation: [
         {
            name: "ROOMS",
            count: 1,
            id: 1
         },
         {
            name: "ADULTS",
            count: 2,
            id: 2
         },

         {
            name: "CHILDREN",
            count: 0,
            id: 3
         }
      ]
   };

   Increament = event => {
      console.log(event.type);
      let newState = [...this.state.reservation];
      //   console.log(event.target.value);
      this.setState({ reservation: newState });
   };

   Decreament() {}

   render() {
      const person = this.state.reservation.map(value => (
         <Booking
            Name={value.name}
            Count={value.count}
            Increase={this.Increament}
            Decrease={this.Decreament}
            key={value.id}
         />
      ));
      return <div className="App">{person}</div>;
   }
}

export default App;
