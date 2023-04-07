import React,{useState} from "react";
import "./Table.css";

export default function Table(props) {
const [pressed, setPressed] = useState(false);
const [inputText, setInputText] = useState({
  field1: false,
  field2: false,
  field3: false,
  field4: false,});
const {english, transcription, russian, tags } = props;
const handleSaveBtn = () => {
setPressed(!pressed);
};
const handleCancelClick = () => {
setPressed(!pressed);
setInputText(props);
};
const onChange = event => {
  const { name, value } = event.target.value;
  setInputText ({
    ...inputText,
    [name]: Boolean(value),
  });
};
const isFormValid = Object.values(inputText).every((field) => field);
return (
<div className="tableConteiner">
  {pressed ? (
  <div className="table">
    <h2><input type="text"
      name="field1" value={inputText.english} onChange={onChange} style={{
        border: inputText.field1 ? "none" : "2px solid red",
      }}/></h2>
    <p>
      <span></span> <input type="text"
      name="field2" value={inputText.transcription} onChange={onChange} style={{
        border: inputText.field2 ? "none" : "2px solid red",
      }}/>
    </p>
    <p>
      <span></span> <input type="text"
      name="field3" value={inputText.russian} onChange={onChange} style={{
        border: inputText.field3 ? "none" : "2px solid red",
      }}/>
    </p>
    <p>
      <span></span> <input type="text"
      name="field4" value={inputText.tags} onChange={onChange} style={{
        border: inputText.field4 ? "none" : "2px solid red",
      }}/>
    </p>
    <div className="table_buttons">
      <button className="tableSaveButton" disabled={!isFormValid}>✅</button>
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