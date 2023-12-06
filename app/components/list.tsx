import { sql } from "@vercel/postgres";

export default function list(){
    return(  const { rows } = await sql`SELECT * from car`;
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
                                <tr key={car.id}><td>{car.marca}</td> <td>{car.modelo}</td> </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    )

    )
}