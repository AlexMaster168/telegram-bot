import React from 'react';
import './Button.css';

const Index = props => {
    return (
        <button {...props} className={'button ' + props.className}/>
    );
};

export default Index;
