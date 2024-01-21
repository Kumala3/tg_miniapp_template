import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home.tsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    path="/" 
                    element={<Home />} 
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
