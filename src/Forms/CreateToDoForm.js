import React, {useEffect, useState} from 'react';

const InitialFormValues = {text: "",done: false}

function CreateToDoForm(props) {

    const [form, setform] = useState(InitialFormValues);

    useEffect(() => {
        
        setform(InitialFormValues);
        
        }, [props.todos]);

    const OnChangeInput = (e) => {
        setform({...form, [e.target.name]: e.target.value});
    }

    const OnKeyDown = (e) => {
        if (e.key === 'Enter') {
            OnSubmit(e);
        }
    }

    const OnSubmit = (e) => {
        e.preventDefault();
        
        if (form.text === "") {
            return false;
        }
        
        props.createTodo([...props.todos, form])
        return false;
    }
    
    return (
        <div>
            <header className="header">
                <h1>todos</h1>
                <form>
                    <input name="text"
                           value={form.text}
                           className="new-todo"
                           placeholder="What needs to be done?"
                           onChange={OnChangeInput}
                           onKeyDown={OnKeyDown}
                           autoFocus/>
                </form>
            </header>
        </div>
    )
}

export default CreateToDoForm;