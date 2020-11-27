import React, {Component} from 'react'

const BemVindo = () => {
    return (
        <h2> Bem-Vindo(a) </h2>
    );
}

const BemVindoPros = (props) => {
    return (
        <h2> Bem-Vindo(a) {props.nome} </h2>
    );
}

const Equipe = (props) => {
    return (
        <div>
            <Sobre userName={props.nome} cargo={props.cargo} idade={props.idade}/>
        </div>
    );
}

const Sobre = (props) => {
    return (
        <div>
            <h2> Olá sou o(a)  {props.userName} </h2>
        </div>
    )
}


class EquipeTeste extends Component{
    render(){
        return(
            <div>
                <h3> {this.props.nome} </h3>
            </div>
        );
    }
}





function Exemplo(){
    return (
        <div>
            <h1> Olá Mundo </h1>
            <BemVindo/>
            
            <BemVindoPros nome="matheus"/>

            <h1>Conheça a nossa equipe: </h1>
            <Equipe nome="matheus" cargo="dev" idade="24"/>


            <EquipeTeste nome="matheus"/>

        </div>

        
            

    ); 
}

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: "Matheus",
            contador: 0,
            hora: "00:00:00"
        }
        this.aumenter = this.aumenter.bind(this);
        this.diminuir = this.diminuir.bind(this);
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({hora: new Date().toLocaleTimeString()})
        },1000);
    }

    componentDidUpdate(){
        console.log("Autalizou");
    }

    shouldComponentUpdate(){
        //retorna true or false
    }

    aumenter(){
        let state = this.state;
        state.contador += 1;
        this.setState(state)
    }

    diminuir(){
        let state = this.state;
        if(state.contador === 0){
            alert("chegou a zerp");
            return;
        }

        state.contador -= 1;
        this.setState(state)
    }

    render(){
        return(
            <div>
                <h2>{this.state.nome}</h2>
                <h3>Contador</h3>
                <h3>
                <button onClick={this.diminuir}> - </button>
                 {this.state.contador} 
                <button onClick={this.aumenter}> + </button>
                </h3>
                <h3>
                    Horario {this.state.hora}
                </h3>

            </div>
        );
    }
}

export default App