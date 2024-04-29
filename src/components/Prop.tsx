interface Props {
  name:string
  category: Category;
}

export enum Category {
  JS = "JavaScript",
  JV = "Java",
  P  = "Pytjon" 
}

const Prop = ({name, category}: Props) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{category}</p>

    </div>

  )
}

export default Prop;