"use client";

import React, { useState } from 'react';

const Vitimas = () => {
  const [vitimas, setVitimas] = useState([{ id: 1, nome: '', csn: '', celular: '' }]);

  const handleChange = (id, field, value) => {
    setVitimas((prevVitimas) =>
      prevVitimas.map((vitima) =>
        vitima.id === id ? { ...vitima, [field]: value } : vitima
      )
    );
  };

  const handleAddVitima = () => {
    setVitimas((prevVitimas) => [
      ...prevVitimas,
      { id: prevVitimas.length + 1, nome: '', csn: '', celular: '' },
    ]);
  };

  const handleRemoveVitima = (id) => {
    setVitimas((prevVitimas) => prevVitimas.filter((vitima) => vitima.id !== id));
  };

  return (
    <div className="my-4">
      <div className="bg-gray-100 p-4 rounded shadow-md">
        <h2 className="text-xl font-bold mb-2">Vítimas</h2>
        {vitimas.map((vitima) => (
          <div key={vitima.id} className="mb-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor={`vitima-nome-${vitima.id}`}>
                  Nome da Vítima:
                </label>
                <input
                  className="w-full p-2 border rounded"
                  type="text"
                  id={`vitima-nome-${vitima.id}`}
                  name={`vitima-nome-${vitima.id}`}
                  value={vitima.nome}
                  onChange={(e) => handleChange(vitima.id, 'nome', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor={`vitima-csn-${vitima.id}`}>
                  CSN da Vítima:
                </label>
                <input
                  className="w-full p-2 border rounded"
                  type="text"
                  id={`vitima-csn-${vitima.id}`}
                  name={`vitima-csn-${vitima.id}`}
                  value={vitima.csn}
                  onChange={(e) => handleChange(vitima.id, 'csn', e.target.value)}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-semibold mb-1" htmlFor={`vitima-celular-${vitima.id}`}>
                  Celular da Vítima:
                </label>
                <input
                  className="w-full p-2 border rounded"
                  type="text"
                  id={`vitima-celular-${vitima.id}`}
                  name={`vitima-celular-${vitima.id}`}
                  value={vitima.celular}
                  onChange={(e) => handleChange(vitima.id, 'celular', e.target.value)}
                />
              </div>
              <div className="flex items-end">
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleRemoveVitima(vitima.id)}
                >
                  Remover Vítima
                </button>
              </div>
            </div>
          </div>
        ))}
        <button
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAddVitima}
        >
          Adicionar Vítima
        </button>
      </div>
    </div>
  );
};

export default Vitimas;