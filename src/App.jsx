import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import Update from "./Update";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-user" element={<Create />} />  {/* Make sure this route exists */}
        <Route path="/edit-user/:id" element={<Update />} />
      </Routes>
    </Router>
  );
}

export default App;
