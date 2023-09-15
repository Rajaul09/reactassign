import React from "react";
import "./Cart.css";

const Cart = ({selectedActors}) =>{
    console.log(selectedActors);
    return(
        <div>
            <h5>total actor: {selectedActors.length}</h5>
           {selectedActors.map((actor) => (
            <li key={actor.id}>{actor.name}</li>
           ))}
        </div>
    );
};
export default Cart;
