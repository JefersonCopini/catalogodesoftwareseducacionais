import { sql } from "@vercel/postgres";
import { useState } from "react";

export const revalidate = 0;

export default function NewMatematica({
    searchParams,
}: {
    searchParams?: {
        url?: string;
    };
}) {
    const urlImage = searchParams?.url || '';
    const [mensagem, setMensagem] = useState<string | null>(null);

    async function saveMatematica(formData: FormData) {
        const nome = formData.get("nome") as string;
        const descricao = formData.get("descricao") as string;
        const link = formData.get("link") as string;

        try {
            await sql`INSERT INTO softwaresmatematica (nome, descricao, link) VALUES (${nome}, ${descricao}, ${link})`;

            // Atualizar a mensagem de sucesso
            setMensagem("Software adicionado com sucesso!");
            console.log("Acessou a função");
        } catch (error) {
            console.error("Erro ao salvar no banco de dados:", error);
            setMensagem("Ocorreu um erro ao salvar o software.");
        }
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
                        type="button"
                        onClick={() => {
                            const formData = new FormData(document.querySelector('form') as HTMLFormElement);
                            saveMatematica(formData);
                        }}
                        className="px-4 py-2 bg-lime-950 text-white rounded-md"
                    >
                        Salvar
                    </button>
                    <a
                        className="px-4 py-2 bg-lime-950 text-white rounded-md"
                        href="/paginas/softwaresMatematica"
                    >
                        Voltar
                    </a>
                </div>
            </form>
            {mensagem && <p className="mt-4 text-gray-700">{mensagem}</p>}
        </div>
    );
}
