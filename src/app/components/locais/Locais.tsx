'use client';

import React, { useState } from 'react';

interface LocalProps {
  id: number;
  nome: string;
  inicio: string;
  fim: string;
}

const Locais: React.FC = () => {
  const [locais, setLocais] = useState<LocalProps[]>([
    { id: 1, nome: '', inicio: '', fim: '' },
  ]);

  const handleChange = (id: number, field: string, value: string) => {
    setLocais((prevLocais) =>
      prevLocais.map((local) =>
        local.id === id ? { ...local, [field]: value } : local
      )
    );
  };

  return (
    <div className="bg-gray-100 p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">Locais</h2>
      {locais.map((local) => (
        <div key={local.id} className="mb-4">
          <div className="mb-2">
            <label className="block text-sm font-semibold mb-1" htmlFor={`local-nome-${local.id}`}>
              Nome do Local:
            </label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              id={`local-nome-${local.id}`}
              name={`local-nome-${local.id}`}
              value={local.nome}
              onChange={(e) => handleChange(local.id, 'nome', e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold mb-1" htmlFor={`local-inicio-${local.id}`}>
              Início (Data e Hora):
            </label>
            <input
              className="w-full p-2 border rounded"
              type="datetime-local"
              id={`local-inicio-${local.id}`}
              name={`local-inicio-${local.id}`}
              value={local.inicio}
              onChange={(e) => handleChange(local.id, 'inicio', e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold mb-1" htmlFor={`local-fim-${local.id}`}>
              Fim (Data e Hora):
            </label>
            <input
              className="w-full p-2 border rounded"
              type="datetime-local"
              id={`local-fim-${local.id}`}
              name={`local-fim-${local.id}`}
              value={local.fim}
              onChange={(e) => handleChange(local.id, 'fim', e.target.value)}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Locais;