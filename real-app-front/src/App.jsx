import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/about";
import Footer from "./components/footer";
import Home from "./components/home";
import Navbar from "./components/navbar";
import SignUp from "./components/signup";
import SignIn from "./components/signin";
// import { useState } from "react";
// import usersService from "./services/usersService";
import SignOut from "./components/signout";
import SignUpBiz from "./components/signupBiz";
import MyCards from "./components/mycards";
import ProtectedRoute from "./components/common/protectedRoute";
import CardsCreate from "./components/cardsCreate";
import CardsDelete from "./components/cardsDelete";
import CardsEdit from "./components/cardsEdit";
import React, { useState, useEffect } from "react";
import "./darkMode.css";
import CardsPage from "./components/cardsPage";

function App() {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className="app d-flex flex-column min-vh-100">
      <ToastContainer />
      <header>
        <Navbar />
      </header>
      <main className="flex-fill container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="sign-up" element={<SignUp redirect="/sign-in" />} />
          <Route path="sign-up-biz" element={<SignUpBiz />} />
          <Route path="sign-in" element={<SignIn redirect="/" />} />
          <Route path="sign-out" element={<SignOut redirect="/" />} />
          <Route
            path="my-cards"
            element={
              <ProtectedRoute onlyBiz>
                <MyCards />
              </ProtectedRoute>
            }
          />

          <Route
            path="my-cards/delete/:id"
            element={
              <ProtectedRoute onlyBiz>
                <CardsDelete />
              </ProtectedRoute>
            }
          />
          <Route
            path="my-cards/edit/:id"
            element={
              <ProtectedRoute onlyBiz>
                <CardsEdit />
              </ProtectedRoute>
            }
          />
          <Route
            path="my-cards/cardsPage/:id"
            element={
              <ProtectedRoute onlyBiz>
                <CardsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="create-card"
            element={
              <ProtectedRoute onlyBiz>
                <CardsCreate />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <div className="theme">
        <button onClick={toggleTheme}>
          <img
            src="https://cdn-icons-png.flaticon.com/128/5460/5460815.png"
            alt="logo_theme"
            width="20"
          ></img>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default App;
