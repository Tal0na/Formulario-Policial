'use client';

import React, { useState } from 'react';

const Testemunhas = () => {
  const [testemunhas, setTestemunhas] = useState([{ id: 1, nome: '', csn: '', celular: '' }]);

  const handleChange = (id, field, value) => {
    setTestemunhas((prevTestemunhas) =>
      prevTestemunhas.map((testemunha) =>
        testemunha.id === id ? { ...testemunha, [field]: value } : testemunha
      )
    );
  };

  const handleAddTestemunha = () => {
    setTestemunhas((prevTestemunhas) => [
      ...prevTestemunhas,
      { id: prevTestemunhas.length + 1, nome: '', csn: '', celular: '' },
    ]);
  };

  const handleRemoveTestemunha = (id) => {
    setTestemunhas((prevTestemunhas) => prevTestemunhas.filter((testemunha) => testemunha.id !== id));
  };

  return (
    <div className="my-4">
      <div className="bg-gray-100 p-4 rounded shadow-md">
        <h2 className="text-xl font-bold mb-2">Testemunhas</h2>
        {testemunhas.map((testemunha) => (
          <div key={testemunha.id} className="mb-2">
            <label className="block text-sm font-semibold mb-1" htmlFor={`testemunha-nome-${testemunha.id}`}>
              Nome da Testemunha:
            </label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              id={`testemunha-nome-${testemunha.id}`}
              name={`testemunha-nome-${testemunha.id}`}
              value={testemunha.nome}
              onChange={(e) => handleChange(testemunha.id, 'nome', e.target.value)}
            />
            <label className="block text-sm font-semibold mb-1" htmlFor={`testemunha-csn-${testemunha.id}`}>
              CSN da Testemunha:
            </label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              id={`testemunha-csn-${testemunha.id}`}
              name={`testemunha-csn-${testemunha.id}`}
              value={testemunha.csn}
              onChange={(e) => handleChange(testemunha.id, 'csn', e.target.value)}
            />
            <label className="block text-sm font-semibold mb-1" htmlFor={`testemunha-celular-${testemunha.id}`}>
              Celular da Testemunha:
            </label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              id={`testemunha-celular-${testemunha.id}`}
              name={`testemunha-celular-${testemunha.id}`}
              value={testemunha.celular}
              onChange={(e) => handleChange(testemunha.id, 'celular', e.target.value)}
            />
            <button
              className="mt-2 bg-red-500 text-white px-4 py-2 rounded"
              onClick={() => handleRemoveTestemunha(testemunha.id)}
            >
              Remover Testemunha
            </button>
          </div>
        ))}
        <button
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAddTestemunha}
        >
          Adicionar Testemunha
        </button>
      </div>
    </div>
  );
};

export default Testemunhas;
