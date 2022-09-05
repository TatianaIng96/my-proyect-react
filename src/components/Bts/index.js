import React from 'react'; // para crear u estato se importa useState

//hoots
import useBts from '../../Hooks/useBts';


 const Bts = () => {
    const bts=useBts();

    return(
        <div>
            <h1>HOLA MUNDO</h1>
            <ul>
                {
                    bts.map(item =>(
                        <li key={item.id}>{item.member}-{item.quote}</li>
                    ))
                }
            </ul>
        </div>
    );

};

export default Bts;