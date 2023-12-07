import React from 'react';
import Responsavel from './components/responsavel/Responsavel';
import Envolvidos from './components/envolvidos/Envolvidos';
import Tempo from './components/tempo/Tempo';
import Suspeitos from './components/Sus/Suspeitos';
import Apreensoes from './components/Apreensoes';
import Testemunhas from './components/Testemunhas';
import Vitimas from './components/Vitimas';
import Locais from './components/locais/Locais';
import TempoPrisao from './components/TPrisao/TempoPrisao';
import Multa from './components/multa/Multa';
import Locker from './components/locker/Locker';
import Narrativa from './components/Narrativa';

export default function Home() {
  return (
    <div className="container mx-auto p-2">
      <Responsavel />
      <Envolvidos />
      <Tempo />
      <Suspeitos />
      <Apreensoes />
      <Testemunhas />
      <Vitimas />
      <Locais />
      <TempoPrisao />
      <Multa />
      <Locker/>
      <Narrativa />
      
      
      
      

    </div>
  );
}