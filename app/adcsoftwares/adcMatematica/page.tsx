import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const revalidate =0

export default async function ListMat() {
    async function deleteMat(formData: FormData){
        "use server"
        const id = formData.get("id") as string;
        await sql`DELETE from car where id=${id}`
        revalidatePath("/admin/softwaresMatematica")
    }
    const { rows } = await sql`SELECT * from softwaresmatematica`;
    return (
        <div>
            <h1 className="text-center text-white">Lista de softwares</h1>

            <table>
                <thead>
                    <tr> <td>nome </td> <td>link</td></tr>
                </thead>
                <tbody>
                    {
                        rows.map((softwaresmatematica) => {
                            return (
                                <tr key={softwaresmatematica.id}><td>{softwaresmatematica.descricao}</td> <td>{softwaresmatematica.link}</td> 
                                <td>
                                    <form >
                                     <input type="text" hidden name="id" value={softwaresmatematica.id}/>   
                                    <button className="text-red-700" formAction={deleteMat}>Excluir</button>
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