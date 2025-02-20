import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
 return (
  <Router>
   <Header />
   <div className="content-block">
    <Routes>
     <Route path="/login" element={<Login />} />
     <Route path="/register" element={<Register />} />

     <Route element={<ProtectedRoute />}>
      <Route path="/home" element={<Home />} />
     </Route>

     <Route path="*" element={<Login />} />
    </Routes>
   </div>
   <Footer />
  </Router>
 );
};

export default App;
