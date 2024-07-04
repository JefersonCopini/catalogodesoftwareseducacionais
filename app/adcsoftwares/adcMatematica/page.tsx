import { useState } from "react";

export default function NewMatematica() {
    const [showConfirmation, setShowConfirmation] = useState(false);

    function handleSave() {
        setShowConfirmation(true);
        setTimeout(() => setShowConfirmation(false), 3000); // Esconde a mensagem após 3 segundos
    }

    return (
        <div className="p-4 bg-gray-100">
            <h1 className="text-center text-4xl text-[#09090b] mb-4">Cadastrar softwares</h1>
            <form className="space-y-4">
                <div className="border p-4 bg-white rounded-md">
                    <input
                        type="text"
                        name="nome"
                        placeholder="Digite o nome do software"
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div className="border p-4 bg-white rounded-md">
                    <input
                        type="text"
                        name="descricao"
                        placeholder="Descrição do software"
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div className="border p-4 bg-white rounded-md">
                    <input
                        type="text"
                        name="link"
                        placeholder="Insira o link de acesso"
                        className="w-full p-2 border rounded-md"
                    />
                </div>
                <div className="flex justify-between items-center">
                    <button
                        type="button" // Evita o envio padrão do formulário
                        onClick={handleSave}
                        className="px-4 py-2 bg-lime-950 text-white rounded-md hover:bg-lime-800"
                    >
                        Salvar
                    </button>
                    <a
                        href="/paginas/softwaresMatematica"
                        className="px-4 py-2 bg-lime-950 text-white rounded-md hover:bg-lime-800"
                    >
                        Voltar
                    </a>
                </div>
            </form>
            <p className="mt-4 text-gray-700">Ao clicar em salvar, a mensagem de confirmação será exibida após 3 segundos.</p>

            {/* Mensagem de confirmação */}
            {showConfirmation && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-4 rounded-md shadow-md">
                        <p className="text-green-600 text-lg">Dados salvos com sucesso!</p>
                    </div>
                </div>
            )}
        </div>
    );
}
