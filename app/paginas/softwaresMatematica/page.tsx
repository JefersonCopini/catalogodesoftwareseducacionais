import { sql } from "@vercel/postgres";

export default async function Matematica() {
    const { rows } = await sql`SELECT * FROM softwaresMatematica`;

    return (
        <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-3 mt-4 text-white text-center">
                <h2 id="matematica">
                    CONHEÇA OS SOFTWARES EDUCACIONAIS VOLTADOS À MATEMÁTICA
                </h2>
            </div>
            {rows.map((softwaresmatematica) => (
                <div key={softwaresmatematica.nome} className="bg-[#4d4d4d] rounded-md pb-2">
                    <div className="text-white text-center">
                        <h3>{softwaresmatematica.nome}</h3>
                        <p>{softwaresmatematica.descricao}</p>
                        {softwaresmatematica.link && (
                            <a href={softwaresmatematica.link} className="text-blue-400 underline">
                                Saiba mais
                            </a>
                        )}
                    </div>
                </div>
            ))}
            <footer id="rodape" className="mt-auto mb-8">
                <div className="flex justify-center text-4xl text-center space-x-4 text-white">
                    Esses são os softwares voltados à matemática apresentados em nosso site
                </div>
                <div className="text-center text-white mt-8 border-t">
                    {/* Adicione mais conteúdo do rodapé, se necessário */}
                </div>
            </footer>
        </main>
    );
}
