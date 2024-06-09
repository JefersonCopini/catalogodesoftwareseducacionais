import { sql } from "@vercel/postgres";

export default async function Matematica() {
    // Executa a consulta para obter todos os registros da tabela 'softwaresMatematica'
    const { rows } = await sql`SELECT * FROM softwaresMatematica`;

    // Verifica se os registros estão sendo retornados corretamente
    console.log("Dados do banco de dados:", rows);

    if (!rows || rows.length === 0) {
        return <div className="text-white text-center">Nenhum software encontrado.</div>;
    }

    return (
        <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-3 mt-4 text-white text-center">
                <h2 id="matematica">
                    Conheça os softwares educacionais voltados a matemática
                </h2>
            </div>
            {rows.map((software) => (
                <div key={software.nome} className="bg-[#4d4d4d] rounded-md pb-2">
                    <div className="text-white text-center p-4">
                        <h3>{software.nome}</h3>
                        <p>{software.descricao}</p>
                        {software.hyperlink && (
                            <a href={software.hyperlink} className="text-blue-400 underline">
                                Saiba mais
                            </a>
                        )}
                    </div>
                </div>
            ))}
        </main>
    );
}
