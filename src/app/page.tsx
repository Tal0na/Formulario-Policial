import React from 'react';
import Responsavel from './components/Responsavel';
import Envolvidos from './components/envolvidos/Envolvidos';
import Tempo from './components/Tempo';
import Suspeitos from './components/Sus/Suspeitos';
import Apreensoes from './components/Apreensoes';
import Testemunhas from './components/Testemunhas';
import Vitimas from './components/Vitimas';
import Locais from './components/locais/Locais';
import Narrativa from './components/Narrativa';

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <Responsavel />
      <Envolvidos />
      <Tempo />
      <Suspeitos />
      <Apreensoes />
      <Testemunhas />
      <Vitimas />
      <Locais />
      <Narrativa />
    </div>
  );
}