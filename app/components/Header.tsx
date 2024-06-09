"use client"
import React from 'react';

export default function Header() {
    // Definindo o estado do menu
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    // Função para alternar o estado do menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Renderização do lado do cliente
    if (typeof window !== 'undefined') {
        return (
            <header className="text-center text-white py-8 border-b border-[rgb(77,77,77)] md:flex items-center justify-center">
                <div className="relative">
                  
                    <h4 className="text-center ml-16">Catálogo de Softwares educacionais</h4>
                </div>
            </header>
        );
    }

    // Se estamos no lado do servidor, retornamos null
    return null;
}
