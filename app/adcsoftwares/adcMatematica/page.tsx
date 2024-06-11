"use client"; // Adicione esta linha para indicar que este é um Client Component

import { sql } from "@vercel/postgres";
import { useState } from "react";

export const revalidate = 0;

export default function NewMatematica({ searchParams }: { searchParams?: { url?: string } }) {
  const [message, setMessage] = useState('');
  const urlImage = searchParams?.url || '';

  async function saveMatematica(formData: FormData) {
    const nome = formData.get("nome") as string;
    const descricao = formData.get("descricao") as string;
    const link = formData.get("link") as string;

    if (!nome || !descricao || !link) {
      setMessage('Todos os campos são obrigatórios.');
      return;
    }

    try {
      await sql`INSERT INTO softwaresmatematica (nome, descricao, link) VALUES (${nome}, ${descricao}, ${link})`;
      setMessage('Software adicionado com sucesso ao banco de dados!');
    } catch (error) {
      setMessage('Ocorreu um erro ao adicionar o software.');
      console.error("Erro ao salvar no banco de dados: ", error);
    }
  }

  return (
    <div>
      <h1 className="text-white text-center text-4xl">Cadastrar softwares</h1>
      <form id="matematicaForm">
        <input type="text" name="nome" placeholder="Digite o nome do software" required /><br /><br />
        <input type="text" name="descricao" placeholder="Descricao do software" required /><br /><br />
        <input type="text" name="link" placeholder="Insira o link de acesso" required /><br /><br />

        <button type="button" onClick={async (event) => {
          event.preventDefault();
          const form = document.getElementById('matematicaForm') as HTMLFormElement;
          const formData = new FormData(form);
          await saveMatematica(formData);
        }} className="text-lime-950">Salvar</button>
        <a className="text-lime-950" href="/paginas/softwaresMatematica">Voltar</a>
      </form>
      {message && <p>{message}</p>}
      <p>Não se assuste após clicar, os dados serão salvos e enviados para o banco de dados e logo mais aparecerá no site.</p>
    </div>
  );
}
