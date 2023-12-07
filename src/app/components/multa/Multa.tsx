'use client';
import React, { useState } from 'react';
import CurrencyInput from 'react-currency-input-field';

interface MultaProps {
  id: number;
  nomePreso: string;
  valor: string; // Alterado para string para aceitar a formatação em dólar
}

const Multa: React.FC = () => {
  const [multas, setMultas] = useState<MultaProps[]>([
    { id: 1, nomePreso: '', valor: '0' },
  ]);

  const handleChange = (id: number, field: string, value: string | undefined) => {
    setMultas((prevMultas) =>
      prevMultas.map((multa) =>
        multa.id === id ? { ...multa, [field]: value || '0' } : multa
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
            <CurrencyInput
              className="w-full p-2 border rounded"
              id={`multa-valor-${multa.id}`}
              name={`multa-valor-${multa.id}`}
              value={multa.valor}
              onValueChange={(value) =>
                handleChange(multa.id, 'valor', value)
              }
              prefix="$"
              allowDecimals={true}
              decimalsLimit={2}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Multa;