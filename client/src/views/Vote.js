import React, {useState, useEffect} from "react";
import axios from "axios";
import {Link, useParams } from "react-router-dom";
import ViewResults from "../components/ViewResults";
import VotingPanel from "../components/VotingPanel";

const Vote = () => {
    const[vote, setVote] = useState({});
    const[voted, setVoted] = useState(false);

    const { id } = useParams();
    
    useEffect(() => {
        axios
        .get(`http://localhost:8000/api/votes/${id}`)
        .then(res => {
            setVote(res.data.vote[0])})
        .catch((err) => console.log(err));
    }, []);

    const castVote = (vote) => {
        console.log("Vote: " + vote)
        axios
        .put(`http://localhost:8000/api/votes/${id}/update`, vote)
        .then((res) => {
            console.log("error response1"+res);
            setVote(res.data.vote);
            setVoted(true);
        })
        .catch((err) => console.log(err.response + "error response"))
    };
    return(
        <div>
            <div>
                <Link to="/" className="link-button">Back to Home</Link>
            </div>
            {voted ? <ViewResults vote={vote} /> : <VotingPanel vote={vote} castVote={castVote} />}
        </div>
    );
};

export default Vote;