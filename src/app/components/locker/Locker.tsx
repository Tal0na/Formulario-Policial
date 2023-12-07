'use client';
import React, { useState } from 'react';

const LockerEvidencia = () => {
  const [lockerSelecionado, setLockerSelecionado] = useState<number | null>(null);
  const [idOcorrencia, setIdOcorrencia] = useState<string>('');

  const handleLockerChange = (locker: number) => {
    setLockerSelecionado(locker);
  };

  const handleIdOcorrenciaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdOcorrencia(e.target.value);
  };

  return (
    <div className="bg-gray-100 p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">Locker de Evidência</h2>
      <div className="mb-2">
        <label className="block text-sm font-semibold mb-1" htmlFor="locker">
          Selecionar Locker:
        </label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="locker"
              value={1}
              checked={lockerSelecionado === 1}
              onChange={() => handleLockerChange(1)}
              className="mr-2"
            />
            <span className="text-sm">Locker 1</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="locker"
              value={2}
              checked={lockerSelecionado === 2}
              onChange={() => handleLockerChange(2)}
              className="mr-2"
            />
            <span className="text-sm">Locker 2</span>
          </label>
        </div>
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1" htmlFor="idOcorrencia">
          ID da Ocorrência:
        </label>
        <input
          className="w-full p-2 border rounded"
          type="text"
          id="idOcorrencia"
          name="idOcorrencia"
          value={idOcorrencia}
          onChange={handleIdOcorrenciaChange}
        />
      </div>
    </div>
  );
};

export default LockerEvidencia;