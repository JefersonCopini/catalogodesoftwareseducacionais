import { sql } from "@vercel/postgres";

export default async function Matematica() {
    const { rows } = await sql`SELECT * FROM softwaresMatematica`;

    return (
        <main className="flex flex-col bg-[#3d3d3d] min-h-screen">
            <div className="md:col-span-2 lg:col-span-3 mt-4 text-white text-center max-w-[1440px] w-full mx-auto px-4">
                <h2 id="matematica">
                    Conheça os softwares educacionais voltados a matemática
                </h2>
            </div>
            <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 flex-grow px-2">
                {rows.map((softwaresmatematica) => (
                    <div key={softwaresmatematica.nome} className="bg-[#4d4d4d] rounded-md p-2">
                        <div className="text-white text-center">
                            <h3>{softwaresmatematica.nome}</h3>
                            <p>{softwaresmatematica.descricao}</p>
                            {softwaresmatematica.hyperlink && (
                                <a href={softwaresmatematica.hyperlink} className="text-blue-400 underline">
                                    Saiba mais
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <footer id="rodape" className="mt-auto mb-8">
                <div className="flex justify-center text-4xl text-center space-x-4 text-white">
                    Esses são os softwares voltados a matemática apresentados em nosso site
                </div>
                <div className="text-center text-white mt-8 border-t">
                    {/* Adicione mais conteúdo do rodapé, se necessário */}
                </div>
            </footer>
        </main>
    );
}
