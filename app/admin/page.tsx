"use client"
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
      <div className="bg-gray-900 min-h-screen flex items-center justify-center">
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-md shadow-md max-w-md w-full">
          <h2 className="text-center mb-4 text-white">Digite a senha para acessar a área administrativa</h2>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            className="border border-gray-600 p-2 rounded w-full mb-4 bg-gray-700 text-white"
            placeholder="Senha"
          />
          <button type="submit" className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 w-full">
            Acessar
          </button>
        </form>
      </div>
    );
  }

  return (
    <main className="bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-800 p-6 rounded-md">
          <h1 className="text-center text-xl bg-gray-700 p-4 rounded-md text-white">Área Administrativa</h1>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600">
              <a href="/admin/Softwares" className="text-white">Listar Softwares Português</a>
            </button>
            <button className="bg-gray-800 text-gray-300 px-4 py-2 rounded-md hover:bg-gray-700">
              <a href="/admin/softwaresMatematica" className="text-gray-300">Listar Softwares Matemática</a>
            </button>
            <button className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600">
              <a href="/admin/listCienciasNatureza" className="text-white">Listar Softwares Ciências da Natureza</a>
            </button>
            <button className="bg-gray-800 text-gray-300 px-4 py-2 rounded-md hover:bg-gray-700">
              <a href="/admin/listCienciasHumanas" className="text-gray-300">Listar Softwares Humanas</a>
            </button>
            <button className="bg-gray-800 text-gray-300 px-4 py-2 rounded-md hover:bg-gray-700">
              <a href="/admin/listSoftwaresSalasdeAula" className="text-gray-300">Listar Softwares Salas de Aula</a>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
