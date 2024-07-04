import { sql } from "@vercel/postgres";

export default async function Principalpage() {
  return (
    <main className="grid gap-4 grid-cols-1 bg-white dark:bg-slate-800 p-6">
      <div className="flex justify-center items-center">
        <a
          className="block w-full p-4 border border-gray-500 rounded-full text-center text-white text-lg md:text-2xl lg:text-3xl xl:text-4xl transition-transform transform hover:scale-105 bg-gray-700 hover:bg-gray-800"
          href="/paginas/softwaresMatematica"
        >
          Matemática
        </a>
      </div>
      <div className="flex justify-center items-center">
        <a
          className="block w-full p-4 border border-gray-500 rounded-full text-center text-white text-lg md:text-2xl lg:text-3xl xl:text-4xl transition-transform transform hover:scale-105 bg-gray-700 hover:bg-gray-800"
          href="/paginas/softwaresCiencia"
        >
          Ciências da Natureza (Física, Química e Biologia)
        </a>
      </div>
      <div className="flex justify-center items-center">
        <a
          className="block w-full p-4 border border-gray-500 rounded-full text-center text-white text-lg md:text-2xl lg:text-3xl xl:text-4xl transition-transform transform hover:scale-105 bg-gray-700 hover:bg-gray-800"
          href="/paginas/softwaresCienciasHumanas"
        >
          Ciências Humanas (História, Geografia, Filosofia e Sociologia)
        </a>
      </div>
      <div className="flex justify-center items-center">
        <a
          className="block w-full p-4 border border-gray-500 rounded-full text-center text-white text-lg md:text-2xl lg:text-3xl xl:text-4xl transition-transform transform hover:scale-105 bg-gray-700 hover:bg-gray-800"
          href="/paginas/softwaresPortugues"
        >
          Língua Portuguesa
        </a>
      </div>
      <div className="flex justify-center items-center">
        <a
          className="block w-full p-4 border border-gray-500 rounded-full text-center text-white text-lg md:text-2xl lg:text-3xl xl:text-4xl transition-transform transform hover:scale-105 bg-gray-700 hover:bg-gray-800"
          href="/paginas/SalasDeAula"
        >
          Salas de Aulas Online
        </a>
      </div>
    </main>
  );
}
