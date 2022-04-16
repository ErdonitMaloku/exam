import React from "react";
import Options from "./Options";

const VotingPanel = ({ vote, castVote }) => {
    const handleVote = (num) => {
        switch (num) {
            case 1:
                vote.optionOneSupports++;
                break;
            case 2:
                vote.optionTwoSupports++;
                break;
            case 3:
                vote.optionThreeSupports++;
                break;
            case 4:
                vote.optionFourSupports++;
                break;

            default:  
        }
        vote.totalVoteCount++;

        castVote(vote);
    };
    return (
        <div className="p-2">
            <h1 className="text-center">{vote.question}</h1>
            <div className="d-flex bg-light justify-content-between">
                <Options
                    option={vote.optionOne}
                    optionNumber={1}
                    handleVote={handleVote}
                />
                <Options
                    option={vote.optionTwo}
                    optionNumber={2}
                    handleVote={handleVote}
                />
                {
                    vote.optionThree !== "" ? <Options option={vote.optionThree} optionNumber={3} handleVote={handleVote} /> : null
                }
                {
                    vote.optionFour !== "" ? <Options option={vote.optionFour} optionNumber={4} handleVote={handleVote} /> : null
                }
            </div>
        </div>
    );
};

export default VotingPanel;