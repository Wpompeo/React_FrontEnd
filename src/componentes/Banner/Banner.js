import './Banner.css';

function Banner(){
    //JSX ===> como react interpreta o código e coloca no DOM
    return (
        <header className="banner">
             <img src="/imagens/logoBrasileiro.jpg" alt="Banner principal da página Organo" />
        </header>       
    )
}

export default Banner;