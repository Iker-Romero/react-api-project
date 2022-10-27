import { Outlet } from "react-router";
import { Nav } from "../components/Nav";
import React from "react";
import "./App.css";
import Characters from "../pages/Characters";

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
