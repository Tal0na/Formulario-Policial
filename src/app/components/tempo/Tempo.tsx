'use client';
import React, { useState } from 'react';

const Tempo = () => {
  const [data, setData] = useState<string>('');
  const [hora, setHora] = useState<string>('');

  const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
    // Aqui você pode realizar qualquer processamento adicional necessário
  };

  const handleHoraChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHora(e.target.value);
    // Aqui você pode realizar qualquer processamento adicional necessário
  };

  return (
    <div className="bg-gray-100 p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">Data e Hora</h2>
      <div className="mb-2">
        <label className="block text-sm font-semibold mb-1" htmlFor="data">
          Data:
        </label>
        <input
          className="w-full p-2 border rounded"
          type="date"
          id="data"
          name="data"
          value={data}
          onChange={handleDataChange}
        />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1" htmlFor="hora">
          Hora:
        </label>
        <input
          className="w-full p-2 border rounded"
          type="time"
          id="hora"
          name="hora"
          value={hora}
          onChange={handleHoraChange}
        />
      </div>
    </div>
  );
};

export default Tempo;