import { useState, useEffect } from 'react'
import '../App.css'
function Visor() {
    const [Numeros,SetNum]=useState("0");
    const [resultado, setResultado] = useState(null);
    const [operador, setOperador] = useState(null);
    const [tamanhoFonte, setTamanhoFonte] = useState(40);;
    
    useEffect(() => {
        const tamanhoBase = 40;
        const tamanhoMinimo = 20;
        const comprimento = Numeros.length;

        const novoTamanho = Math.max(tamanhoMinimo, tamanhoBase - (comprimento - 6) * 2);
        setTamanhoFonte(novoTamanho);
        },    [Numeros]);
    
    function inputNum(value){

        const input = value.target.value
        if (Numeros == "0"){
            SetNum(input)
        }else{
            SetNum(Numeros + input)
        }
        
    }
    
      function zerar() {
        SetNum("0");
        setResultado(null);
        setOperador(null);
    }

    function divi100(){
        SetNum(Numeros / 100)
    }
    
    function apagar(){
        if (Numeros.length > 1) {
            SetNum(Numeros.slice(0, -1));
        }else {
            SetNum("0");
        }   
    }

    function operacao(op) {
        setResultado(Numeros);
        setOperador(op);
        SetNum("0");
    }

    function calcular() {
        const num1 = parseFloat(resultado);
        const num2 = parseFloat(Numeros);
        let total = 0;

        switch (operador) {
            case '+': total = num1 + num2; break;
            case '-': total = num1 - num2; break;
            case 'x': total = num1 * num2; break;
            case '÷': total = num2 !== 0 ? num1 / num2 : "Erro"; break;
            default: return;
        }

        SetNum(total.toString());
        setResultado(null);
        setOperador(null);
    }

    function ponto() {
        if (!Numeros.includes(".")) {
            SetNum(Numeros + ".");
        }
    }

    function inverterSinal() {
        ((parseFloat(Numeros) * -1).toString());
    }

    function aoQuadrado() {
        SetNum((parseFloat(Numeros) ** 2).toString());
    }

    function inverso() {
        if (Numeros === "0" || Numeros === "0.") {
            SetNum("Erro");
        }else {
            SetNum((1 / parseFloat(Numeros)).toString());
        }
    }

    function raiz() {
        SetNum(Math.sqrt(parseFloat(Numeros)).toString());
    }

    return (
        <div className='fundo'>
            <div className='central'>
                <div className='Visor' style={{fontSize: `${tamanhoFonte}px`}}>{Numeros}</div>
                <div className='FundoBotoes'>
                    <div><button type='submit' onClick={divi100}>%</button></div>
                        <div><button type='submit' onClick={zerar}>C</button></div>
                        <div><button type='submit' onClick={apagar}>←</button></div>
                        <div><button type='submit' onClick={() => operacao('÷')}>÷</button></div>

                        <div><button type='submit' onClick={inverso}>1/x</button></div>
                        <div><button type='submit' onClick={aoQuadrado}>x²</button></div>
                        <div><button type='submit' onClick={raiz}>√</button></div>
                        <div><button type='submit' onClick={() => operacao('x')}>x</button></div>

                        <div><button type='submit' onClick={inputNum} value="7">7</button></div>
                        <div><button type='submit' onClick={inputNum} value="8">8</button></div>
                        <div><button type='submit' onClick={inputNum} value="9">9</button></div>
                        <div><button type='submit' onClick={() => operacao('-')}>-</button></div>

                        <div><button type='submit' onClick={inputNum} value="4">4</button></div>
                        <div><button type='submit' onClick={inputNum} value="5">5</button></div>
                        <div><button type='submit' onClick={inputNum} value="6">6</button></div>
                        <div><button type='submit' onClick={() => operacao('+')}>+</button></div>

                        <div><button type='submit' onClick={inputNum} value="1">1</button></div>
                        <div><button type='submit' onClick={inputNum} value="2">2</button></div>
                        <div><button type='submit' onClick={inputNum} value="3">3</button></div>
                        <div><button id='igual' type='submit' onClick={calcular}>=</button></div>

                        <div><button type='submit' onClick={inverterSinal}>+/-</button></div>
                        <div><button type='submit' onClick={inputNum} value="0">0</button></div>
                        <div><button type='submit' onClick={ponto}>,</button></div>
                    
                </div>
            </div>
        </div>
        
)}

export default Visor