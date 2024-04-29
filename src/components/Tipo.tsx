
type textOrNull = string | null;
type fixed = "isso" | "ou" | "aquilo";

const Tipo = () :void => {

  const myText:textOrNull = "Tem algum texto aqui";
  let mySecondText:textOrNull = null;
  mySecondText = "1";

  const testandoFixed:fixed = "aquilo";

  {myText && (
    <>
        <p>Tem texto na variavel</p>
    </>
  )
  }
  {mySecondText && (
    <>
        <p>Tem texto na variavel</p>
    </>
  )
  }
  {!mySecondText && (
    <>
        <p>adicione um texto</p>
    </>
  )}
  <p>{testandoFixed}</p>
}

export default Tipo