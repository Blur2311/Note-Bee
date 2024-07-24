import { useState } from "react";
import { note_backend } from "declarations/note_backend";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Header } from "./layout/header&footer/header";
import { Footer } from "./layout/header&footer/footer";
import { Homepage } from "./layout/homepage/homepage";
import { NotePage } from "./layout/note/notepage";

function App() {
  return (
    <Router>
      <>
        <Header />

        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/note" element={<NotePage />} />
        </Routes>

        <Footer />
      </>
    </Router>
  );
}

export default App;
