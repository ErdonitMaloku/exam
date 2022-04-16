import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ".././App.css";
import List from "../components/List";


const Dashboard = () => {
    const [topVotes, setTopVotes] = useState([]);
    const [votes, setVotes] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/votes/top3")
            .then((res) => {
                setTopVotes(res.data.votes);
            })
            .catch(err => console.log(err));

        axios
            .get("http://localhost:8000/api/votes")
            .then((res) => {
                setVotes(res.data.votes);
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
            <Link to={"/votes/new"} className="link-button">Create yout own poll</Link>
            <div className="Dashboard">
                <div className="Dashboard-view">
                    <List title={"Top 3 Polls"} votes={topVotes} />
                </div>
                <div className="Dashboard-view">
                    <List title={"Recent Polls"} votes={votes} />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;