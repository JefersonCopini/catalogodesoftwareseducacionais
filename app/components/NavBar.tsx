"use client"
import BackButton from './BackButton';
import { useState } from 'react';

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="bg-gray-800">
            <div className="flex justify-between items-center p-4 md:p-8">
                <BackButton />
                <button
                    className="md:hidden block text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    {isOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    )}
                </button>
                <div className="hidden md:flex flex-wrap justify-center md:justify-start">
                    <a href="/" className="block mb-2 mx-2 md:mx-4 px-4 py-2 border border-white bg-gray-200 text-black rounded-md hover:bg-gray-300">Página Principal</a>
                    <a href="/paginas/softwaresMatematica" className="block mb-2 mx-2 md:mx-4 px-4 py-2 border border-white bg-gray-200 text-black rounded-md hover:bg-gray-300">Matemática</a>
                    <a href="/paginas/softwaresCiencia" className="block mb-2 mx-2 md:mx-4 px-4 py-2 border border-white bg-gray-200 text-black rounded-md hover:bg-gray-300">Ciências da Natureza</a>
                    <a href="/paginas/softwaresCienciasHumanas" className="block mb-2 mx-2 md:mx-4 px-4 py-2 border border-white bg-gray-200 text-black rounded-md hover:bg-gray-300">Ciências Humanas</a>
                    <a href="/paginas/softwaresPortugues" className="block mb-2 mx-2 md:mx-4 px-4 py-2 border border-white bg-gray-200 text-black rounded-md hover:bg-gray-300">Português</a>
                    <a href="/paginas/SalasDeAula" className="block mb-2 mx-2 md:mx-4 px-4 py-2 border border-white bg-gray-200 text-black rounded-md hover:bg-gray-300">Salas de Aula</a>
                </div>
            </div>
            {/* Menu lateral para dispositivos menores */}
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
                <a href="/" className="block mb-2 px-4 py-2 border border-white bg-gray-200 text-black rounded-md hover:bg-gray-300">Página Principal</a>
                <a href="/paginas/softwaresMatematica" className="block mb-2 px-4 py-2 border border-white bg-gray-200 text-black rounded-md hover:bg-gray-300">Matemática</a>
                <a href="/paginas/softwaresCiencia" className="block mb-2 px-4 py-2 border border-white bg-gray-200 text-black rounded-md hover:bg-gray-300">Ciências da Natureza</a>
                <a href="/paginas/softwaresCienciasHumanas" className="block mb-2 px-4 py-2 border border-white bg-gray-200 text-black rounded-md hover:bg-gray-300">Ciências Humanas</a>
                <a href="/paginas/softwaresPortugues" className="block mb-2 px-4 py-2 border border-white bg-gray-200 text-black rounded-md hover:bg-gray-300">Português</a>
                <a href="/paginas/SalasDeAula" className="block mb-2 px-4 py-2 border border-white bg-gray-200 text-black rounded-md hover:bg-gray-300">Salas de Aula</a>
            </div>
        </div>
    );
}
