import React from "react";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import Home from "/Pages/Home";
import About from "/Pages/About";
import Vans from "/Pages/Vans";

export default function App() {
    return (
        <BrowserRouter>
            <header>
                <Link className="site-logo" to="/">
                    #VanLife
                </Link>
                <nav>
                    <Link to="/About">About</Link>
                    <Link to="/Vans">Vans</Link>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Vans" element={<Vans />} />
                <Route path="/About" element={<About />} />
            </Routes>
        </BrowserRouter>
    );
}
