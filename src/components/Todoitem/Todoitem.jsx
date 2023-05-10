import React, { useState } from 'react';
import './Todoitem.css'

export default function Todoitem(props) {
    const [editTaskInput, setEditTaskInput] = useState('');
    const [editMode, setEditMode] = useState('false');

    const changeEvent = () => {
        if (editTaskInput!=='') {
            props.editTask(props.task.id, editTaskInput);
            setEditMode('false')
        }
    }

    const changeMode = () => {
        setEditMode('true');
        setEditTaskInput(props.task.value)
    }

    return (
        <li className='task'>
            <input className='checkbox' type="checkbox" />
            {editMode === 'false' &&
                <>
                    <div className='left'>
                       {props.task.value}
                    </div>
                    <div className='right'>
                        <input type="button" value='Edit' onClick={changeMode} />
                        <input type="button" value='Remove' onClick={() => props.removeTask(props.task.id)} />
                    </div>
                </>
            }
            {editMode === 'true' &&
                <>
                    <div className='left'>
                        <input className='task-editInputField' type="text" value={editTaskInput} onChange={(e) => setEditTaskInput(e.target.value)} />
                    </div>
                    <div className='right'>
                        <input type="button" value="Submit" onClick={changeEvent} />
                        <input type="button" value="Cancel" onClick={() => setEditMode('false')} />
                    </div>
                </>
            }
        </li>
    )
}
