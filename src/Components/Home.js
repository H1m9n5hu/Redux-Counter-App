import React from "react";
import "./Home.css";
import { useSelector, useDispatch } from "react-redux";
import { incrementNumber, decrementNumber } from '../Redux/Actions/index';

const Home = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.changeState);
    return (
        <div className="app">
            <h1>Counter : {count}</h1>
            <div>
                <button className="decrementBtn" onClick={() => dispatch(decrementNumber(5))}>-</button>
                <button onClick={() => dispatch(incrementNumber(10))}>+</button>
            </div>
        </div>
    );
};

export default Home;