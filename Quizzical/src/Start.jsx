import React from "react";

function Start(props) {
    return (
        <div className="start--container">
            <h1 className="start--title">Quizzical!</h1>
            <p className="start--description">
                Click on the button to start this short quiz!
            </p>
            <button className="start--btn" onClick={props.getQuiz}>
                Start Quizz
            </button>
        </div>
    );
}

export default Start;