import { url } from "inspector";
import { title } from "process";
import { sql } from "@vercel/postgres";

export default async function Principalpage() {
  return (
    <main className="grid gap-4 grid-cols-1 md:grid-cols-2">
      <div className="flex justify-center items-center">
        <a
          className="block w-full md:w-auto p-4 border border-green-500 rounded-full text-center text-white text-lg md:text-2xl lg:text-3xl xl:text-4xl transition-transform transform hover:scale-105"
          href="/paginas/softwaresMatematica"
          
        >
          Matemática
        </a>
      </div>
      <div className="flex justify-center items-center">
        <a
          className="block w-full md:w-auto p-4 border border-green-500 rounded-full text-center text-white text-lg md:text-2xl lg:text-3xl xl:text-4xl transition-transform transform hover:scale-105"
          href="components/paginas/matematica"
        >
          Ciencia e Biologia 
        </a>
      </div>
      <div className="flex justify-center items-center">
        <a
          className="block w-full md:w-auto p-4 border border-green-500 rounded-full text-center text-white text-lg md:text-2xl lg:text-3xl xl:text-4xl transition-transform transform hover:scale-105"
          href="/components/paginas/Matematica.tsx"
          
        >
          Informática
        </a>
      </div>
      <div className="flex justify-center items-center">
        <a
          className="block w-full md:w-auto p-4 border border-green-500 rounded-full text-center text-white text-lg md:text-2xl lg:text-3xl xl:text-4xl transition-transform transform hover:scale-105"
          href="components/paginas/matematica"
        >
          Fisica
        </a>
      </div>
      <div className="flex justify-center items-center">
        <a
          className="block w-full md:w-auto p-4 border border-green-500 rounded-full text-center text-white text-lg md:text-2xl lg:text-3xl xl:text-4xl transition-transform transform hover:scale-105"
          href="components/paginas/matematica"
        >
          
        </a>
        
      </div>
    </main>

  );
}
