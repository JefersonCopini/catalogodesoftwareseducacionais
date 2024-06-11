"use client";
import React, { useState, ChangeEvent, FormEvent } from 'react';

export default function Admin() {
    const [password, setPassword] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    const correctPassword = '123456'; // Defina a senha correta aqui

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (password === correctPassword) {
            setAuthenticated(true);
        } else {
            alert('Senha incorreta!');
        }
    };

    if (!authenticated) {
        return (
            <div className="bg-green-700 p-6 flex items-center justify-center min-h-screen">
                <form onSubmit={handleSubmit} className="bg-white p-6 rounded-md shadow-md">
                    <h2 className="text-center mb-4">Digite a senha para acessar a área administrativa</h2>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="border border-gray-300 p-2 rounded w-full mb-4"
                        placeholder="Senha"
                    />
                    <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full">
                        Acessar
                    </button>
                </form>
            </div>
        );
    }

    return (
        <main className="bg-green-700 p-6">
            <div className="bg-green-700 p-6">
                <h1 className="text-center text-xl bg-stone-600 p-4 rounded-md">Área Administrativa</h1>
                <div className="mt-4">
                   
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
