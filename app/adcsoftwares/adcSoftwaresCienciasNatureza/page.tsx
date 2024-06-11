import { sql } from "@vercel/postgres";

export const revalidate = 0;

export default function NewCienciasNatureza({
    searchParams,
}: {
    searchParams?: {
        url?: string;
    };
}) {
    const urlImage = searchParams?.url || '';

    async function saveCienciasNatureza(formData: FormData) {
        "use server"
        const nome = formData.get("nome") as string;
        const descricao = formData.get("descricao") as string;
        const link = formData.get("link") as string;
        await sql`INSERT INTO softwaresciencia (nome, descricao, link) VALUES(${nome}, ${descricao}, ${link})`;
        console.log("Acessou a função");
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
                        formAction={saveCienciasNatureza}
                        className="px-4 py-2 bg-lime-950 text-white rounded-md"
                    >
                        Salvar
                    </button>
                    <a
                        className="px-4 py-2 bg-lime-950 text-white rounded-md"
                        href="/paginas/softwaresCiencia"
                    >
                        Voltar
                    </a>
                </div>
            </form>
            <p className="mt-4 text-gray-700">
                Não se assuste após clicar em salvar. Os dados serão salvos e enviados para o banco de dados e logo mais aparecerão no site.
            </p>
        </div>
    );
}
