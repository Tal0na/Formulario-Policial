"use client"

import React, { useState } from 'react';

interface EnvolvidoProps {
  id: number;
  nome: string;
  badge: string;
}

const Envolvidos: React.FC = () => {
  const [envolvidos, setEnvolvidos] = useState<EnvolvidoProps[]>([{ id: 1, nome: '', badge: '' }]);

  const handleChange = (id: number, field: string, value: string) => {
    setEnvolvidos((prevEnvolvidos) =>
      prevEnvolvidos.map((envolvido) =>
        envolvido.id === id ? { ...envolvido, [field]: value } : envolvido
      )
    );
  };

  const handleAddEnvolvido = () => {
    setEnvolvidos((prevEnvolvidos) => [
      ...prevEnvolvidos,
      { id: prevEnvolvidos.length + 1, nome: '', badge: '' },
    ]);
  };

  const handleRemoveEnvolvido = (id: number) => {
    setEnvolvidos((prevEnvolvidos) => prevEnvolvidos.filter((envolvido) => envolvido.id !== id));
  };

  return (
    <div className="bg-gray-100 p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">Oficiais Envolvidos</h2>
      {envolvidos.map((envolvido) => (
        <div key={envolvido.id} className="mb-2">
          <label className="block text-sm font-semibold mb-1" htmlFor={`envolvido-nome-${envolvido.id}`}>
            Nome do Oficial:
          </label>
          <input
            className="w-full p-2 border rounded"
            type="text"
            id={`envolvido-nome-${envolvido.id}`}
            name={`envolvido-nome-${envolvido.id}`}
            value={envolvido.nome}
            onChange={(e) => handleChange(envolvido.id, 'nome', e.target.value)}
          />
          <label className="block text-sm font-semibold mb-1" htmlFor={`envolvido-badge-${envolvido.id}`}>
            Badge:
          </label>
          <input
            className="w-full p-2 border rounded"
            type="number"
            id={`envolvido-badge-${envolvido.id}`}
            name={`envolvido-badge-${envolvido.id}`}
            min="0"
            value={envolvido.badge}
            onChange={(e) => handleChange(envolvido.id, 'badge', e.target.value)}
          />
          <button
            className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => handleRemoveEnvolvido(envolvido.id)}
          >
            Remover Envolvido
          </button>
        </div>
      ))}
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleAddEnvolvido}
      >
        Adicionar Envolvido
      </button>
    </div>
  );
};

export default Envolvidos;