'use client';

import React, { useState } from 'react';

interface SuspeitoProps {
  id: number;
  badge: string;
  nome: string;
  csn: string;
  culpadoInocente: string;
  oficialPrendeu: string;
  crimesEnvolvidos: string;
}

const Suspeitos: React.FC = () => {
  const [suspeitos, setSuspeitos] = useState<SuspeitoProps[]>([
    { id: 1, badge: '', nome: '', csn: '', culpadoInocente: 'culpado', oficialPrendeu: '', crimesEnvolvidos: '' },
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
      { id: prevSuspeitos.length + 1, badge: '', nome: '', csn: '', culpadoInocente: 'culpado', oficialPrendeu: '', crimesEnvolvidos: '' },
    ]);
  };

  const handleRemoveSuspeito = (id: number) => {
    setSuspeitos((prevSuspeitos) => prevSuspeitos.filter((suspeito) => suspeito.id !== id));
  };

  return (
    <div className="bg-gray-100 p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">Suspeitos</h2>
      {suspeitos.map((suspeito) => (
        <div key={suspeito.id} className="mb-4">
          <div className="mb-2">
            <label className="block text-sm font-semibold mb-1" htmlFor={`suspeito-nome-${suspeito.id}`}>
              Nome do Suspeito:
            </label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              id={`suspeito-nome-${suspeito.id}`}
              name={`suspeito-nome-${suspeito.id}`}
              value={suspeito.nome}
              onChange={(e) => handleChange(suspeito.id, 'nome', e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold mb-1" htmlFor={`csn-suspeito-${suspeito.id}`}>
              CSN do Suspeito:
            </label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              id={`csn-suspeito-${suspeito.id}`}
              name={`csn-suspeito-${suspeito.id}`}
              value={suspeito.csn}
              onChange={(e) => handleChange(suspeito.id, 'csn', e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold mb-1" htmlFor={`culpado-inocente-${suspeito.id}`}>
              Culpado ou Inocente:
            </label>
            <select
              className="w-full p-2 border rounded"
              id={`culpado-inocente-${suspeito.id}`}
              name={`culpado-inocente-${suspeito.id}`}
              value={suspeito.culpadoInocente}
              onChange={(e) => handleChange(suspeito.id, 'culpadoInocente', e.target.value)}
            >
              <option value="culpado">Culpado</option>
              <option value="inocente">Inocente</option>
            </select>
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold mb-1" htmlFor={`suspeito-badge-${suspeito.id}`}>
              Badge:
            </label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              id={`suspeito-badge-${suspeito.id}`}
              name={`suspeito-badge-${suspeito.id}`}
              pattern="[0-9]{3}"
              value={suspeito.badge}
              onChange={(e) => handleChange(suspeito.id, 'badge', e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold mb-1" htmlFor={`oficial-prendeu-${suspeito.id}`}>
              Oficial que prendeu:
            </label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              id={`oficial-prendeu-${suspeito.id}`}
              name={`oficial-prendeu-${suspeito.id}`}
              value={suspeito.oficialPrendeu}
              onChange={(e) => handleChange(suspeito.id, 'oficialPrendeu', e.target.value)}
            />
          </div>
          <div className="mb-2">
            <label className="block text-sm font-semibold mb-1" htmlFor={`crimes-envolvidos-${suspeito.id}`}>
              Crimes Envolvidos:
            </label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              id={`crimes-envolvidos-${suspeito.id}`}
              name={`crimes-envolvidos-${suspeito.id}`}
              value={suspeito.crimesEnvolvidos}
              onChange={(e) => handleChange(suspeito.id, 'crimesEnvolvidos', e.target.value)}
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