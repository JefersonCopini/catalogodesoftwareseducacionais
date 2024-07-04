"use client"
import { useState } from "react";
import { sql } from "@vercel/postgres";

export const revalidate = 0;

export default function NewMatematica({
    searchParams,
}: {
    searchParams?: {
        url?: string;
    };
}) {
    const urlImage = searchParams?.url || '';
    const [showPopup, setShowPopup] = useState(false);

    async function saveMatematica(formData: FormData) {
        const nome = formData.get("nome") as string;
        const descricao = formData.get("descricao") as string;
        const link = formData.get("link") as string;

        try {
            await sql`INSERT INTO softwaresmatematica (nome, descricao, link) VALUES (${nome}, ${descricao}, ${link})`;
            setShowPopup(true); // Mostra o pop-up após salvar
            setTimeout(() => setShowPopup(false), 3000); // Esconde o pop-up após 3 segundos
        } catch (error) {
            console.error("Erro ao salvar:", error);
        }
    }

    return (
        <div className="p-4 bg-gray-100">
            <h1 className="text-center text-4xl text-gray-900 mb-4">Cadastrar softwares</h1>
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
                        onClick={() => saveMatematica(new FormData())}
                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                    >
                        Salvar
                    </button>
                    <a
                        href="/paginas/softwaresMatematica"
                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                    >
                        Voltar
                    </a>
                </div>
            </form>
            <p className="mt-4 text-gray-700">Ao clicar em salvar, os dados serão salvos e enviados para o banco de dados e logo mais aparecerão no site. Não é necessário fazer reenvio.</p>

            {/* Pop-up de confirmação */}
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-white p-4 rounded-md shadow-md">
                        <p className="text-green-600 text-lg">Dados salvos com sucesso!</p>
                    </div>
                </div>
            )}
        </div>
    );
}
