export default function Admin() {
    return (
        <main className="bg-green-700 p-6">
            <div className="bg-green-700 p-6">
                <h1 className="text-center text-xl bg-stone-600 p-4 rounded-md">Área Administrativa</h1>
                <div className="mt-4">
                    <a href="/admin/Car" className="block mb-2 px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400">Listar Carros</a>
                    <a href="/admin/Car/new" className="block mb-2 px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400">Cadastrar Carros</a>
                    <button className="block mb-2 w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                        <a href="/admin/Softwares" className="text-white">Listar Softwares Portugues</a>
                    </button>
                    <button className="block mb-2 w-full px-4 py-2 border border-gray-900 bg-white text-gray-900 rounded-md hover:bg-gray-100">
                        <a href="/admin/softwaresMatematica" className="text-gray-900">Listar Softwares Matematica</a>
                    </button>
                    <button className="block mb-2 w-full px-4 py-2 border border-gray-900 bg-white text-gray-900 rounded-md hover:bg-gray-100">
                        <a href="/admin/listSoftwaresSalasdeAula" className="text-gray-900">Listar Softwares Salas de aula</a>
                    </button>
                    <button className="block mb-2 w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                        <a href="/admin/listCienciasNatureza" className="text-white">Listar Softwares Ciencias da Natureza</a>
                    </button>
                </div>
            </div>
        </main>
    );
}
