import{Routes , Route , Navigate} from "react-router-dom";
import Chat from "./pages/chatpage/chatpage";
import Register from "./pages/register/register";
import Login from "./pages/login/login";

function App() {
  return (
    <>
    <div className="page-container">
    <Routes>
      <Route path="/" element={<Chat />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
    </div>
    
    </>
  )
}

export default App;