import React,{useState, useEffect} from "react";
import "./Table.css";


export default function Table(props) {
const [isEdit, setIsEdit] = useState(false);
const [inputText, setInputText] = useState({
  field1: '',
  field2: '',
  field3: '',
  field4: '',});
const {english, transcription, russian, tags } = props;
const [isEmpty, setIsEmpty] = useState(true);
const [isLoading, setIsLoading] = useState(false);

const addWord = async () => {
  setIsLoading(true);
  try {
    const response = await fetch('http://itgirlschool.justmakeit.ru/api/words/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputText),
    });
    if (response.ok) {
      console.log('Word added successfully');
      // Дополнительные действия при успешной отправке, например, очистка формы или обновление данных
    } else {
      console.error('Failed to add word');
    }
  } catch (error) {
    console.error('Failed to add word', error);
  }
  setIsLoading(false);
};
const deleteWord = async (id) => {
  setIsLoading(true);
  try {
    const response = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
      method: 'DELETE',
    });
    if (response.ok) {
      console.log('Word deleted successfully');
      // Дополнительные действия при успешном удалении, например, обновление данных
    } else {
      console.error('Failed to delete word');
    }
  } catch (error) {
    console.error('Failed to delete word', error);
  }
  setIsLoading(false);
};

const onChange = (event) => {
  setInputText({
    ...inputText,
    [event.target.name]: event.target.value,
  });
};

useEffect(() => {
  if (
    inputText.english === '' ||
    inputText.transcription === '' ||
    inputText.russian === '' ||
    inputText.tags === ''
  ) {
    setIsEmpty(true);
  } else {
    setIsEmpty(false);
  }
}, [inputText]);

const errorClass = (value) => {
  return typeof value === 'string' && value.trim() === '' ? 'error' : '';
};

function onEditClick() {
  setIsEdit(!isEdit);
}

function onCancelClick() {
  setInputText(props);
  setIsEdit(!isEdit);
}

//вывести в консоль сообщение с параметрами формы и закрыть режим редактирования
function onSaveClick() {
  if (
    inputText.english === '' ||
    inputText.transcription === '' ||
    inputText.russian === '' ||
    inputText.tags === ''
  ) {
    alert('Error: Please fill in all the fields');
  } else {
    console.log('Form parameters:', inputText);
    setIsEdit(false); // закрывает режим редактирования
    addWord(); // отправка данных на сервер
  }
}
const isFormValid = Object.values(inputText).every((field) => field);
return (
<div className="tableConteiner">
  {isEdit ? (
    <div className="table">
          <h2><input type="text" className={`card-input ${errorClass(inputText.english)}`}
            name="field1" value={inputText.english} onChange={onChange} style={{
              border: inputText.field1 ? "none" : "2px solid red",
            }} /></h2>
          <p>
            <span></span> <input type="text" className={`card-input ${errorClass(inputText.transcription)}`}
              name="field2" value={inputText.transcription} onChange={onChange} style={{
                border: inputText.field2 ? "none" : "2px solid red",
              }} />
          </p>
          <p>
            <span></span> <input type="text" className={`card-input ${errorClass(inputText.russian)}`}
              name="field3" value={inputText.russian} onChange={onChange} style={{
                border: inputText.field3 ? "none" : "2px solid red",
              }} />
          </p>
          <p>
            <span></span> <input type="text" className={`card-input ${errorClass(inputText.tags)}`}
              name="field4" value={inputText.tags} onChange={onChange} style={{
                border: inputText.field4 ? "none" : "2px solid red",
              }} />
          </p>
          <div className="table_buttons">
          <button className={`tableSaveButton ${isEmpty || isLoading ? 'disabled' : ''}`} disabled={!isFormValid || isLoading} onClick={onSaveClick}>✅</button>
          <button className="tableDeliteButton" onClick={() => deleteWord(props.id)}>🗑️</button>
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
      <button onClick={onEditClick} className="tableEditButton">🖊️</button>
      <button className="tableDeliteButton" onClick={onCancelClick}>🗑️</button>
    </div>
  </div>
  )}
</div>
);
};