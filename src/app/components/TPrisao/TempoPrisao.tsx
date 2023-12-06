'use client';
import React, { useState } from 'react';

interface SuspeitoProps {
  id: number;
  nomePreso: string;
  tempoPrisao: string;
}

const Suspeitos: React.FC = () => {
  const [suspeitos, setSuspeitos] = useState<SuspeitoProps[]>([
    { id: 1, nomePreso: '', tempoPrisao: '' },
  ]);

  const handleChange = (id: number, field: string, value: string) => {
    setSuspeitos((prevSuspeitos) =>
      prevSuspeitos.map((suspeito) =>
        suspeito.id === id ? { ...suspeito, [field]: value } : suspeito
      )
    );
  };

  const handleAddSuspeito = () => {
    setSuspeitos((prevSuspeitos) => [
      ...prevSuspeitos,
      { id: prevSuspeitos.length + 1, nomePreso: '', tempoPrisao: '' },
    ]);
  };

  const handleRemoveSuspeito = (id: number) => {
    setSuspeitos((prevSuspeitos) => prevSuspeitos.filter((suspeito) => suspeito.id !== id));
  };

  return (
    <div className="bg-gray-100 p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">Tempo de Prisão</h2>
      {suspeitos.map((suspeito) => (
        <div key={suspeito.id} className="mb-4">
          <div className="mb-2">
            <label className="block text-sm font-semibold mb-1" htmlFor={`preso-nome-${suspeito.id}`}>
              Nome do Preso:
            </label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              id={`preso-nome-${suspeito.id}`}
              name={`preso-nome-${suspeito.id}`}
              value={suspeito.nomePreso}
              onChange={(e) => handleChange(suspeito.id, 'nomePreso', e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold mb-1" htmlFor={`tempo-prisao-${suspeito.id}`}>
              Tempo de Prisão:
            </label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              id={`tempo-prisao-${suspeito.id}`}
              name={`tempo-prisao-${suspeito.id}`}
              value={suspeito.tempoPrisao}
              onChange={(e) => handleChange(suspeito.id, 'tempoPrisao', e.target.value)}
            />
          </div>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={() => handleRemoveSuspeito(suspeito.id)}
          >
            Remover Suspeito
          </button>
        </div>
      ))}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={handleAddSuspeito}
      >
        Adicionar Suspeito
      </button>
    </div>
  );
};

export default Suspeitos;