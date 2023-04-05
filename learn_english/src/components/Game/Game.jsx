import React, { useState, useEffect } from "react";
import Services from "../Servises/Servises";
import Card from "../Card/Card";
import "./Game.css";


export default function Game() {
  const [posts, setPosts] = useState([]);
  let [index, setIndex] = useState(0);
  const [pressed, setPressed] = useState(false);
  const [counter, setCounter] = useState(0);
  const [arrId, setArrId] = useState([]);
  //Вызвали эту обработку в usEffect
  useEffect(() => {
    getWord();
  }, []);

  //Обработали метод класса и поместили результат запроса в состояние
  async function getWord() {
    const data = await Services.getWord();
    setPosts(data);
  }

  function handlePrevClick() {
    let result = index;
    if (result--) {
      setIndex(result);
      setPressed(false);
    } else {
      setIndex = 0;
    }
  }

  function handleNextClick() {
    let result = index;
    result++;
    setIndex(result);
    setPressed(false);
  }

  const handleTransleiteBtn = () => {
    const id = posts[index].id;
    const copyIdTrue = arrId.filter((item) => item === id);
    if (copyIdTrue.length < 1) {
      setArrId([...arrId, id]);
    }
    setPressed(true);
    handleCount();
  };

  const handleCount = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="App__container">
      <main className="container__main">
      <h1>GAME</h1>
      <h2 className="index">Изучено слов за тренировку {counter + "/" + posts.length} </h2>
        <div className="cards_conteiner">
        <button onClick={handlePrevClick} className="btn">PREV</button>
        <Card
          item={posts[index]}
          pressed={pressed}
          setPressed={setPressed}
          handleTransleiteBtn={handleTransleiteBtn}
          arrId={arrId}
        />
        <button onClick={handleNextClick} className="btn">NEXT</button>
      </div>
      </main>
    </div>
  );
}
