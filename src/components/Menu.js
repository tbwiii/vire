import React from "react";

function Menu(props) {
  return (
    <ul className="menu">
      <li className="menu__item">
        <button className="menu__button" onClick={props.onNewRound}>
          New Game
        </button>
      </li>
    </ul>
  );
}

export default Menu;
