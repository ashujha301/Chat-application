
import{Routes , Route , Navigate} from "react-router-dom";
import Chat from "./pages/chatpage/chatpage";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import { AuthContext, AuthContextProvider } from "./context/authContext";
import { useContext } from "react";

function App() {
  const auth = useContext(AuthContext);
  return (
    <AuthContextProvider>
    <>
      <div className="page-container">
        <Routes>
          <Route path="/" element={<Chat/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login/>} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </>
  </AuthContextProvider>
  )
}

export default App;