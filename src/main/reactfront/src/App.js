import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routers/Home";
import Festival from "./routers/Festival";
import Recommend from "./routers/Recommend";
import Community from "./routers/Community";
import Navigation from "./components/Navigation";
import ArticleForm from './routers/ArticleForm';

function App() {
    return (
        <Router>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/festival" element={<Festival />} />
                <Route path="/recommend" element={<Recommend />} />
                <Route path="/community" element={<Community />} />
                <Route path="/login" element={<ArticleForm/>} />
            </Routes>
        </Router>
    );
}

export default App;
