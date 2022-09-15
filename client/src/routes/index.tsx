import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { About } from "../pages/About/About";
import { Home } from "../pages/Home/Home";

export const RouterApp = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Navigate to="/home" /> } />
                <Route path="/home" element={ <Home /> } />
                <Route path="/about" element={ <About /> } />
            </Routes>
        </BrowserRouter>
    )
}