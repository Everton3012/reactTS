import Variaveis from "./components/Var";
import FuncComponents from "./components/FuncComponets";
import Prop  , {Category}from "./components/Prop";
import State from "./components/State";
import Tipo from "./components/Tipo";

function App() {

  return (
    <>
      <Prop name={"Super Cleber"} category={Category.P} />
      <Variaveis />
      <FuncComponents />
      <State />
      <Tipo />
    </>
  )
}

export default App
