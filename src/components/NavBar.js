import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => (
  <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
    <div className="navbar-brand">Organizer</div>
    <ul className="navbar-nav">
      <li className="navbar-item">
        <NavLink exact to="/" className="nav-link">
          Главная
        </NavLink>
      </li>
      <li className="navbar-item">
        <NavLink to="/about" className="nav-link">
          Информация
        </NavLink>
      </li>
    </ul>
  </nav>
);
