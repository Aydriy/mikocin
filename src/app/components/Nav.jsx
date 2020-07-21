import React from "react";
import vector from "../../sass/block/header/Vector.png";
import vector2 from "../../sass/block/header/Vector2.png";
import { Medal, PersonSafe, ManyPeople } from "./SvgComponents";

export default function Nav() {
  return (
    <div className="container fixed-top">
      <nav className="navbar  navbar-expand-lg navbar-light ">
        <a
          className="navbar-brand h1 mb-0 d-flex align-items-center ml-xl-5"
          href="#"
        >
          <div className="d-flex align-items-end navbar-logo-container">
            <img src={vector} alt="" />
            <img src={vector2} alt="" />
          </div>
          Микоцин
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse justify-content-end  navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav navbar-nav-container d-flex align-items-center">
            <li className="nav-item active ">
              <a className="nav-link d-flex align-items-center" href="#">
                <Medal />
                <span className="nav-link-span">
                  №1 Для избавления <br /> от любого типа грибка
                </span>
              </a>
            </li>
            <li className="nav-item active ml-xl-4 ml-md-1">
              <a className="nav-link d-flex align-items-center" href="#">
                <PersonSafe />
                <span className="nav-link-span">
                  Рекомендован <br /> дерматологами
                </span>
              </a>
            </li>
            <li className="nav-item active ml-xl-4 ml-md-1">
              <a className="nav-link d-flex align-items-center" href="#">
                <ManyPeople />
                <span className="nav-link-span">
                  13000+ довольных <br /> клиентов за 2018 год
                </span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
