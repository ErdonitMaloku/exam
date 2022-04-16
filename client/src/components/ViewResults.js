import React, {useState} from "react";
import ".././App.css";

const StatsPanel = (props) => {
    const { vote } = props;
    const [alert, setAlert] = useState(true)
    const removeAlert = () => setAlert(false)

    return(
        <div className="options-result">
            {
                alert ? 
                <div className="d-flex alert">
                    <h4 id="success">Thanks for voting! Here are the results.. <button className="cancel-btn" onClick={removeAlert}>x</button> </h4>
                </div> : null
            }
            <h1 className="text-center">{vote.question}</h1>
            <div className="options-result">
                <h3 className="text-right">
                <span>{vote.optionOne}</span> <span>{vote.optionOneSupports} votes</span>
                </h3>
                <h3 className="text-right">
                    <span>{vote.optionTwo}</span> <span>{vote.optionTwoSupports} votes</span>
                </h3>
                {
                    vote.optionThree !== ""?  <h3 className="text-right"> <span>{vote.optionThree}</span> <span>{vote.optionThreeSupports} votes</span></h3> : null
                }
                {
                    vote.optionFour !== ""?  <h3 className="text-right"> <span>{vote.optionFour}</span> <span>{vote.optionFourSupports} votes</span></h3> : null
                }
            </div>
        </div>
    );
}

export default StatsPanel;