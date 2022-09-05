import React from 'react'; // para crear u estato se importa useState
import fondo from '../images/tany.jpg'
//hoots
import {useBts} from '../Hooks/useBts'
import Bts from './Bts';

 const Home = () => {
    const bts=useBts();

    return(
        <>
            <Bts image={`${fondo}`}>
            </Bts>
            <h1>HOLA MUNDO</h1>
            <ul>
                {
                    bts.map(item =>(
                        <li key={item.id}>{item.member}-{item.quote}</li>
                    ))
                }
            </ul>
        </>
    );

};

export default Home;