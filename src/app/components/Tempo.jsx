import React from 'react';

const Tempo = () => {
  return (
    <div className="bg-gray-100 p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">Data e Hora</h2>
      <div className="mb-2">
        <label className="block text-sm font-semibold mb-1" htmlFor="data">Data:</label>
        <input className="w-full p-2 border rounded" type="date" id="data" name="data" />
      </div>
      <div>
        <label className="block text-sm font-semibold mb-1" htmlFor="hora">Hora:</label>
        <input className="w-full p-2 border rounded" type="time" id="hora" name="hora" />
      </div>
    </div>
  );
};

export default Tempo;