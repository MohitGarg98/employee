import { NavLink } from "react-router-dom";
import {useSelector} from "react-redux";

import './AsideBar.css';

function AsideBar() {
  const employees = useSelector(state => state.employees);
  return (
    <div className="aside-bar">
      <h1 className="cat-heading">Employees</h1> 
        {employees.map((employee, index) => {
          let font = (employee.popularity*5 + 10) +"px";
          return <NavLink 
            key={index} 
            className="category" 
            exact to={employee.name}
            style={{fontSize: font}}
            >
            {employee.name}
          </NavLink>
        })}     
    </div>
  );
}

export default AsideBar;
