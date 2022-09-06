import React from 'react';
import PropTypes from 'prop-types';
import kpop from '../../kpop';
import {Link} from 'react-router-dom';

import { Wraper,Image } from './member.styles';

const Member = ({member_id,name,character,imageUrl,clickable}) => (
    <Wraper>
       { clickable ? (
            <Link to={`/${member_id}`}>
            <Image src={imageUrl} alt='member-thumb'/>
            </Link>
         ):(
        <Image src={imageUrl} alt='member-thumb'/>
        )}
        <h3>{name}</h3>
        <p>{character}</p>
    </Wraper>


    

);

Member.propTypes={
    name:PropTypes.string,
    character:PropTypes.string,
    imageUrl: PropTypes.string
};

export default Member;