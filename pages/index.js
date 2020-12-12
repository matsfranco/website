import { useState } from 'react';

function Home() {
    return (
        <div>
            <h1>Página Inicial</h1>
            <Contador />
        </div>
    )
        
}

function Contador() {
    const [contador,setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }

    return(
        <div>
            <div>Contador: {contador}</div>
            <button onClick={adicionarContador}>Adicionar Contador</button>
        </div>
    )
}

export default Home