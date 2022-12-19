
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

import './App.css';
import './index.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Index from "./pages/Index";
import Admin from "./pages/Admin";
import Post from "./pages/Post";
import EditPost from "./pages/EditPost";
import CreatePost from "./pages/CreatePost"
import ScrollToTop from "./components/ScrollToTop";
import Flash from "./components/Flash";
import { createContext, useState, } from "react";

export const FlashContext = createContext()


function App() {

  const [flash, setFlash] = useState(false)

  return (
    <div className="App mx-auto max-w-5xl ">
    <FlashContext.Provider value={ [flash, setFlash] }>

    <Flash />

    <Router basename="/">
      
      <ScrollToTop />

      <Nav />

      <main className="p-4">
        
        <Routes>

          <Route path="/" element={ <Index /> } />
          
          <Route path="post/:slug" element={ <Post /> } />

          <Route path="admin" element={ <Admin /> } />

          <Route path="admin/edit/:slug" element={ <EditPost /> } />

          <Route path="admin/create" element={ <CreatePost /> } />


        </Routes>

      </main>

      <Footer />

    </Router>

    </FlashContext.Provider>
    </div>
  );
}

export default App;
