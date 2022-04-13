import { useEffect, useState } from "react";
import axios from "axios";
import "./TestShowAllImg.css";

const TestShowAllImg = () => {
  const [allInfo, setallInfo] = useState([]);

  useEffect(() => {
    axios
      .get("https://akabab.github.io/superhero-api/api/all.json")
      .then((response) => {
        setallInfo(response.data);
      });
  }, []);

  return (
    <>
      <h1>Test Show All Img</h1>
      <ul>
        {allInfo.map((info) => (
          <li>
            <h2>{info.name}</h2>
            <img src={info.images.sm}></img>
            <p>
              Intelligence:
              <progress
                id="intelligence"
                max="100"
                value={info.powerstats.intelligence}
              ></progress>
              {info.powerstats.intelligence}
            </p>
            <p>
              Strength:
              <progress
                id="strength"
                max="100"
                value={info.powerstats.strength}
              ></progress>
              {info.powerstats.strength}
            </p>
            <p>
              Speed:
              <progress
                id="speed"
                max="100"
                value={info.powerstats.speed}
              ></progress>
              {info.powerstats.speed}
            </p>
            <p>
              Durability:
              <progress
                id="durability"
                max="100"
                value={info.powerstats.durability}
              ></progress>
              {info.powerstats.durability}
            </p>
            <p>
              Power:
              <progress
                id="power"
                max="100"
                value={info.powerstats.power}
              ></progress>
              {info.powerstats.power}
            </p>
            <p>
              Combat:
              <progress
                id="combat"
                max="100"
                value={info.powerstats.combat}
              ></progress>
              {info.powerstats.combat}
            </p>
            <h2>{info.biography.alignment}</h2>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TestShowAllImg;
