import React from "react";
import { ContactList, Navbar } from "./components";
import User from "./User";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/user/:userId" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
