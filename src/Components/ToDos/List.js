
function List(props) {

    const RemoveHandleClick = (text) => {
        
       var updatedTodos = props.todos.filter(item => {
               return item.text !== text;
           });

        props.setTodos(updatedTodos)
    };

    const  CheckBoxHandleClick = (i) => {
        
        var todos = props.todos;
        //done property' i tersine çevirdik
        todos[i].done = !todos[i].done;
        
        props.setTodos([...todos])
    }
    
    return (
        <div>
            <section className="main">
                <input className="toggle-all" type="checkbox"/>
                <label htmlFor="toggle-all">
                    Mark all as complete
                </label>

                <ul className="todo-list">
                    {
                        props.todos.map((item,i) =>
                            <li key={i} className={item.done === true ? "completed" : ""}>
                                <div className="view">
                                    <input className="toggle" type="checkbox" onClick={() => CheckBoxHandleClick(i)}/>
                                    <label>{item.text}</label>
                                    <button onClick={() => RemoveHandleClick(item.text)} className="destroy"></button>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </section>
        </div>
    );
}

export default List;