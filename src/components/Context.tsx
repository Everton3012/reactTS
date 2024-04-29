import { createContext } from "react";

interface IAppContext {
    language: string;
    framework : string;
    projects: number;
}

export const AppContext = createContext<IAppContext | null>(null);

const Context = () => {
  const contextValue : IAppContext = {
    language: "JavaScript",
    framework: "Express",
    projects: 5,
  }
    
  
    return (
    <div>context</div>
  )
}

export default Context;