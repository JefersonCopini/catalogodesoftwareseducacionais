// serverActions.ts
"use server";

import { sql } from "@vercel/postgres";

export async function savePortugues(nome: string, descricao: string, link: string) {
    try {
        await sql`INSERT INTO softwaresportugues (nome, descricao, link) VALUES (${nome}, ${descricao}, ${link})`;
        return "Software cadastrado com sucesso!";
    } catch (error) {
        console.error("Erro ao cadastrar o software:", error);
        throw new Error("Erro ao cadastrar o software.");
    }
}
