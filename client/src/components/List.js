import React from "react";
import { Link } from "react-router-dom";
import ".././App.css";
import moment from 'moment'

const List = (props) => {

    const { title, votes } = props;

    return (
        <div>
            <h3>{title}</h3>
            <div>
                {votes.map((vote, i) => (
                    <div className="vote">
                        <h3>
                            <Link to={`/votes/${vote._id}`}>{vote.question}</Link>
                        </h3>
                        <div className="d-inline">
                            <p>{vote.optionOne}: {vote.optionOneSupports}</p>
                            <p>{vote.optionTwo}: {vote.optionTwoSupports}</p>
                            {
                                vote.optionThree !== "" ?
                                    <p>{vote.optionThree}: {vote.optionThreeSupports}</p> : null
                            }
                            {
                                vote.optionFour !== "" ?
                                    <p>{vote.optionFour}: {vote.optionFourSupports}</p> : null
                            }
                        </div>
                        <p id="italic"> {moment(vote.createdAt, "YYYYMMDD").fromNow()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default List;