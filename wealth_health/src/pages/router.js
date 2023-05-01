import '../assets/css/main.css'

import { Routes, Route } from "react-router-dom";

import Home from "./home.js";
import Employee from "./employee";
import Header from "../layout/header.js"
import Footer from "../layout/footer.js"

const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<><Header /><Footer /></>}>
                <Route path="/" index element={<Home />} />
                <Route path="/employee" element={<Employee />} />
                <Route path="*" element={<Home />} />
            </Route>
        </Routes>
    )
};

export default Router;
