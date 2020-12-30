import React, { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { ButtonDiscover } from "./components/ButtonDiscover/ButtonDiscover";
import { PastLive } from "./components/PastLive/PastLive";
import { getRandomAdjective, getRandomAnimal } from "./utils/fetchingApis";
import "./styles.css";

export default function App() {
  const [discovered, setDiscovered] = useState(false);
  const [animal, setAnimal] = useState("");
  const [adjective, setAdjective] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleDiscovered = () => {
    setDiscovered(!discovered);
  };

  useEffect(() => {
    setLoading(true);
    getRandomAnimal().then((animal) => {
      setAnimal(animal);
    });
    getRandomAdjective(animal).then((adjective) => {
      setAdjective(adjective);
    });
    setLoading(false);
  }, [discovered]);
  // Does not include animals and adjective by choice infinite loop if you do.

  const handleClick = () => {
    toggleDiscovered();
  };

  return (
    <div className="main">
      {discovered ? (
        <>
          <Header
            title="Remember"
            homeAction={handleClick}
            discovered={discovered}
          />
          <PastLive animal={animal} adjective={adjective} loading={loading} />
        </>
      ) : (
        <>
          <Header title="Past Lives" />
          <div className="discover-button-container">
            <ButtonDiscover onClick={handleClick} />
          </div>
        </>
      )}
    </div>
  );
}
