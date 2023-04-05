import React,{useState} from "react";
import "./Table.css";

export default function Table(props) {
const [pressed, setPressed] = useState(false);
const [inputText, setInputText] = useState(props);
const {english, transcription, russian, tags } = props;
const handleSaveBtn = () => {
setPressed(!pressed);
};
const handleCancelClick = () => {
setPressed(!pressed);
setInputText(props);
};

return (
<div className="tableConteiner">
  {pressed ? (
  <div className="table">
    <h2><input type="text" value={inputText.english} name={english} /></h2>
    <p>
      <span></span> <input type="text" value={inputText.transcription} name={transcription} />
    </p>
    <p>
      <span></span> <input type="text" value={inputText.russian} name={russian} />
    </p>
    <p>
      <span></span> <input type="text" value={inputText.tags} name={tags} />
    </p>
    <div className="table_buttons">
      <button className="tableSaveButton">✅</button>
      <button className="tableDeliteButton" onClick={handleCancelClick}>🗑️</button>
    </div>
  </div>
  ) : (
  <div className="table">
    <h2>{english}</h2>
    <p>
      <span></span> {transcription}
    </p>
    <p>
      <span></span> {russian}
    </p>
    <p>
      <span></span> {tags}
    </p>
    <div className="table_buttons">
      <button onClick={handleSaveBtn} className="tableEditButton">🖊️</button>
      <button className="tableDeliteButton">🗑️</button>
    </div>
  </div>
  )}
</div>
);
}