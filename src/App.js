import './App.css';
import CreateToDoForm from "./Forms/CreateToDoForm";
import List from "./Components/ToDos/List"
import Footer from "./Components/ToDos/Footer";
import SubFooter from "./Components/ToDos/SubFooter";

import {useState} from "react";

function App() {
    
    const[todos,setTodos] = useState([
        {
            "text": "Taste JavaScript",
            "done": true
        },
        {
            "text": "Code furiously",
            "done": true
        },
        {
            "text": "Promote Mavo",
            "done": false
        },
        {
            "text": "Give talks",
            "done": false
        },
        {
            "text": "Write tutorials",
            "done": true
        },
        {
            "text": "Have a life!",
            "done": false
        }
    ]);
    
    return (
        <div className="App">
            <div>
                <section className="todoapp">
                    <CreateToDoForm todos={todos} createTodo={setTodos}/>
                    <List todos={todos} setTodos={setTodos}/>
                    <Footer todos={todos} setTodos={setTodos}/>
                </section>
                
                <SubFooter/>
                
            </div>
        </div>
    );
}

export default App;
