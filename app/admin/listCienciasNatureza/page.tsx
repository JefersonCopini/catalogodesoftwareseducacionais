import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const revalidate =0

export default async function ListCienciasNa() {
    async function deleteCNat(formData: FormData){
        "use server"
        const id = formData.get("id") as string;
        await sql`DELETE from softwaresciencias where id=${id}`
        revalidatePath("/admin/listCienciasNatureza")
    }
    const { rows } = await sql`SELECT * from softwaresciencia`;
    return (
        <div>
            <h1 className="text-center text-white">Lista de softwares</h1>

            <table>
                <thead>
                    <tr> <td>nome </td> <td>link</td></tr>
                </thead>
                <tbody>
                    {
                        rows.map((softwaresciencia) => {
                            return (
                                <tr key={softwaresciencia.id}><td>{softwaresciencia.descricao}</td> <td>{softwaresciencia.link}</td> 
                                <td>
                                    <form >
                                     <input type="text" hidden name="id" value={softwaresciencia.id}/>   
                                    <button className="text-red-700" formAction={deleteCNat}>Excluir</button>
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