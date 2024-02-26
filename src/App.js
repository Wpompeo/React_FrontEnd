import { useState } from 'react';
import Banner from './componentes/Banner/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape';


function App() {

  const times = [
    {
      nome: 'Rio Grande do Sul',
      corPrimaria: '#FFFF00',
      corSecundaria: '#D9F7E9',
    },
    {
      nome: 'Santa Catarina',
      corPrimaria: '#1C1C1C',
      corSecundaria: '#C0C0C0',
    },
    {
      nome: 'Paraná',
      corPrimaria: '#57C278',
      corSecundaria: '#87CEEB',
    },
    {
      nome: 'São Paulo',
      corPrimaria: '#FF6347',
      corSecundaria: '#FDE7E8',
    },
    {
      nome: 'Rio de Janeiro',
      corPrimaria: '#A6D157',
      corSecundaria: '#E0FFFF',
    },
    {
      nome: 'Mato Grosso',
      corPrimaria: '#FFBA05',
      corSecundaria: '#90EE90',
    },
    {
      nome: 'Minas Gerais',
      corPrimaria: '#FF0000',
      corSecundaria: '#DCDCDC',
    },
    {
      nome: 'Goias',
      corPrimaria: '#7B68EE',
      corSecundaria: '#F0E68C',
    },
    {
      nome: 'Bahia',
      corPrimaria: '	#CD853F',
      corSecundaria: '#F0F8FF',
    },
    {
      nome: 'Ceará',
      corPrimaria: '	#6495ED',
      corSecundaria: '	#ADFF2F',
    }
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
   setColaboradores([...colaboradores, colaborador])

  }

  return (
    <div className="App">
      <Banner />
      <Rodape />
      <Formulario Nometimes={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)} />
      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}

    </div>
  );
}

export default App;