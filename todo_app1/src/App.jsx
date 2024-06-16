import {BrowserRouter,Routes,Route} from "react-router-dom"
import TodoPage from "./pages/TodoPage"
import AddTodopage from "./pages/AddTodopage"
import EditTodoPage from "./pages/EditTodoPage"
import './style.css'
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<TodoPage/>}/>
      <Route path="/add/:id" element={<AddTodopage/>}/>
      <Route path="/edit/:id" element={<EditTodoPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
