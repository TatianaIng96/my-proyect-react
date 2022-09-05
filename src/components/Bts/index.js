import React from 'react';
import PropTypes from 'prop-types';
//styles
import { Wrapper, Content, Text } from './bts.styles';

const Bts= ({image,title,text}) => (
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>BTS</h1>
                <p> {text}</p>
            </Text>
        </Content>
    </Wrapper>

);
 Bts.propTypes = {   
    image:PropTypes.string,
    title:PropTypes.string,
    Text:PropTypes.string
 };
export default Bts;