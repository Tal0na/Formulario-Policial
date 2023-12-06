'use client';

import React, { useState } from 'react';

const Apreensoes = () => {
  const [itensApreendidos, setItensApreendidos] = useState(['']);

  const handleChange = (index, value) => {
    setItensApreendidos((prevItens) =>
      prevItens.map((item, i) => (i === index ? value : item))
    );
  };

  const handleAddItem = () => {
    setItensApreendidos((prevItens) => [...prevItens, '']);
  };

  const handleRemoveItem = (index) => {
    setItensApreendidos((prevItens) => prevItens.filter((item, i) => i !== index));
  };

  return (
    <div className="my-4">
      <div className="bg-gray-100 p-4 rounded shadow-md">
        <h2 className="text-xl font-bold mb-2">Apreensões</h2>
        {itensApreendidos.map((item, index) => (
          <div key={index} className="mb-2">
            <label className="block text-sm font-semibold mb-1" htmlFor={`item-apreendido-${index}`}>
              Item Apreendido #{index + 1}:
            </label>
            <div className="flex">
              <input
                className="flex-grow p-2 border rounded"
                type="text"
                id={`item-apreendido-${index}`}
                name={`item-apreendido-${index}`}
                value={item}
                onChange={(e) => handleChange(index, e.target.value)}
              />
              <button
                className="ml-2 bg-red-500 text-white px-4 py-2 rounded"
                onClick={() => handleRemoveItem(index)}
              >
                Remover
              </button>
            </div>
          </div>
        ))}
        <button
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={handleAddItem}
        >
          Adicionar Item
        </button>
      </div>
    </div>
  );
};

export default Apreensoes;
