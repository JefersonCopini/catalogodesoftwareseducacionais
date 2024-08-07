
'use client';

import { useRouter } from 'next/navigation';

const BackButton = () => {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-900"
        >
            Voltar
        </button>
    );
};

export default BackButton;
