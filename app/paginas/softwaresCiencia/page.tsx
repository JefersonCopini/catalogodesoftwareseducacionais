import { sql } from "@vercel/postgres";

export default async function Ciencia() {
    const { rows } = await sql`SELECT * FROM softwaresCiencia`;

    return (
        <div className="flex flex-col min-h-screen bg-[#4d4d4d]">
            <main className="flex-grow grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="md:col-span-2 lg:col-span-3 mt-4 text-white text-center">
                    <h2 id="matematica">
                        CONHEÇA OS SOFTWARES EDUCACIONAIS VOLTADOS AS AREAS DAS CIÊNCIAS DA NATUREZA
                    </h2>
                </div>
                {rows.map((softwaresciencia) => (
                    <div key={softwaresciencia.nome} className="bg-[#6B7280] rounded-md pb-2">
                        <div className="text-white text-center">
                            <h3>{softwaresciencia.nome}</h3>
                            <p>{softwaresciencia.descricao}</p>
                            {softwaresciencia.link && (
                                <a href={softwaresciencia.link} className="text-blue-400 underline">
                                    Saiba mais
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </main>
            <footer id="rodape" className="bg-[#3d3d3d] text-white text-center py-4">
                <div className="text-4xl">
                    Esses são os softwares voltados ás areas de Ciências da Natureza apresentados em nosso site
                </div>
                <div className="mt-4 border-t">
                <button className="bg-sky-500"><a href="/adcsoftwares/adcSoftwaresCienciasNatureza">  Deseja Adicionar um novo software a pagina clique aqui</a> </button>
                <p>Algumas vezes pode demorar um pouco para aparecer no site</p>
                </div>
            </footer>
        </div>
    );
}
