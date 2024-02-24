import { Routes, Route, Navigate } from "react-router-dom";
import Chat from "./pages/chatpage/chatpage";
import Register from "./pages/register/register";
import Login from "./pages/login/login";
import { AuthContext, AuthContextProvider } from "./context/authContext";
import { useContext } from "react";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <AuthContextProvider>
      <div className="page-container">
        <Routes>
          {/* Protected route for Chat */}
          <Route
            path="/"
            element={ user ? <Chat /> : <Navigate to="/login" />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* Redirect any other route to login */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </AuthContextProvider>
  );
}

export default App;