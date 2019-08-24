import React from 'react';

        // Color Theme
const colors = {
    available: 'lightgray',
    used: 'lightgreen',
    wrong: 'lightcoral',
    candidate: 'deepskyblue',
};

const PlayNumber = (props) => {


    return(<button 
        className="number" 
        style={{backgroundColor: colors[props.state] }}
        >
            {props.number} 
        </button>)
};



export default PlayNumber;