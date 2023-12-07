'use client';

import React, { useState } from 'react';

const Narrativa = () => {
  return (
    <div className="bg-gray-100 p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">Narrativa</h2>
      <div>
        <label className="block text-sm font-semibold mb-1" htmlFor="descricao-ocorrencia">Descrição da Ocorrência:</label>
        <textarea className="w-full p-2 border rounded" id="descricao-ocorrencia" name="descricao-ocorrencia" rows="4" />
      </div>
    </div>
  );
};

export default Narrativa;