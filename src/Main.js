import React from 'react';
import './Main.css'

function Main() {
    return (
        <div className="main">
            <img src="./images/pic.jpg" alt=""/>
            <div className="description">
                <h2>Name</h2>
                <div className="slider">
                    <p className="popularity">Popularity</p>
                    <span className="line"></span>
                </div>
                <div className="biography">
                    <h2>Biography</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et rerum temporibus veritatis, eaque dolore qui blanditiis deserunt quisquam dolorem numquam maxime ea? Id vel ipsum iusto vero, nihil ab adipisci.</p>
                </div>
            </div>
        </div>
    )
}

export default Main;
