import { useState } from "react";
import Header from "./Header";
import Home from "./Home";
import Contact from "./Contact";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <Header setPage={setPage} />

      {page === "home" ? <Home /> : <Contact />}

      <Footer />
    </>
  );
}

export default App;