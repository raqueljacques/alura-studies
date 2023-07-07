import React from "react";
import './style.scss'

function Lista() {
    const tasks = [{
        task: 'React',
        time: '02:00:00'
    }, {
        task: 'Java',
        time: '01:00:00'
    }, {
        task: 'Typescript',
        time: '03:00:00'
    }
    ]
    return (
        <aside className="listaTarefas">
            <h2>Day study</h2>
            <ul>
                {tasks.map((item, index) => (
                    <li className="item" key={index}>
                        <h3>
                            {item.task}
                        </h3>
                        <span>
                            {item.time}
                        </span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Lista;