import React, { useState } from "react";
import Utils from "../math-utils";
import PlayNumer from "./PlayNumber";
import StarsDisplay from "./StarsDisplay";



const StarMatch = () => {
    const [stars, setStars] = useState(Utils.random(1, 9));
    const [availableNumbers, setavailableNumbers] = useState(Utils.range(1, 9));
    const [candidate, setcandidate] = useState([]);

    const isLimitCandidate = Utils.sum(candidate) > stars;

    const PlayNumberStatus = (number) => {
        if (!availableNumbers.includes(number)) {
            return 'used';
        }

        if (candidate.includes(number)) {
            return isLimitCandidate ? 'wrong' : 'candidate';
        }

        return 'available';
    }

    const onClickPlayNumber = () => {




    };


    return (
        <div className="game">
            <div className="help">
                Pick 1 or more numbers that sum to the number of stars
            </div>
            <div className="body">
                <div className="left">
                    <StarsDisplay
                        count={stars}
                    />
                </div>
                <div className="right">
                    {Utils.range(1, 9).map(
                        nb => (
                            <PlayNumer
                                key={nb}
                                number={nb}
                                state={PlayNumberStatus(nb)}
                                onclick={onClickPlayNumber}
                            />))}
                </div>
            </div>
            <div className="timer">Time Remaining: 10</div>
        </div>
    );
};

export default StarMatch;