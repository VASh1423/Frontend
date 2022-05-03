import { Home } from "./pages/home/Home";
import './app.scss'
import Watch from "./pages/watch/Watch";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

const App = () => {
  const user = true
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={user ? <Home /> : <Navigate to="/register" replace />} />
      <Route path="/register" element={!user ? <Register /> : <Navigate to="/" replace/>} />
      <Route path="/login" element={!user ? <Login /> : <Navigate to="/" replace/>} />
      <Route path="/movies" element={user ? <Home type={'movies'} /> : <Navigate to="/register" replace/>} />
      <Route path="/series" element={user ? <Home type={'series'} /> : <Navigate to="/register" replace/>} />
      <Route path="/watch" element={user ? <Watch /> : <Navigate to="/register" replace/>} />
    </Routes>
  </BrowserRouter>
)
};

export default App;