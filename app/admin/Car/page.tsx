import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const revalidate =0

export default async function ListCar() {
    async function deleteCar(formData: FormData){
        "use server"
        const id = formData.get("id") as string;
        await sql`DELETE from car where id=${id}`
        revalidatePath("/admin/car")
    }
    const { rows } = await sql`SELECT * from car`;
    return (
        <div>
            <h1 className="text-center text-white">Lista de Carros</h1>

            <table>
                <thead>
                    <tr> <td>Marca </td> <td>Modelo</td></tr>
                </thead>
                <tbody>
                    {
                        rows.map((car) => {
                            return (
                                <tr key={car.id}><td>{car.marca}</td> <td>{car.modelo}</td> 
                                <td>
                                    <form >
                                     <input type="text" hidden name="id" value={car.id}/>   
                                    <button className="text-red-700" formAction={deleteCar}>Excluir</button>
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