import { Routes, Route, Link } from "react-router-dom";

import Home from "../pages/Home";
import ButtonsDemo from "../pages/ButtonsDemo";
import CardsDemo from "../pages/CardsDemo";
import TablesDemo from "../pages/TablesDemo";

import Login from "../pages/Login";
import Signup from "../pages/Signup";
import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/buttons">Buttons</Link>
        <Link to="/cards">Cards</Link>
        <Link to="/tables">Tables</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </nav>

      <Routes>
        {/* 🔒 Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/buttons"
          element={
            <ProtectedRoute>
              <ButtonsDemo />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cards"
          element={
            <ProtectedRoute>
              <CardsDemo />
            </ProtectedRoute>
          }
        />

        <Route
          path="/tables"
          element={
            <ProtectedRoute>
              <TablesDemo />
            </ProtectedRoute>
          }
        />

        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default AppRoutes;