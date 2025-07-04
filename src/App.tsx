import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contacts from "./components/Contacts/Contacts";
import AddForm from "./components/AddForm/AddForm";

const App = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <Routes>
                    {["/", "/posts"].map((path) => (
                        <Route path={path} element={<Home />} />
                    ))}
                    <Route path="/add-post" element={<AddForm />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
            </div>
        </>
    );
};

export default App;
