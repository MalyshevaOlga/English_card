import React, { PureComponent } from "react";
import Card from "../Card/Card";
import "../Slider/Slider.css";

import arrowLeft from "../..arrow-left.png";
import arrowRight from "../..arrow-right.png";
import done from "../..done.png";

export default class Slider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      currentIndex: 0,
    };
  }

  //загружаем данные с сервера
  async componentDidMount() {
    const response = await fetch("http://itgirlschool.justmakeit.ru/api/words");
    const result = await response.json();
    //получаем весь массив целиком
    this.setState({
      words: result,
    });
  }

  onNextClick = () => {
    let { currentIndex } = this.state;
    let nextIndex = currentIndex + 1;
    this.setState({
      currentIndex: nextIndex,
    });
  };

  onPrevClick = () => {
    this.setState({
      currentIndex:
        this.state.currentIndex === 0
          ? this.state.words.length - 1
          : this.state.currentIndex - 1,
    });
  };

  render() {
    let { words, currentIndex } = this.state;
    let card = words[currentIndex];

    if (currentIndex === words.length) {
      return <img className={styles.img__done} src={done} />;
    }

    if (card) {
      return (
        <div className="slider__container">
          <h1>Game</h1>
          <div className="gallery">
            <button className="btn">
              <img
                src={arrowLeft}
                alt="back"
                className="img__back"
                onClick={this.onPrevClick}
              />
            </button>
            <Card
              english={card.english}
              transcription={card.transcription}
              translation={card.russian}
            />

            <button className="btn">
              <img
                src={arrowRight}
                alt="next"
                className="img__next"
                onClick={this.onNextClick}
              />
            </button>
          </div>
          <div className="wordslist__index">
            {currentIndex + 1 + "/" + words.length}
          </div>
        </div>
      );
    }
    return "Загрузка";
  }
}