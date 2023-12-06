'use client';
import React, { useState } from 'react';

interface MultaProps {
  id: number;
  nomePreso: string;
  valor: number;
}

const Multa: React.FC = () => {
  const [multas, setMultas] = useState<MultaProps[]>([
    { id: 1, nomePreso: '', valor: 0 },
  ]);

  const handleChange = (id: number, field: string, value: string | number) => {
    setMultas((prevMultas) =>
      prevMultas.map((multa) =>
        multa.id === id ? { ...multa, [field]: value } : multa
      )
    );
  };

  return (
    <div className="bg-gray-100 p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-bold mb-2">Multas</h2>
      {multas.map((multa) => (
        <div key={multa.id} className="mb-4">
          <div className="mb-2">
            <label
              className="block text-sm font-semibold mb-1"
              htmlFor={`multa-nomePreso-${multa.id}`}
            >
              Nome do Preso:
            </label>
            <input
              className="w-full p-2 border rounded"
              type="text"
              id={`multa-nomePreso-${multa.id}`}
              name={`multa-nomePreso-${multa.id}`}
              value={multa.nomePreso}
              onChange={(e) =>
                handleChange(multa.id, 'nomePreso', e.target.value)
              }
            />
          </div>
          <div className="mb-2">
            <label
              className="block text-sm font-semibold mb-1"
              htmlFor={`multa-valor-${multa.id}`}
            >
              Valor (em dólares):
            </label>
            <input
              className="w-full p-2 border rounded"
              type="number"
              id={`multa-valor-${multa.id}`}
              name={`multa-valor-${multa.id}`}
              value={multa.valor}
              onChange={(e) =>
                handleChange(multa.id, 'valor', parseInt(e.target.value, 10))
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Multa;