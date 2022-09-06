import React from 'react'; // para crear u estato se importa useState
import fondo from '../images/tany.jpg'
//hoots
import {useBts} from '../Hooks/useBts'
import Bts from './Bts';
import Grid from './Grid'
import Member from './Member'
import kpop from '../kpop';

 const Home = () => {
    const bts=useBts();

    return(
        <>
            <Bts image={`${fondo}`}>
            </Bts>
            <h1>Bangtan Sonyeondan (BTS) </h1>
            <Grid header='Miembros de la banda'>
            {kpop.map(member => (
                    <Member
                        key={member.id}
                        clickable
                        member_id={member.id}
                        name={member.name}
                        character={member.character}
                        imageUrl={`${member.imageUrl}`}
                    />
                
            ))}
            </Grid>
        </>
    );

};

export default Home;