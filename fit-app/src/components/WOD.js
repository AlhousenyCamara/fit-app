import React from "react";
import "../css/WOD.css";

export const WOD = () => {
  return (
    <div>
      <div className="container-wk1">
        <div className="WK">
          <h2>Pull Up</h2>
          <hr />
          <ul className="container-wk2">
            <li>Number of Sets:5</li>
            <li>Number of Reps:12</li>
            <li>Time:5 min</li>
          </ul>
        </div>
        <div className="WK">
          <h2>Push Up</h2>
          <hr />
          <ul className="container-wk2">
            <li>Number of Sets:8</li>
            <li>Number of Reps:12</li>
            <li>Time:5 min</li>
          </ul>
        </div>
        <div className="WK">
          <h2>Lunges</h2>
          <hr />
          <ul className="container-wk2">
            <li>Number of Sets:8</li>
            <li>Number of Reps:12</li>
            <li>Time:5 min</li>
          </ul>
        </div>
        <div className="WK">
          <h2>Jump rope</h2>
          <hr />
          <ul className="container-wk2">
            <li>Number of Sets:3</li>
            <li>Time:15 min</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
