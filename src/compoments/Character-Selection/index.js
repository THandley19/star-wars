import React, { useState } from "react";
import "./style.css";

export default function CharacterSelect() {
  const [userCharacter, setuserCharacter] = useState([]);
  const [enemyCharacter, setenemyCharacter] = useState([]);

  const updateUserCharSelection = (character) => {
    return setuserCharacter([...userCharacter, character]);
  };

  const updateEnemyCharSelection = (character) => {
    return setenemyCharacter([...enemyCharacter, character]);
  };

  const checkData = () => {
    console.log("User: " + userCharacter);
    console.log("Enemy: " + enemyCharacter);
  };

  const handleClick = (e) => {
    const charSelected = e.target.innerHTML;
    if (userCharacter.length === 0) {
      updateUserCharSelection(charSelected);
    } else {
      updateEnemyCharSelection(charSelected);
    }
  };
  return (
    <div>
      <div className="light-side-char">
        <h1>Light Side</h1>
        <div>
          <h3 onClick={handleClick}>Rey</h3>
          <h3 onClick={handleClick}>Luke Skywalker</h3>
          <h3>Obi Wan Kenobi</h3>
          <h3 onClick={checkData}>Check Work</h3>
        </div>
      </div>
      <div className="dark-side-char"></div>
      <h1>Dark Side</h1>
      <div>
        <h3>Kylo Ren</h3>
        <h3>Darth Sidious</h3>
        <h3>Darth Vader</h3>
      </div>
    </div>
  );
}
