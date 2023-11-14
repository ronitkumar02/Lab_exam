import React from "react";
import "./App.css";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./compontents/Home";
import Faculty from "./compontents/Faculty";
import Student from "./compontents/Student";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path={`/`} element={<Home/>}/>
          <Route exact path={`/faculty`} element={<Faculty/>}/>
          <Route exact path={`/student`} element={<Student/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
