import Variaveis from "./components/Var";
import FuncComponents from "./components/FuncComponets";
import Prop  , {Category}from "./components/Prop";
import State from "./components/State";

function App() {

  return (
    <>
      <Prop name={"Super Cleber"} category={Category.P} />
      <Variaveis />
      <FuncComponents />
      <State />
    </>
  )
}

export default App
