// page.tsx
"use client"; // Marcar este arquivo como um componente do lado do cliente

import { useState } from 'react';
import { savePortugues } from '../serveract/serverActions'; // Ajuste o caminho do import conforme necessário

export default function NewPortugues({ searchParams }: { searchParams?: { url?: string; } }) {
    const [message, setMessage] = useState('');

    const urlImage = searchParams?.url || '';

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const nome = formData.get("nome") as string;
        const descricao = formData.get("descricao") as string;
        const link = formData.get("link") as string;

        try {
            const resultMessage = await savePortugues(nome, descricao, link);
            setMessage(resultMessage);
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <div>
            <h1 className="text-white text-center text-4xl">Cadastrar softwares</h1>
            <form onSubmit={handleSubmit}>
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
