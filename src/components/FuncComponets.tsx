import { ReactElement } from "react";

const FuncComponents = (): ReactElement => {

  const name:string = "everton";


    const userGreating = (name: string) : string => {
      return `Olá, ${name} `;
    }


  return (
    <div>
        <h3>{userGreating(name)}</h3>
    </div>

  );
};

export default FuncComponents;