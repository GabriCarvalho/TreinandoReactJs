import React, { Component } from "react";
import './estilo.css';
class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textoFrase: ''
    };
    

    this.quebraBiscoito= this.quebraBiscoito.bind(this);

    this.frases = ['A persistência é o caminho do êxito.','As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente',
  'Motivação é a arte de fazer as pessoas fazerem o que você quer que elas façam porque elas o querem fazer.', 'Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.',
'No meio da dificuldade encontra-se a oportunidade.','Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.',
'Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação.','A verdadeira motivação vem de realização, desenvolvimento pessoal, satisfação no trabalho e reconhecimento.',
'Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.','É parte da cura o desejo de ser curado.','Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
'Imagine uma nova história para sua vida e acredite nela.','Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
'O riso é a menor distância entre duas pessoas.', 
'Deixe de lado as preocupações e seja feliz.',
'Realize o óbvio, pense no improvável e conquiste o impossível.',
'Acredite em milagres, mas não dependa deles.',
'A maior barreira para o sucesso é o medo do fracasso.']
  }

  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    state.textoFrase = '"' + this.frases[numeroAleatorio] + '"';
    this.setState(state);

  };

  render(){
    return(
      <div className="Container">
        <img src={require('./assets/biscoito.png')} className="img"/>
        <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito}/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    );
  }
}

export default App;