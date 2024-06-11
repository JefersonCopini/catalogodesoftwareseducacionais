import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const revalidate =0

export default async function ListSoftwares() {
    async function deleteSoftwares(formData: FormData){
        "use server"
        const id = formData.get("id") as string;
        await sql`DELETE from softwaresportugues where id=${id}`
        revalidatePath("/admin/softwares")
    }
    const { rows } = await sql`SELECT * from softwaresportugues`;
    return (
        <div>
            <h1 className="text-center text-white">Lista de softwares</h1>

            <table>
                <thead>
                    <tr> <td>nome </td> <td>descricao</td><td>link</td></tr>
                </thead>
                <tbody>
                    {
                        rows.map((softwaresportugues) => {
                            return (
                                <tr key={softwaresportugues.id}><td>{softwaresportugues.nome}</td><td>{softwaresportugues.descricao}</td> <td>{softwaresportugues.link}</td> 
                                <td>
                                    <form >
                                     <input type="text" hidden name="id" value={softwaresportugues.id}/>   
                                    <button className="text-red-700" formAction={deleteSoftwares}>Excluir</button>
                                    </form>
                                
                                </td> 
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    )
}