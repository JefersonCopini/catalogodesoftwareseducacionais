import BackButton from './BackButton';

export default function NavBar() {
    return (
        <div className="p-12 flex justify-between items-center bg-gray-800">
            <BackButton />
            <a href="/"

             className="block mb-2 px-4 py-2 border border-white bg-gray-200 text-black rounded-md hover:bg-gray-300">Página Principal</a>
            <a href="/paginas/softwaresMatematica" className="block mb-2 px-4 py-2 border border-white bg-gray-200 text-black rounded-md hover:bg-gray-300">Matemática</a>
            <a href="/paginas/softwaresCiencia" className="block mb-2 px-4 py-2 border border-white bg-gray-200 text-black rounded-md hover:bg-gray-300">Ciências da Natureza</a>
            <a href="/paginas/softwaresCienciasHumanas" className="block mb-2 px-4 py-2 border border-white bg-gray-200 text-black rounded-md hover:bg-gray-300">Ciências Humanas</a>
           <a href="/paginas/softwaresPortugues" className="block mb-2 px-4 py-2 border border-white bg-gray-200 text-black rounded-md hover:bg-gray-300">Português</a>
            <a href="/paginas/SalasDeAula" className="block mb-2 px-4 py-2 border border-white bg-gray-200 text-black rounded-md hover:bg-gray-300">Salas de Aula</a>
        </div>
    );
}
