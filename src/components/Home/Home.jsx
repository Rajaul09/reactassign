import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Cart from "../Cart/Cart";
import './Home.css';

const Home = () => {

    const [allActors, setAllActors] = useState([]);
    const [selectedActors, setSelectedActors] = useState([]);

    useEffect(() => {

        fetch('./data.json')
            .then(res => res.json())
            .then((data) => setAllActors(data));

    }, []);


    const handleSelectActor=(actor) =>{
        const isExist = selectedActors.find((item) => item.id ==
        actor.id);
       console.log(isExist);

        setSelectedActors([...selectedActors,actor]);
    };


    return (
        <div className="container">
            <div className="home-container">
                <div className="card-container">
                    {
                        allActors.map((actor) =>
                            <div key={actor.id} className="card">
                                <div className="card-img">
                                    <img className="photo" src={actor.image} alt="" />
                                </div>
                                <h2>{actor.name}</h2>
                                <p><small> hbshjab Hjbhba Hbhs HDVab h</small> </p>
                                <div className="info">
                                    <p>salary: {actor.salary}</p>
                                    <p>Role: {actor.role}</p>
                                </div>
                                <button onClick={()=>handleSelectActor(actor)} className="btn-first">seclet</button>

                            </div>)
                    }
                </div>
                <div className="cart">
                    <Cart selectedActors={selectedActors}></Cart>
                </div>
            </div>



        </div>
    );
};
export default Home;