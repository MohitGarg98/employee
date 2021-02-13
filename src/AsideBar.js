import { NavLink } from "react-router-dom";
import './AsideBar.css';

function AsideBar() {
  return (
    <div className="left-aside-bar">
      <h1 className="cat-heading">Employees</h1>      
        <NavLink className="category" activeClassName="category-active" exact to="/home">Mobiles</NavLink>
        <NavLink className="category" activeClassName="category-active" exact to="/contact">Laptops</NavLink>
        <NavLink className="category" activeClassName="category-active" exact to="/men">Men's Clothes</NavLink>
        <NavLink className="category" activeClassName="category-active" exact to="/women">Women's Clothes</NavLink> 
    </div>
  );
}

export default AsideBar;
