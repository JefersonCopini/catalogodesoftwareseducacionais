import { sql } from "@vercel/postgres";

export const revalidate =0

export default function NewCienciasHumanas({
    searchParams,
  }: {
    searchParams?: {
      url?: string;  
    };
  }){
    
    const urlImage = searchParams?.url || '';

    async function saveCienciasHumanas(formData: FormData){
        "use server"
        const nome = formData.get("nome") as string;
        const descricao = formData.get("descricao") as string;
        const link = formData.get("link") as string;
        await sql`INSERT INTO softwarescienciashumanas (nome,descricao,link) VALUES(${nome}, ${descricao}, ${link})`
        console.log("Acessou a função")
    }
    return (
        <div>
        <h1 className="text-white text-center text-4xl ">Cadastrar softwares</h1>
            <form>
                <input type="text" name="nome" placeholder="Digite o nome do software"/><br/><br/>
                <input type="text" name="descricao" placeholder="Descricao do software"/> <br/><br/>
                <input type="text" name="link" placeholder="Insira o link de acesso"/> <br></br>
                <br/>
                
                <button  formAction={saveCienciasHumanas} className="text-lime-950">Salvar</button>
                 <a className="text-lime-950" href="/paginas/softwaresCiencia">  Voltar</a>
            </form>
            <p> Não se assuste após clicar sem salvar os dados serão salvos e enviados para o banco de dados e logo mais aparecerá no site</p>
            </div>

    )
}