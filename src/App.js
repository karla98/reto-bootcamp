import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Conditions } from "./pages/Condition";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { CharacterInfo } from "./pages/CharacterInfo";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="home" element={<Home />} />
            <Route path="conditions" element={<Conditions />} />
            <Route path="character/:id" element={<CharacterInfo />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <footer>
          <Footer />
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
