"use client"; // Marking this file as a Client Component

import { sql } from "@vercel/postgres";
import { useState } from 'react';

export const revalidate = 0;

export default function NewPortugues({ searchParams }: { searchParams?: { url?: string; } }) {
    const [message, setMessage] = useState('');

    const urlImage = searchParams?.url || '';

    async function savePortugues(formData: FormData) {
        "use server"; // This is for server-side code

        const nome = formData.get("nome") as string;
        const descricao = formData.get("descricao") as string;
        const link = formData.get("link") as string;

        try {
            await sql`INSERT INTO softwaresportugues (nome, descricao, link) VALUES (${nome}, ${descricao}, ${link})`;
            setMessage("Software cadastrado com sucesso!");
        } catch (error) {
            console.error("Erro ao cadastrar o software:", error);
            setMessage("Erro ao cadastrar o software.");
        }
    }

    return (
        <div>
            <h1 className="text-white text-center text-4xl">Cadastrar softwares</h1>
            <form onSubmit={async (e) => {
                e.preventDefault();
                const formData = new FormData(e.target as HTMLFormElement);
                await savePortugues(formData);
            }}>
                <input type="text" name="nome" placeholder="Digite o nome do software" required /><br /><br />
                <input type="text" name="descricao" placeholder="Descrição do software" required /><br /><br />
                <input type="text" name="link" placeholder="Insira o link de acesso" required /><br /><br />
                <button type="submit" className="text-lime-950">Salvar</button>
                <a className="text-lime-950" href="/paginas/softwaresPortugues">Voltar</a>
            </form>
            {message && <p className="text-green-500 text-center">{message}</p>}
        </div>
    );
}
