import { Toaster } from "react-hot-toast";
import "./App.css";
import Home from "./pages/Home";

function App() {
    return (
        <div className="flex items-center justify-center w-screen h-screen py-4 px-4">
            <Home />
            <Toaster />
        </div>
    );
}

export default App;
