// import { Route, Routes } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import CreateBlog from './components/Blog/CreateBlog';
import BlogDetails from './components/BlogDetails/BlogDetails';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Routes>
       <Route exact path="/" element={<Home/>} />
       <Route exact path="/create" element={<CreateBlog/>}/>
       <Route exact path='/blog/:id' element={<BlogDetails/>}/>
     </Routes>
    </div>
  );
}

export default App;
