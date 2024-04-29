import { ChangeEvent, ReactElement , useState } from "react";

const State = () : ReactElement => {
    const [text, setText] = useState<string | null>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

  return (
    <div>
        <p>{text}</p>
        <input type="text" onChange={handleChange} />
        
    </div>
  )
}

export default State