import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const revalidate =0

export default async function ListSalas() {
    async function deleteSalas(formData: FormData){
        "use server"
        const id = formData.get("id") as string;
        await sql`DELETE from softwaressalasdeaula where id=${id}`
        revalidatePath("/admin/ListSoftwaresSalasdeAula")
    }
    const { rows } = await sql`SELECT * from softwaressalasdeaula`;
    return (
        <div>
            <h1 className="text-center text-white">Lista de softwares</h1>

            <table>
                <thead>
                    <tr> <td>nome </td> <td>link</td></tr>
                </thead>
                <tbody>
                    {
                        rows.map((softwaressalasdeaula) => {
                            return (
                                <tr key={softwaressalasdeaula.id}><td>{softwaressalasdeaula.descricao}</td> <td>{softwaressalasdeaula.link}</td> 
                                <td>
                                    <form >
                                     <input type="text" hidden name="id" value={softwaressalasdeaula.id}/>   
                                    <button className="text-red-700" formAction={deleteSalas}>Excluir</button>
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