import React from 'react';
import { useResponsavel } from '../app/components/responsavel/useResponsavel';

const OutraPagina = () => {
  const { nome, badge } = useResponsavel();

  return (
    <div>
      <p>Nome do Oficial: {nome} </p>
      <p>Badge: {badge} </p>
    </div>
  );
};

export default OutraPagina;