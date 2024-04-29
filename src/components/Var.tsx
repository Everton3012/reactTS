const Var = () => {

    const name:string = "everton";
    const age: number = 23;
    const isWorking : boolean = true;


  return (
    <div>
        <h1>{name}</h1>
        <h2>{age}</h2>
        {isWorking && (
            <>
                Está trabalhando!
            </>
        )}
    </div>

  );
};

export default Var;