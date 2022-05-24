import React, { useEffect, useState } from "react";
import "../css/HomePage.css";
import runningMan from "../images/runningMan.png";
import weightlifting from "../images/weightlifting.png";
import clipboard from "../images/clipboard.png";
import Axios from "axios";

export const HomePage = () => {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    if (quote === "") {
      getQuote();
    }
  });
  const getQuote = async () => {
    const resp = await Axios.get("https://type.fit/api/quotes")
      .then(function (response) {
        return response;
      })
      .then(function (data) {
        const quote = Math.floor(Math.random() * data.data.length);
        setQuote(data.data[quote].text + "\n-" + data.data[quote].author);
      });
    console.log(resp);
  };

  return (
    <div>
      <div className="quote-1">
        <span>{quote}</span>
      </div>
      <div className="quote-2">
        <h2>
          Click on workouts to view some beguinner excersises. Get your{" "}
          <span>IDEAL BODY</span>
        </h2>
        <h1>Fitness is all about progress!</h1>
      </div>
      <div className="container">
        <div>
          <img
            className="homepage-img"
            src={runningMan}
            alt="Excersise picture"
          />
          <h3>Track your weight</h3>
          <p>
            Learning and tracking your weight, will allow you to better
            understand the workouts needed to maintain your{" "}
            <span>IDEAL BODY</span>{" "}
          </p>
        </div>
        <div>
          <img
            className="homepage-img"
            src={weightlifting}
            alt="track of weight picture"
          />
          <h3>Excercises</h3>
          <p>
            Knowing the right Excercises and knowing how to use them can be the
            dedicing factor to your <span>IDEAL BODY</span>
          </p>
        </div>
        <div>
          <img
            className="homepage-img"
            src={clipboard}
            alt="Work out of the day"
          />
          <h3>Workout of the day</h3>
          <p>
            Remember, Having a fun and enjoyable workout that is suited for you
            will allow you to access your <span>IDEAL BODY</span>
          </p>
        </div>
      </div>
    </div>
  );
};
