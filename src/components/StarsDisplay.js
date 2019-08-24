import React from 'react';
import Utils from "../math-utils";

const StarsDisplay = (props) => (
    ///Les balises vident représente un fragment vide
    <>
        {Utils.range(1, props.count).map(
            starId => <div key={starId} className="star" />)}
    </>
);

export default StarsDisplay;