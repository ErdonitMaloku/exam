import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ".././App.css";

const NewVote = () => {
    const navigate = useNavigate();

    const [vote, setVote] = useState({
        question: "",
        optionOne: "",
        optionTwo: "",
        optionThree: "",
        optionFour: "",
    });
    const [errors, setErrors] = useState(null);

    const createVote = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:8000/api/votes/create", vote)
            .then((res) => {
                setErrors(null);
                navigate("/");
            })
            .catch((err) => {    
                setErrors(err.response?.data?.errors);
            });
    };
    const changeVote = (e) => {
        setVote({ ...vote, [e.target.name]: e.target.value });
    };
    return (
        <div>
            <Link to="/" className="link-button">Back to Home</Link>
            <form onSubmit={createVote}>
                <div className="d-flex j-content-speace-between">
                    <div>
                        <p>Your Question:* </p>
                        <textarea className="form-control" name="question" onChange={changeVote} value={vote.question} id="" cols={50} rows={10}></textarea>
                        {
                            errors?.question ? <span style={{ color: "red" }}>{errors.question?.message}</span> : null
                        }
                    </div>
                    <div>
                        <div>
                            <p>Option 1:* </p>
                            <input className="form-control" type="text" name="optionOne" value={vote.optionOne} onChange={changeVote} />
                            {
                                errors?.optionOne ? <span style={{ color: "red" }}>{errors.optionOne?.message}</span> : null
                            }
                        </div>
                        <div>
                            <p>Option 2:* </p>
                            <input className="form-control" type="text" name="optionTwo" value={vote.optionTwo} onChange={changeVote} />
                            {
                                errors?.optionTwo ? <span style={{ color: "red" }}>{errors.optionTwo?.message}</span> : null
                            }
                        </div>
                        <div>
                            <p>Option 3: </p>
                            <input className="form-control" type="text" name="optionThree" value={vote.optionThree} onChange={changeVote} />
                        </div>
                        <div>
                            <p>Option 4: </p>
                            <input className="form-control" type="text" name="optionFour" value={vote.optionFour} onChange={changeVote} />
                        </div>
                    </div>
                </div>
                <input className="Btn-Form" type="submit" value="Submit Poll" />
            </form>
        </div>
    );
};

export default NewVote;