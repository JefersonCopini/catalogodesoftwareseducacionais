import NavBar from "@/app/components/NavBar";
import { sql } from "@vercel/postgres";

export default async function CienciasHumanas() {
    const { rows } = await sql`SELECT * FROM softwarescienciashumanas`;

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 text-white">
            <NavBar />
            <main className="flex-grow grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <div className="md:col-span-2 lg:col-span-3 mt-4 text-center">
                    <h2 id="matematica" className="text-gray-900 text-2xl font-bold">
                        CONHEÇA OS SOFTWARES EDUCACIONAIS VOLTADOS ÀS ÁREAS DAS CIÊNCIAS HUMANAS
                    </h2>
                </div>
                {rows.map((softwarescienciashumanas) => (
                    <div key={softwarescienciashumanas.nome} className="bg-gray-700 rounded-md pb-2">
                        <div className="text-white text-center p-4">
                            <h3 className="text-lg font-semibold">{softwarescienciashumanas.nome}</h3>
                            <p className="mt-2 text-gray-300">{softwarescienciashumanas.descricao}</p>
                            {softwarescienciashumanas.link && (
                                <a href={softwarescienciashumanas.link} className="text-blue-400 underline mt-2 inline-block">
                                    Saiba mais
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </main>
            <footer id="rodape" className="bg-gray-800 text-white text-center py-4">
                <div className="text-xl">
                    Esses são os softwares voltados às áreas de Ciências humanas apresentados em nosso site
                </div>
                <div className="mt-4 border-t border-gray-600 pt-4">
                    <button className="bg-gray-700 hover:bg-gray-900 text-white py-2 px-4 rounded">
                        <a href="/adcsoftwares/adcSoftwaresCienciasHumanas">Deseja Adicionar um novo software à página? Clique aqui</a>
                    </button>
                    <p className="mt-2 text-gray-300">Algumas vezes pode demorar um pouco para aparecer no site</p>
                </div>
            </footer>
        </div>
    );
}
