
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import './App.css';
import './index.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Index from "./pages/Index";
import Admin from "./pages/Admin";

function App() {
  return (
    <div className="App mx-auto max-w-5xl ">
    <Router basename="/">

      <Nav />

      <main className="min-h-screen p-4">
        
        <Routes>

          <Route path="/" element={ <Index /> } />

          <Route path="admin" element={ <Admin /> } />

        </Routes>

      </main>

      <Footer />

    </Router>
    </div>
  );
}

export default App;
