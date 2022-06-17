
function Footer (props) {

    const AllClick = () => {
        props.setTodos(props.todos)
    };

    const ActiveClick = () => {
        var activeTodos = props.todos.filter(item => {
            return item.done === false;
        });

        props.setTodos(activeTodos)
    };

    const CompletedClick = () => {
        var completedTodos = props.todos.filter(item => {
            return item.done !== true;
        });

        props.setTodos(completedTodos)
    };

    const ClearClick = () => {
        
        var todo = []

        props.setTodos(todo)
    };
    
        return (
            <div>
                <footer className="footer">
                    
                    <span className="todo-count"><strong>{(props.todos.filter((todo) =>
                    { return todo.done !== true }).length)}</strong> items left</span>

                    <ul className="filters">
                        <li>
                            <a onClick={AllClick} href="#/" className="selected">All</a>
                        </li>
                        <li>
                            <a onClick={ActiveClick} href="#/">Active</a>
                        </li>
                        <li>
                            <a onClick={CompletedClick} href="#/">Completed</a>
                        </li>
                    </ul>

                    <button onClick={ClearClick} className="clear-completed">
                        Clear completed
                    </button>
                </footer>
            </div>
        );
}

export default Footer;