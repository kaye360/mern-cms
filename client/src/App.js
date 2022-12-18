
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import './App.css';
import './index.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import Post from "./pages/Post";
import EditPost from "./pages/EditPost";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="App mx-auto max-w-5xl ">
    <Router basename="/">
      
      <ScrollToTop />

      <Nav />

      <main className="min-h-screen p-4">
        
        <Routes>

          
          <Route path="/" element={ <Index /> } />
          
          <Route path="post/:slug" element={ <Post /> } />

          <Route path="admin" element={ <Admin /> } />

          <Route path="admin/edit/:slug" element={ <EditPost /> } />


        </Routes>

      </main>

      <Footer />

    </Router>
    </div>
  );
}

export default App;
