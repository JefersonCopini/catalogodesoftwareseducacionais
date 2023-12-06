export default function cadastro(){
    function saveCourse(){
        "use server"
        console.log("Acessou a função")
    }
    return(
        <div>
            <h1 className="text-white text-center text-4xl"> Cadastrar carro</h1>
            <form>
                <input type="text" name="marca" placeholder="Digite a Marca do Carro " /> <br></br>
                <input type="text" name="modelo" placeholder="Digite o Modelo do Carro " /><br></br>
                
                <button formAction={saveCourse} className="text-white"> Salvar</button>

            </form>
        </div>
    )
}