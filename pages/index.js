import { useState } from 'react';

function Home(){

    return(
        <div>
            <h1>Conquistas e inspirações do Ígor</h1>
            <h2>Conquistas e inspirações do Ígor</h2>
            <Contador />
        </div>
    )
    
}


function Contador(){
    const [contador,setContador]= useState(1);

    function adicionarContador(){
        setContador(contador + 1);
    }
    return (
        <div> 
            <div>{contador}</div>
            <buttom onClick={adicionarContador}>Adicionar</buttom>
        </div>

    )

}

export default Home