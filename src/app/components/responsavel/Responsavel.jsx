"use client";
import React, { useState } from 'react';

const Responsavel = () => {
  return (
    <div className="bg-gray-100 p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">Oficial Responsável</h2>
      <div className="mb-2">
        <label className="block text-sm font-semibold mb-1" htmlFor="responsavel-nome">
          Nome do Oficial:
        </label>
        <input
          className="w-full p-2 border rounded"
          type="text"
          id="responsavel-nome"
          name="responsavel-nome"
        />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1" htmlFor="responsavel-badge">
          Badge:
        </label>
        <input
          className="w-full p-2 border rounded"
          type="text"
          id="responsavel-badge"
          name="responsavel-badge"
          pattern="[0-9]*"
          maxLength="3"
        />
      </div>
    </div>
  );
};

export default Responsavel;