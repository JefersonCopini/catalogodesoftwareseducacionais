import { sql } from "@vercel/postgres";

export default async function Portugues() {
    const { rows } = await sql`SELECT * FROM softwaresportugues`;

    return (
        <div className="flex flex-col min-h-screen bg-[#4d4d4d]">
            <main className="flex-grow grid gap-4 md:grid-cols-2 lg:grid-cols-3">
               
                <div className="md:col-span-2 lg:col-span-3 mt-4 text-white text-center">
                    <h2 id="matematica">
                        CONHEÇA OS SOFTWARES EDUCACIONAIS VOLTADOS Á LINGUA PORTUGUESA
                    </h2>
                </div>
                {rows.map((softwaresportugues) => (
                    <div key={softwaresportugues.nome} className="bg-[#6B7280] rounded-md pb-2">
                        <div className="text-white text-center">
                            <h3> {softwaresportugues.nome}</h3>
                            <p> {softwaresportugues.descricao}</p>
                            {softwaresportugues.link && (
                                <a href={softwaresportugues.link} className="text-blue-400 underline">
                                    Saiba mais
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </main>
            <footer id="rodape" className="bg-[#3d3d3d] text-white text-center py-4">
                <div className="text-4xl">
                    Esses são os softwares voltados ás areas de Lingua Portuguesa apresentados em nosso site.

                </div>
                <div className="mt-4 border-t">
                    <button className="bg-sky-500"><a href="/adcsoftwares/adcPortugues">  Deseja Adicionar um novo software a pagina clique aqui</a> </button>
                
                </div>
            </footer>
        </div>
    );
}
