import React,{useState, useEffect, useRef }  from "react";
import "./Card.css";
import { motion } from "framer-motion";

export default function Card({item,
  handleTransleiteBtn,
  pressed,
  setPressed,
  arrId,}) {
    const [word, setWords] = useState({});

    const focusRef = useRef();
  
    useEffect(() => {
      setWords(item);
      const copyId = arrId.filter((id) => id === item);
      if (copyId < 1) {
        setPressed(false);
      }
    }, [item]);
  
    useEffect(() => {
      if (focusRef.current) {
        focusRef.current.focus();
      }
    }, []);
  
    if (!word) {
      return <h1 className="h1">КОНЕЦ ИГРЫ</h1>;
    }
  
    if (pressed === true)
return (
<motion.div className="card__container" animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }} transition={{ duration: 1 }}>
  <div className="card">
    <h2 className="english">{word.english}</h2>
    <p className="transcription">{word.transcription}</p>
    <p className="tags">{word.tags}</p>
    <p className="russian">{word.russian}</p>
  </div>
  </motion.div>
);
if (pressed === false)
    return (
<motion.div className="card__container" animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }} transition={{ duration: 1 }}>
  <div className="card">
    <h2 className="english">{word.english}</h2>
    <p className="transcription">{word.transcription}</p>
    <p className="tags">{word.tags}</p>
    <motion.button whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9, x: "-5px", y: "5px" }} onClick={handleTransleiteBtn}
            ref={focusRef} className="check_btn">Проверить</motion.button>
  </div>
  </motion.div>
    );
} 