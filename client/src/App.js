import React from "react";
import "./App.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./views/Dashboard";
import NewVote from "./views/NewVote";
import Vote from "./views/Vote";

function App() {
  return (
    <div className="App">
      <h1 className="App-title text-center">Voting Dojo</h1>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/votes/new" element={<NewVote/>}/>
          <Route path="/votes/:id/" element={<Vote/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
