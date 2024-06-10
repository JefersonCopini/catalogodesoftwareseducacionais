import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const revalidate =0

export default async function ListCienciasHu() {
    async function deleteCHuman(formData: FormData){
        "use server"
        const id = formData.get("id") as string;
        await sql`DELETE from car where id=${id}`
        revalidatePath("/admin/listCienciasHumanas")
    }
    const { rows } = await sql`SELECT * from softwarescienciashumanas`;
    return (
        <div>
            <h1 className="text-center text-white">Lista de softwares</h1>

            <table>
                <thead>
                    <tr> <td>nome </td> <td>link</td></tr>
                </thead>
                <tbody>
                    {
                        rows.map((softwarescienciashumanas) => {
                            return (
                                <tr key={softwarescienciashumanas.id}><td>{softwarescienciashumanas.descricao}</td> <td>{softwarescienciashumanas.link}</td> 
                                <td>
                                    <form >
                                     <input type="text" hidden name="id" value={softwarescienciashumanas.id}/>   
                                    <button className="text-red-700" formAction={deleteCHuman}>Excluir</button>
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