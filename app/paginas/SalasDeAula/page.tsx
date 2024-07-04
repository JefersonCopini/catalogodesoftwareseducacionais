import { sql } from "@vercel/postgres";

export default async function SalasDeAulas() {
  const { rows } = await sql`SELECT * FROM softwaressalasdeaula`;

  return (
    <div className="flex flex-col min-h-screen bg-[#4d4d4d]">
      <main className="flex-grow grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="md:col-span-2 lg:col-span-3 mt-4 text-white text-center">
          <h2 id="matematica">
            CONHEÇA OS SOFTWARES EDUCACIONAIS VOLTADOS ÀS SALAS DE AULAS ONLINE
          </h2>
        </div>
        {rows.map((softwaressalasdeaula) => (
          <div key={softwaressalasdeaula.nome} className="bg-gray-700 rounded-md pb-2">
            <div className="text-white text-center p-4">
              <h3 className="text-lg font-semibold">{softwaressalasdeaula.nome}</h3>
              <p className="mt-2 text-gray-300">{softwaressalasdeaula.descricao}</p>
              {softwaressalasdeaula.link && (
                <a href={softwaressalasdeaula.link} className="text-blue-400 underline mt-2 inline-block">
                  Saiba mais
                </a>
              )}
            </div>
          </div>
        ))}
      </main>
      <footer id="rodape" className="bg-[#3d3d3d] text-white text-center py-4">
        <div className="text-xl">
          Esses são os softwares voltados às áreas de Salas de Aulas Online em nosso site
        </div>
        <div className="mt-4 border-t border-gray-600 pt-4">
          <button className="bg-gray-700 hover:bg-gray-800 text-white py-2 px-4 rounded">
            <a href="/adcsoftwares/AdcSalasDeAula">Deseja Adicionar um novo software à página? Clique aqui</a>
          </button>
          <p className="mt-2 text-gray-300">Algumas vezes pode demorar um pouco para aparecer no site</p>
        </div>
      </footer>
    </div>
  );
}
