import React from "react";
import Button from "../Button";
import './style.scss'

class Form extends React.Component {
    render () {
        return (
            <form className="novaTarefa">
                <div className="inputContainer">
                    <label htmlFor="tarefa"> Add a new study subject</label>
                    <input type="text" name="tarefa" id="tarefa" placeholder="What do you want to study?" />
                </div>
                <div className="inputContainer">
                    <label htmlFor="time">Time</label>
                    <input type="time" step="1" name="time" id="time" min="00:00:00" max="01:30:00" required />
                </div>
                <Button />
            </form>
        )
    }
}

export default Form;