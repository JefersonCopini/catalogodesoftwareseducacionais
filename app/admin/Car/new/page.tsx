import { sql } from "@vercel/postgres";

export const revalidate =0

export default function NewCar({
    searchParams,
  }: {
    searchParams?: {
      url?: string;  
    };
  }){
    
    const urlImage = searchParams?.url || '';

    async function saveCar(formData: FormData){
        "use server"
        const marca = formData.get("marca") as string;
        const modelo = formData.get("modelo") as string;
        await sql`INSERT INTO car (marca, modelo) VALUES(${marca}, ${modelo})`
        console.log("Acessou a função")
    }
    return (
        <div>
        <h1 className="text-white text-center text-4xl">Cadastrar Cursos</h1>
            <form>
                <input type="text" name="marca" placeholder="Digite a Marca do carro"/><br/><br/>
                <input type="text" name="modelo" placeholder="Digite o Modelo do carro"/> <br/><br/>
                <br/>
                
                <button  formAction={saveCar} className="text-lime-950">Salvar</button>
            </form>
            </div>

    )
}