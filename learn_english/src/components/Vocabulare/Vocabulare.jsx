//import words from "../../utils/words";
import Table from "../Table/Table";
import { useContext } from "react";
import { ContextApi } from "../../context/ContextApi";

function Vocabulare() {
  const { dictionary } = useContext(ContextApi);
return (
<div className="App__container">
  <main className="container__main">
      <h2>WORDLIST</h2>
      <div className="table_conteiner">
      {
      dictionary.map((word, i) =>
      <Table 
      key={i} english={word.english} transcription={word.transcription} russian={word.russian} tags={word.tags}
         />)
      }</div>
  </main>
</div>
);
}

export default Vocabulare;