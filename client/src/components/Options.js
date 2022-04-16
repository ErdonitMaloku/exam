import React from "react";
import ".././App.css";

const OptionTitle = (props) => {
    const { option, optionNumber, handleVote } = props;
    return (
        <div className="option-item">
            <h3>{option}</h3>
            <button className="mt-3" onClick={() => handleVote(optionNumber)}>
                Vote {option}
            </button>
        </div>
    );
};

export default OptionTitle;