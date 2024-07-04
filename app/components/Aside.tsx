export default function Aside() {
    return (
        <div className="w-1/6 block mb-2 px-4 py-2 bg-gray-300 text-black rounded-md hover:bg-gray-400">
           
                   
                    <a href="/admin/Softwares" className="block mb-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Listar Softwares Portugues</a>
                    <a href="/admin/softwaresMatematica" className="block mb-2 px-4 py-2 border border-gray-900 bg-white text-gray-900 rounded-md hover:bg-gray-100">Listar Softwares Matematica</a>
                    <a href="/admin/listSoftwaresSalasdeAula" className="block mb-2 px-4 py-2 border border-gray-900 bg-white text-gray-900 rounded-md hover:bg-gray-100">Listar Softwares Salas de aula</a>
                     <a href="/admin/listCienciasHumanas" className="block mb-2 px-4 py-2 border border-gray-900 bg-white text-gray-900 rounded-md hover:bg-gray-100">Listar Softwares Salas de aula</a>
                    <a href="/admin/listCienciasNatureza" className="block mb-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Listar Softwares Ciencias da Natureza</a>

        </div>
    )
}