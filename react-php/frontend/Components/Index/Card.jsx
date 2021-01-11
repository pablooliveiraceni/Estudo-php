const Card = () => {

    const [student, setStudent] = React.useState([]);
    const [render, setRender] = React.useState(false);
    const [msg, setMsg] = React.useState(false);
    
    React.useEffect(async () => {
        const url = "http://localhost/PROJETO-RECODE/react-php/backend";
        const response = await fetch(url);
        setStudent(await response.json());
    }, [render]);

    const registerStudent = (event) => {
        event.preventDefault(); //SEM REFRESH

        let formData = new FormData(event.target);
        console.log(formData);

        const url = "http://localhost/PROJETO-RECODE/react-php/backend/register-student.php";

        //GET = 1 Param - recupera dados 
        //POST = 2 Params - envia dados
        //GET e o POST
        //O padrão do metodo fetch é o verbo GET, mas não estamos limitados a trablhar com ele, podemos usar o verbo post para enviar dados também
        fetch(url, {
            method: "POST",
            body: formData
        }).then((response) => response.json())
        .then((dados) => {
            setRender(dados);
            setMsg(!msg);
            setTimeout(() => {
                setMsg(false);
            }, 3000);

        });
    }


    return (
       <div className="container py-5">

           <h1>Olá </h1>

            <div className="card w-75 mx-auto border-0">
                <form onSubmit={registerStudent} >
                    <input className="form-control mt-2" type="text"  name="name" placeholder="Name"/>
                    <input className="form-control mt-2" type="text" name="telphone" placeholder="telphone"/>
                    <button className="btn btn-info w-100 mt-2">Cadastrar estudantes</button>
                </form>
            </div>

        
            {student.map((element) => {
                return (
                    <div className="card w-75 mx-auto mt-5">
                        <div className="card-header">
                            {element.telphone}  
                        </div>
                        <div className="card-body">
                            {element.name}
                        </div>
                    </div>
                )
            })}
            
        </div>
    );
}