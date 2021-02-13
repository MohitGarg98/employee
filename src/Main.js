import React from 'react';
import {useSelector} from "react-redux";
import axios from "axios";
import { useHistory } from "react-router-dom";

import './Main.css'

function Main(props) {
    const history = useHistory();
    const employees = useSelector(state => state.employees);
    const employeeName = props.match.params.name;
    let index;
    let moveCircle;
    let popularity;
    for(var i = 0; i < employees.length; i++) {
        if(employees[i].name === employeeName) {
            index = i;
            popularity = employees[index].popularity;
            moveCircle = employees[index].popularity * 13 + "%";
        }
    }

    if(employees){
    }

    function incresePopularity(){
        console.log('in');
        if(popularity < 5){
            axios.post('http://localhost:8000/update-popularity', { name: employeeName, popularity: popularity+1 })
            .then((response) => {
                console.log(response.data);
                let path = 'back'; 
                history.go(path);
            })
        }        
    }

    function decresePopularity(){   
        console.log('de');
        if(popularity > 0){
        console.log('ide');

            axios.post('http://localhost:8000/update-popularity', { name: employeeName, popularity: popularity-1 })
            .then((response) => {
                console.log(response.data);
                let path = 'back'; 
                history.go(path);
            })
        }
    }

    return (
        <div className="main">            
            {employees[index] ? 
            <div className="main">
                <img src={"./images/" + employees[index].image} alt=""/>
                <div className="description">
                    <h2>{employees[index].name}</h2>
                    <div className="slider">
                        <p className="popularity">Popularity</p>
                        <button onClick={decresePopularity} className="btn"> - </button>
                        <span className="circle" style={{left: moveCircle}}></span>
                        <span className="line"></span>
                        <button onClick={incresePopularity} className="btn"> + </button>
                    </div>
                    <div className="biography">
                        <h2>Biography</h2>
                        <p>{employees[index].biography}</p>
                    </div>
                </div>   
            </div> : null }                       
        </div>
    )
}

export default Main;
